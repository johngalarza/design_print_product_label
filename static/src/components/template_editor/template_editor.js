/** @odoo-module **/

import { Component, onMounted } from "@odoo/owl";
import { registry } from "@web/core/registry";

export class TemplateEditor extends Component {
    static template = "design_print_product_label.TemplateEditor";

    setup() {
        onMounted(() => {
            this.editor = grapesjs.init({
                container: "#gjs",
                height: "100vh",
                storageManager: false,
            });
        });
    }
}

registry.category("actions").add("quick_transfer_action", TemplateEditor);