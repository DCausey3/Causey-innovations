import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";

const sns = new SNSClient({ region: "us-east-2" });

export const handler = async (event: any) => {
    const { phoneNumber, message } = event.arguments;

    const command = new PublishCommand({
        Message: message,
        PhoneNumber: phoneNumber, // Format: +11234567890
    });

    try {
        await sns.send(command);
        return "SMS Sent";
    } catch (error) {
        console.error(error);
        return "Failed to send SMS";
    }
};