module.exports = function(grunt){
    var handlebars = require('Handlebars'), //use this to precompile templates from html to js
        fs = require('fs');

    var config = grunt.config('templates');
    var log = function(){
        grunt.log.writeln.apply(grunt.log, arguments);
    };

    grunt.registerTask('compile-templates', function(){
        log('compile-templates called');

        var templateFiles = grunt.file.expand(config.templatesSourceDir + '/**/*.html');
        for(var i=0; i < templateFiles.length; ++i){
            var filePath = templateFiles[i];
            log('templateFile is : ' + filePath);

            var relativeFilePath = filePath.replace(config.templatesSourceDir, '');//get rid of src dir path
            relativeFilePath = relativeFilePath.replace('.html', '');//get rid of .html extension
            //log('relativeFilePath is : ' + relativeFilePath);

            //determine where the generated .js file with the compiled template will be placed
            var destinationFilePath = config.templatesDistDir + relativeFilePath + '.js';
            //log('destinationFilePath is : ' + destinationFilePath);

            //determine what the registered template & partial name for Handlebars (see function task comment)
            //NOOOOOO ! This doesn't work in Handlebars --> the registered template and partial name will be relativeFilePath, replacing '/' with '-' <--
            //Handlebars hates anything but letters in template name. UNIQUE TEMPLATE NAMES FOR NOW.
            var registeredTemplateAndPartialName = relativeFilePath.substring(relativeFilePath.lastIndexOf('/') + 1);
            //log('registeredTemplateAndPartialName is : ' + registeredTemplateAndPartialName);

            precompileHandlebarsTemplate(filePath, registeredTemplateAndPartialName, destinationFilePath);
        }

        log('done compile-templates');
    });





    /**
     * Generates a requirejs module containing the precompiled version of the template. (ie the template function)
     * @param templatePath - required - full path to the .html template file
     * @param templateName - required - name of the template and partial as it will be registered with handlebars. eg Handlebars.template[templateName]; Handlebars.registerPartial(templateName, ...);
     * @param outputPathAndFileName - required - full path to where the compiled template should be placed.
     */
    function precompileHandlebarsTemplate(templatePath, templateName, outputPathAndFileName){
        log('precompileHandlebarsTemplate called.');
        var FILE_ENCODING = 'utf-8';
        //first grab the html from the template file
        var templateSrc = grunt.file.read(templatePath);//fs.readFileSync(templatePath, FILE_ENCODING);
        //generate the js function for the template
        var templateFunction = handlebars.precompile(templateSrc);
        //wrap the generated template function as a require js module
        var wrappedTemplateFunction = wrapCompiledHandlebarsTemplateAsModule(templateName, templateFunction);

        //write out the require module to disk.
        //fs.writeFileSync(outputPathAndFileName, wrappedTemplateFunction, FILE_ENCODING);
        grunt.file.write(outputPathAndFileName, wrappedTemplateFunction);
        console.log('done compiling template ' + templateName);
    }

    /**
     * Wraps a generated template function as a requirejs module which returns the template function.
     * The template function will also be stored in Handlebars.templates["templateName"]
     *
     * @param templateName - required - the name of the template (usually generated by using the filename).
     * @param templateFunction - required - the result of calling require('Handlebars').precompile(). should be a function representation
     *                                      of the html template.
     */
    function wrapCompiledHandlebarsTemplateAsModule(templateName, templateFunction){
        var wrappedTemplateFunction =
                'define(["handlebars", "core/util/log"], function(Handlebars, log){ \n' +
                    'log("' + templateName +' precompiled template function module loaded."); \n' +
                    'var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {}; \n' +
                    'templates[\'' + templateName + '\'] = template('  +
                    templateFunction +
                    '); \n' +
                    'Handlebars.registerPartial("'+templateName+'", templates["'+ templateName +'"]); \n' + //everything is a partial and a template!
                    'return templates["'+ templateName +'"]; \n' +
                    '});'
            ;
        return wrappedTemplateFunction;
    }

};