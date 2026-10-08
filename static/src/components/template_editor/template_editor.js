/** @odoo-module **/

import { Component, onMounted, useRef } from "@odoo/owl";
import { registry } from "@web/core/registry";
const { createStudioEditor } = window.GrapesJsStudioSDK;

export class TemplateEditor extends Component {
    static template = "design_print_product_label.TemplateEditor";

    setup() {

        this.editor = null;
        this.editorContainer = useRef('editorContainer');

        onMounted(() => {
            this.initEditor();
        });
    }

    initEditor() {
        this.editor = createStudioEditor({
            root: this.editorContainer.el,
            project: {
                type: 'document',
                default: {
                    pages: [
                        {
                            name: 'Invoice',
                            component: `<!DOCTYPE html>
                    <html>
                        <body style="padding: 40px; font-family: Arial, Helvetica, sans-serif">
                        <h1>New Document</h1>
                        <p>Content of the document.</p>
                        </body>
                    <html>
                    `,
                        }
                    ]
                }
            },
            
            layout: {
                default: {
                    type: 'row',
                    height: '100%',
                    children: [
                        {
                            type: 'sidebarLeft',
                            children: { type: 'panelLayers', header: { label: 'Layers', collapsible: false, icon: 'layers' } }
                        },
                        {
                            type: 'canvasSidebarTop',
                            sidebarTop: {
                                rightContainer: {
                                    buttons: ({ items }) => [
                                        {
                                            id: 'print',
                                            icon: '<svg viewBox="0 0 24 24"><path d="M18 3H6v4h12m1 5a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1m-3 7H8v-5h8m3-6H5a3 3 0 0 0-3 3v6h4v4h12v-4h4v-6a3 3 0 0 0-3-3Z"/></svg>',
                                            onClick: ({ editor }) => editor.runCommand('presetPrintable:print')
                                        },
                                        ...items.filter(item => !['showImportCode', 'fullscreen'].includes(item.id))
                                    ]
                                }
                            }
                        },
                        { type: 'sidebarRight' }
                    ]
                }
            },


        })
    }
}

registry.category("actions").add("template_editor_action", TemplateEditor);