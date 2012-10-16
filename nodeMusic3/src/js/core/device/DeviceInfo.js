define([
    'core/util/log'
], function(log){
    log('DeviceInfo module loaded');

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

        if (android) os.android = true, os.version = android[2], os.name='android'
        if (iphone) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.'), os.name='iphone'
        if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.'), os.name='ipad'
        if (webos) os.webos = true, os.version = webos[2], os.name='webos'
        if (touchpad) os.touchpad = true, os.name='touchpad'
        if (blackberry) os.blackberry = true, os.version = blackberry[2], os.name='blackberry'
        if (kindle) os.kindle = true, os.version = kindle[1], os.name='kindle'
        if (silk) browser.silk = true, browser.version = silk[1]
        if (!silk && os.android && ua.match(/Kindle Fire/)) browser.silk = true

        return os;
    }

    var deviceInfo = {
       os: detect(navigator.userAgent)
    };

    return deviceInfo;

});