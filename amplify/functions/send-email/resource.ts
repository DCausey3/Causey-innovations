import { defineFunction } from '@aws-amplify/backend';


export const sendEmail = defineFunction({
    name: 'send-email-handler',
    entry: './handler.ts',
});