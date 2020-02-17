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
          to: [{type: 'LayoutHome'}, {type: 'LayoutMap'}]
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
            {title: 'Menu text', name: 'text', type: 'string'},
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
    }
  ]
};
