/**
 * @author Jason McAffee
 * wrap underscore to expose it as a module so that it can be loaded like any other AMD module
 *
 */

define([
    // Load the original jQuery source file
    'order!lib/underscore/underscore-min'
],
    function(){
        // Tell Require.js that this module returns a reference to underscore
        return _;
    });