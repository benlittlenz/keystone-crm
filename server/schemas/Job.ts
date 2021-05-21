import { list } from '@keystone-next/keystone/schema';
import { text, select, relationship } from '@keystone-next/fields';

export const Job = list({
  // access:
  // ui
  fields: {
    job_code: text({ isRequired: true }),
    name: text(),
    description: text({ ui: {
      displayMode: 'textarea'
    }}),
    client: relationship({
      ref: 'Client.job',
      ui: {
        displayMode: 'cards',
        cardFields: ['client'],
        inlineCreate: { fields: ['client'] },
        inlineEdit: { fields: ['client'] },
      }
    }),
    street: text(),
    suburb: text(),
    status: select({
      options: [
        { label: 'Active', value: 'ACTIVE' },
        { label: 'Inactive', value: 'INACTIVE' },
      ]
    }),
    // TODO, add roles, cart and orders
  },
});