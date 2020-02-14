import {FaCogs} from 'react-icons/fa';

export default {
  name: 'config',
  title: 'Config',
  icon: FaCogs,
  type: 'document',
  __experimental_actions: [/*'create', */ 'update', /* 'delete',*/ 'publish'],
  fields: [
    {
      name: 'maintenance',
      title: 'Maintenance mode',
      type: 'boolean'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image'
    },
    {
      name: 'themecolors',
      title: 'Theme colours',
      type: 'array',
      of: [
        {
          type: 'themecolor'
        }
      ]
    }
  ]
};
