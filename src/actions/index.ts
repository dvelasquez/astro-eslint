// the following imports are from the astro runtime API and
// are not found by eslint-plugin-import
import { defineAction } from 'astro:actions';
import { z } from 'astro:content';

console.log(z);

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
