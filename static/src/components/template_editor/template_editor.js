/** @odoo-module **/

import { Component, onMounted } from "@odoo/owl";
import { registry } from "@web/core/registry";

export class TemplateEditor extends Component {
    static template = "design_print_product_label.TemplateEditor";

    setup() {
        onMounted(() => {
            
        });
    }
}

registry.category("actions").add("template_editor_action", TemplateEditor);