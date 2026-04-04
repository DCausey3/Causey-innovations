import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { sendEmail } from './functions/send-email/resource';
import {Cors, LambdaIntegration, RestApi} from "aws-cdk-lib/aws-apigateway";

const backend = defineBackend({
    auth,
    data,
    sendEmail,
});

// Create the REST API stack
const apiStack = backend.createStack('api-stack');

const myApi = new RestApi(apiStack, 'ContactApi', {
    defaultCorsPreflightOptions: {
        allowOrigins: Cors.ALL_ORIGINS,
        allowMethods: Cors.ALL_METHODS,
        allowHeaders: Cors.DEFAULT_HEADERS,
    },
});

const contactResource = myApi.root.addResource('contact');
contactResource.addMethod('POST', new LambdaIntegration(backend.sendEmail.resources.lambda));