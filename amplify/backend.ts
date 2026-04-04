import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { sendEmail } from './functions/send-email/resource';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as apigatewayv2 from 'aws-cdk-lib/aws-apigatewayv2';
import { HttpLambdaIntegration } from 'aws-cdk-lib/aws-apigatewayv2-integrations';

const backend = defineBackend({
    auth,
    data,
    sendEmail,
});

// SES permission (you already have this)
const sesPolicy = new iam.PolicyStatement({
    actions: ['ses:SendEmail', 'ses:SendRawEmail'],
    resources: ['*'],
});
backend.sendEmail.resources.lambda.addToRolePolicy(sesPolicy);

// Create the API Gateway HTTP API
const apiStack = backend.createStack('ContactApiStack');

const httpApi = new apigatewayv2.HttpApi(apiStack, 'ContactHttpApi', {
    apiName: 'myContactApi',
    corsPreflight: {
        allowOrigins: ['*'],
        allowMethods: [
            apigatewayv2.CorsHttpMethod.POST,
            apigatewayv2.CorsHttpMethod.OPTIONS,
        ],
        allowHeaders: ['Content-Type', 'Authorization'],
    },
});

const lambdaIntegration = new HttpLambdaIntegration(
    'SendEmailIntegration',
    backend.sendEmail.resources.lambda
);

httpApi.addRoutes({
    path: '/contact',
    methods: [apigatewayv2.HttpMethod.POST],
    integration: lambdaIntegration,
});

// Export URL into amplify_outputs.json
backend.addOutput({
    custom: {
        contactApiUrl: httpApi.apiEndpoint,
    },
});