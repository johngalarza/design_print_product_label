{
    'name': "Print Product Label",
    'version': '19.0.1.0.0',
    'depends': ['web'],
    'author': "John Galarza",
    'category': 'Productivity',
    'description': """
        A module to print and desing product labels.
    """,
    'data': [
        'views/menu.xml',
    ],
    'assets': {
        'web.assets_backend': [
            # library
            'design_print_product_label/static/src/lib/grapesjs/js/grapes.min.js',
            'design_print_product_label/static/src/lib/grapesjs/css/grapes.min.css',
            # component
            'design_print_product_label/static/src/components/template_editor/template_editor.xml',
            'design_print_product_label/static/src/components/template_editor/template_editor.js',

        ]
    }
}