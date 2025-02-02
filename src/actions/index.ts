import { defineAction } from 'astro:actions';

export const server = {
  company: {
    getCompanyData: defineAction({
      handler: async () => {
        return {
          name: 'Acme Corp',
          address: '123 Main St, Anytown, USA',
          phone: '555-123-4567',
        };
      },
    }),
  },
};
