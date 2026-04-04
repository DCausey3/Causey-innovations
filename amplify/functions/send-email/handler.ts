// amplify/functions/send-email/handler.ts
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import type { Handler } from 'aws-lambda';

const sesClient = new SESClient({ region: "us-east-2" });

const handleContactForm = async (body: any) => {
    const { name, email, organization, projectType, message } = body;

    const params = {
        // Must be your verified SES email
        Source: `"Inquiry Website" <info@causeyinnovations.com>`,
        Destination: {
            ToAddresses: ["info@causeyinnovations.com"],
        },
        Message: {
            Subject: { Data: `New Project Inquiry: ${projectType} - ${name}` },
            Body: {
                Html: {
                    Data: `
                    <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px;">
                        <div style="background-color: #00d4d4; color: #0f1729; padding: 20px; text-align: center;">
                           <h1 style="margin: 0; font-size: 24px;">New Project Inquiry</h1>
                        </div>
                        
                        <div style="padding: 30px;">
                            <p><strong>Name:</strong> ${name}</p>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Organization:</strong> ${organization}</p>
                            <p><strong>Project Type:</strong> ${projectType}</p>
                            
                            <div style="margin-top: 25px; padding: 20px; background-color: #f9f9f9; border-left: 4px solid #00d4d4;">
                                <p style="margin: 0;">${message}</p>
                            </div>
                        </div>
                    </div>
                `
                }
            }
        },
        ReplyToAddresses: [email]
    };

    const command = new SendEmailCommand(params);
    await sesClient.send(command);
    return { success: true };
};

export const handler: Handler = async (event: any) => {
    try {
        const body = JSON.parse(event.body || '{}');
        const result = await handleContactForm(body);

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
            },
            body: JSON.stringify(result),
        };
    } catch (error: any) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};