import { defineFunction } from '@aws-amplify/backend';

export const contactFunction = defineFunction({
    name: 'send-email',
    entry: './handler.ts',
    environment: {},
});