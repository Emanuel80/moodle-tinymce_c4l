/**
 * editor_plugin_src.js
 *
 * Copyright 2022 Emanuel Bechis
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */
// In 2018 June 09 G Valero changed one line .
// From: width : 40 + parseInt(ed.getLang('clozeeditor.delta_width', 0)),
// To:   width : 620 + parseInt(ed.getLang('clozeeditor.delta_width', 0)),
// In order to expand the window and prevent the 'Cancel' buttom
// from being truncated in some browsers in the French language.

$(document).ready(function(){

});


(function() {
    


        tinymce.create('tinymce.plugins.C4lPlugin', {
                /**
                 * Initializes the plugin, this will be executed after the plugin has been created.
                 * This call is done before the editor instance has finished it's initialization so use the onInit event
                 * of the editor instance to intercept that event.
                 *
                 * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
                 * @param {string} url Absolute URL to where the plugin is located.
                 */
            init : function(ed, url) {
                        // Register the command so that it can be invoked by
                        // Using tinyMCE.activeEditor.execCommand('mceclozeeditor'); .
                        ed.addCommand('c4l', function() {
                            lang = ed.getParam('language');
                                ed.windowManager.open({
                                    file : ed.getParam("moodle_plugin_base") + 'c4l/c4lpage.php?lang=' + lang ,
                                    width : 620 + parseInt(ed.getLang('c4l.delta_width', 0)),
                                    height : 360 + parseInt(ed.getLang('c4l.delta_height', 0)),
                                    inline : true
                                }, {
                                    plugin_url : url, // Plugin absolute URL.
                                });
                        });

                        // Register clozeeditor button.
                        ed.addButton('c4l', {
                            title : 'c4l',
                            cmd : 'c4l',
                            image : url + '/img/icon.png'
                        });

                        // Add a node change handler, selects the button in the UI when a image is selected.
                        ed.onNodeChange.add(function(ed, cm, n) {
                                cm.setActive('c4l', n.nodeName == 'IMG');
                        });

                        ed.contentCSS.push(ed.getParam("moodle_plugin_base") + '/c4l/styles.css');
            },

                /**
                 * Creates control instances based in the incomming name. This method is normally not
                 * needed since the addButton method of the tinymce.Editor class is a more easy way of adding buttons
                 * but you sometimes need to create more complex controls like listboxes, split buttons etc then this
                 * method can be used to create those.
                 *
                 * @param {String} n Name of the control to create.
                 * @param {tinymce.ControlManager} cm Control manager to use inorder to create new control.
                 * @return {tinymce.ui.Control} New control instance or null if no control was created.
                 */
            createControl : function(n, cm) {
                return null;
            },

                /**
                 * Returns information about the plugin as a name/value array.
                 * The current keys are longname, author, authorurl, infourl and version.
                 *
                 * @return {Object} Name/value array containing information about the plugin.
                 */
            getInfo : function() {
                        return {
                            longname : 'c4lTinyMCE plugin',
                            author : 'Roger Segú/Emanuel Bechis',
                            authorurl : '',
                            infourl : 'https://moodle.org/plugins/atto_c4l',
                            version : "1.0"
                };
            }
        });

        // Register plugin.
        tinymce.PluginManager.add('c4l', tinymce.plugins.C4lPlugin);

})();

