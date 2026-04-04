import { defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
    loginWith: {
        email: true,
    },
    senders: {
        email: {
            // IMPORTANT: This email must have a "Verified" status in SES
            fromEmail: "info@causeyinnovations.com",
            fromName: "Inquiry Website",
        },
    },
    groups: ["ADMINS"],
});