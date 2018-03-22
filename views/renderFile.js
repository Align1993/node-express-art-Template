var template = require('art-template');
var defaults = template.defaults; // 模板选项
var options = Object.assign(defaults, {
    debug: process.env.NODE_ENV !== 'production'
});


function renderFile() {    
    var data;
    var filename = arguments[0];
    var callback = arguments[arguments.length - 1];

    if (arguments.length > 2) {
        data = arguments[1];

        if (arguments.length === 3) {
            // Express 4
            if (data.settings && data.settings['view options']) {
                options = Object.assign(data.settings['view options']);
            }
            // Express 3 and lower
            else {
                options = Object.assign(data);
            }
        } else {
            options = Object.assign(arguments[2]);
        }
    } else {
        data = {}
    }
    console.log(data);
    options.filename = filename;
    try {
        var render = template.compile(options);
        callback(null, render(data));
    } catch (e) {
        callback(e);
    }
};

renderFile.template = template;
module.exports = renderFile;