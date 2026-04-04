import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { sendEmail } from './functions/send-email/resource';
import * as iam from 'aws-cdk-lib/aws-iam';

const backend = defineBackend({
    auth,
    data,
    sendEmail,
});

// Create the REST API stack

const sesPolicy = new iam.PolicyStatement({
    actions: ['ses:SendEmail', 'ses:SendRawEmail'],
    resources: ['*'], // Or restrict to your specific SES identity ARN
});

backend.sendEmail.resources.lambda.addToRolePolicy(sesPolicy);