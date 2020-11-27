export default {
  name: 'main',
  title: 'Main',
  type: 'document',
  __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      title: 'Main page segments',
      name: 'content',
      description:
        'Add segments below to feature on the front page, create segments using the segment menu to the left',
      type: 'array',
      of: [
        {
          type: 'reference',
          title: 'Segment',
          description: 'Pick a segment from the dropdown list below',
          to: [{ type: 'LayoutHome' }, { type: 'LayoutMap' }, { type: 'GalleryHome' }]
        }
      ]
    },
    {
      title: 'Menu items',
      name: 'menuitems',
      description: 'Add pages below to feature in the main menu',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { title: 'Menu text', name: 'text', type: 'string' },
            {
              title: 'Child pages',
              name: 'childpages',
              type: 'array',
              validation: Rule => Rule.required(),
              of: [
                {
                  type: 'reference',
                  title: 'Child page',
                  description: 'Pick a page from the dropdown list below',
                  to: [
                    {
                      type: 'page'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: 'Styling',
      name: 'styling',
      type: 'object',
      fields: [
        {
          title: 'Style',
          name: 'style',
          type: 'string',
          options: {
            list: [
              { title: 'Blue', value: 'blue' },
              { title: 'Dark', value: 'dark' },
              { title: 'Light', value: 'light' },
              { title: 'Custom', value: 'custom' }
            ],
            layout: 'radio'
          }
        },
        {
          title: 'Custom Color',
          name: 'custom_color',
          type: 'color',
          validation: Rule => [
            Rule.custom((custom_color, { document: { styling } }) => {
              if (typeof styling.style === 'undefined') {
                return true;
              }

              if (styling.style !== 'custom') {
                return true;
              }

              return custom_color
                ? true
                : 'Custom color is required for custom style';
            }),
            Rule.custom((custom_color, { document: { styling } }) => {
              if (typeof styling.style === 'undefined') return true;
              if (styling.style === 'custom') return true;
              return custom_color
                ? 'Color will not be used unless choosing custom option above'
                : true;
            }).warning()
          ]
        }
      ]
    }
  ]
};
