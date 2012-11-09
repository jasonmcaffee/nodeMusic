define([
    'core/util/log',
    'jquery'
], function(log, $){
    log('DeviceInfo module loaded');

    //todo: make this better. pretty lame right now.
    /*
    * http://www.quirksmode.org/js/detect.html
    * Detect desktop browser info only if mobile browser device data not found.
     */
    var browserDetect = {
        init: function () {
            this.browser = this.searchString(this.dataBrowser) || "unknown-browser";
            this.version = this.searchVersion(navigator.userAgent)
                || this.searchVersion(navigator.appVersion)
                || "unknown-version";
            this.OS = this.searchString(this.dataOS) || "unknown-os";
        },
        searchString: function (data) {
            for (var i=0;i<data.length;i++)	{
                var dataString = data[i].string;
                var dataProp = data[i].prop;
                this.versionSearchString = data[i].versionSearch || data[i].identity;
                if (dataString) {
                    if (dataString.indexOf(data[i].subString) != -1)
                        return data[i].identity;
                }
                else if (dataProp)
                    return data[i].identity;
            }
        },
        searchVersion: function (dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index == -1) return;
            return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
        },
        dataBrowser: [
            {
                string: navigator.userAgent,
                subString: "Chrome",
                identity: "Chrome"
            },
            { 	string: navigator.userAgent,
                subString: "OmniWeb",
                versionSearch: "OmniWeb/",
                identity: "OmniWeb"
            },
            {
                string: navigator.vendor,
                subString: "Apple",
                identity: "Safari",
                versionSearch: "Version"
            },
            {
                prop: window.opera,
                identity: "Opera",
                versionSearch: "Version"
            },
            {
                string: navigator.vendor,
                subString: "iCab",
                identity: "iCab"
            },
            {
                string: navigator.vendor,
                subString: "KDE",
                identity: "Konqueror"
            },
            {
                string: navigator.userAgent,
                subString: "Firefox",
                identity: "Firefox"
            },
            {
                string: navigator.vendor,
                subString: "Camino",
                identity: "Camino"
            },
            {		// for newer Netscapes (6+)
                string: navigator.userAgent,
                subString: "Netscape",
                identity: "Netscape"
            },
            {
                string: navigator.userAgent,
                subString: "MSIE",
                identity: "Explorer",
                versionSearch: "MSIE"
            },
            {
                string: navigator.userAgent,
                subString: "Gecko",
                identity: "Mozilla",
                versionSearch: "rv"
            },
            { 		// for older Netscapes (4-)
                string: navigator.userAgent,
                subString: "Mozilla",
                identity: "Netscape",
                versionSearch: "Mozilla"
            }
        ],
        dataOS : [
            {
                string: navigator.platform,
                subString: "Win",
                identity: "Windows"
            },
            {
                string: navigator.platform,
                subString: "Mac",
                identity: "Mac"
            },
            {
                string: navigator.userAgent,
                subString: "iPhone",
                identity: "iPhone/iPod"
            },
            {
                string: navigator.platform,
                subString: "Linux",
                identity: "Linux"
            }
        ]

    };


    //from zepto
    function detect(ua){
        var os = {}, browser = {},
            webkit = ua.match(/WebKit\/([\d.]+)/),
            android = ua.match(/(Android)\s+([\d.]+)/),
            ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
            iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
            webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
            touchpad = webos && ua.match(/TouchPad/),
            kindle = ua.match(/Kindle\/([\d.]+)/),
            silk = ua.match(/Silk\/([\d._]+)/),
            blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/)

        // todo clean this up with a better OS/browser
        // separation. we need to discern between multiple
        // browsers on android, and decide if kindle fire in
        // silk mode is android or not

        if (browser.webkit = !!webkit) browser.version = webkit[1]

        if (android) os.android = true, os.version = android[2], os.name='android'       //todo: chrome on android
        if (iphone) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.'), os.name='iphone'
        if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.'), os.name='ipad'
        if (webos) os.webos = true, os.version = webos[2], os.name='webos'
        if (touchpad) os.touchpad = true, os.name='touchpad'
        if (blackberry) os.blackberry = true, os.version = blackberry[2], os.name='blackberry'
        if (kindle) os.kindle = true, os.version = kindle[1], os.name='kindle'
        if (silk) browser.silk = true, browser.version = silk[1]
        if (!silk && os.android && ua.match(/Kindle Fire/)) browser.silk = true


        if(android && ua.indexOf('Chrome') >=0 ){
            os.name = 'android-chrome';
        }
        //if no mobile browser info is detected, try desktop.
        if(!os.name){
            log('mobile device name not found. attempting desktop detection.');
            browserDetect.init();
            os.name = browserDetect.browser;
            os.version = browserDetect.version;
        }
        return os;
    }

    var deviceInfo = {
       os: detect(navigator.userAgent),
       addBrowserInfoCssClassToHtml : function(){

            var androidVersions = {
                '2.2.3' : {
                    lessThan : '4.0.6, 4.0.1, 3.0, 3.0.2',
                    greaterThan : '2.0, 2.1, 2.0.3, 2.1.2'
                }
            };

           //split the string into parts, then compare each part from left to right.
           //var versionParts = this.os.version.split('.');

            $(function(){
                log('add css class for os :{0} version:{1}', this.os.name, this.os.version);
                //todo: also add < and > for version targeting (e.g. css for android 3 and above)
                $('html')
                    .addClass(this.os.name)
                    .addClass(this.os.name+'-'+ this.os.version);
            }.bind(this));
       }
    };


    return deviceInfo;

});