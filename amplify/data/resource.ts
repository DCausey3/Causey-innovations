// amplify/data/resource.ts
import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
    Inquiry: a.model({
        name: a.string().required(),
        email: a.string().required(),
        message: a.string().required(),
    })
        // Allow anyone to "create" an inquiry (ideal for public contact forms)
        .authorization((allow) => [allow.guest().to(['create'])]),
});

export type Schema = ClientSchema<typeof schema>;
export const data = defineData({
    schema,
    authorizationModes: {
        defaultAuthorizationMode: 'iam', // Best for guest access
    },
});