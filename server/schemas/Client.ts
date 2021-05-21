import { list } from '@keystone-next/keystone/schema';
import { text, select, relationship } from '@keystone-next/fields';

export const Client = list({
  fields: {
    client: text({ isRequired: true }),
    contact_name: text(),
    contact_phone: text(),
    street: text(),
    suburb: text(),
    city: text(),
    status: select({
      options: [
        { label: 'Active', value: 'ACTIVE' },
        { label: 'Inactive', value: 'INACTIVE' },
      ]
    }),
   job: relationship({ ref: 'Job.client' })
  },
});