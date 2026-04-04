import { defineFunction } from '@aws-amplify/backend';

export const sendSMSFunc = defineFunction({
    name: 'send-sms',
    entry: './handler.ts',
});