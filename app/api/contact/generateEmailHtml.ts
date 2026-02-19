interface ContactFormEmailProps {
    fullName: string;
    email: string;
    phone?: string;
    company: string;
    organizationType: string;
    serviceInterest: string;
    resourceCount?: string;
    gpuType?: string[];
    timeline: string;
    message: string;
}

export const generateEmailHtml = ({
    fullName,
    email,
    phone,
    company,
    organizationType,
    serviceInterest,
    resourceCount,
    gpuType,
    timeline,
    message,
}: ContactFormEmailProps): string => {
    const gpuList = gpuType ? gpuType.join(", ") : "";

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="background-color: #f4f4f7; font-family: sans-serif; margin: 0; padding: 0;">
    <div style="width: 100%; max-width: 600px; background-color: #ffffff; margin: 40px auto; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
        
        <!-- HEADER -->
        <div style="background-color: #ffffff; padding: 30px; border-bottom: 1px solid #f0f0f0; display: flex; align-items: center; justify-content: space-between;">
            <div style="color: #FF0055; font-size: 26px; font-weight: 800; letter-spacing: -0.5px; line-height: 1;">
                <span style="margin-right: 4px;">///</span>SISCOM
            </div>
            <div style="color: #999; font-size: 12px; font-weight: 500; margin-top: 8px; text-align: right; float: right;">
                New Lead Notification
            </div>
        </div>

        <!-- CONTENT -->
        <div style="padding: 40px;">
            <h1 style="color: #111; font-size: 22px; font-weight: 700; line-height: 1.2; margin: 0 0 15px 0;">
                New contact request from ${company}
            </h1>
            <p style="color: #555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                Hello Admin,<br>
                <strong>${fullName}</strong> has submitted a new inquiry regarding <strong>${serviceInterest}</strong>.
            </p>

            <!-- INFO TABLE -->
            <table style="width: 100%; border-collapse: collapse; border: 1px solid #e0e0e0; border-radius: 4px; overflow: hidden; margin: 20px 0 30px 0;">
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="background-color: #f9f9f9; width: 30%; color: #666; font-weight: 700; text-transform: uppercase; font-size: 12px; padding: 12px; border-right: 1px solid #eee; vertical-align: top;">
                        Contact Name
                    </td>
                    <td style="color: #222; font-weight: 500; font-size: 14px; padding: 12px; vertical-align: top;">
                        ${fullName}
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="background-color: #f9f9f9; width: 30%; color: #666; font-weight: 700; text-transform: uppercase; font-size: 12px; padding: 12px; border-right: 1px solid #eee; vertical-align: top;">
                        Email Address
                    </td>
                    <td style="color: #222; font-weight: 500; font-size: 14px; padding: 12px; vertical-align: top;">
                        <a href="mailto:${email}" style="color: #FF0055; text-decoration: none; font-weight: 500;">${email}</a>
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="background-color: #f9f9f9; width: 30%; color: #666; font-weight: 700; text-transform: uppercase; font-size: 12px; padding: 12px; border-right: 1px solid #eee; vertical-align: top;">
                        Company
                    </td>
                    <td style="color: #222; font-weight: 500; font-size: 14px; padding: 12px; vertical-align: top;">
                        ${company}
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="background-color: #f9f9f9; width: 30%; color: #666; font-weight: 700; text-transform: uppercase; font-size: 12px; padding: 12px; border-right: 1px solid #eee; vertical-align: top;">
                        Phone
                    </td>
                    <td style="color: #222; font-weight: 500; font-size: 14px; padding: 12px; vertical-align: top;">
                        ${phone || "N/A"}
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="background-color: #f9f9f9; width: 30%; color: #666; font-weight: 700; text-transform: uppercase; font-size: 12px; padding: 12px; border-right: 1px solid #eee; vertical-align: top;">
                        Org Type
                    </td>
                    <td style="color: #222; font-weight: 500; font-size: 14px; padding: 12px; vertical-align: top;">
                        ${organizationType}
                    </td>
                </tr>
                <tr>
                    <td style="background-color: #f9f9f9; width: 30%; color: #666; font-weight: 700; text-transform: uppercase; font-size: 12px; padding: 12px; border-right: 1px solid #eee; vertical-align: top;">
                        Timeline
                    </td>
                    <td style="color: #222; font-weight: 500; font-size: 14px; padding: 12px; vertical-align: top;">
                        ${timeline}
                    </td>
                </tr>
            </table>

            ${(resourceCount || (gpuType && gpuType.length > 0)) ? `
            <!-- HIGHLIGHT BOX -->
            <div style="background-color: #f8f9fc; border: 1px solid #eef0f5; border-left: 4px solid #FF0055; border-radius: 2px; padding: 25px; margin-bottom: 30px;">
                <div style="color: #1a1a1a; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #e0e0e0;">
                    Infrastructure Requirements
                </div>
                <table style="width: 100%;">
                    <tr>
                        <td style="width: 50%; vertical-align: top;">
                            <div style="color: #111; font-size: 20px; font-weight: 700; margin-bottom: 4px;">
                                ${resourceCount || 'N/A'}
                            </div>
                            <div style="color: #666; font-size: 14px;">
                                Quantity Requested
                            </div>
                        </td>
                        <td style="width: 50%; vertical-align: top;">
                            <div style="color: #111; font-size: 20px; font-weight: 700; margin-bottom: 4px;">
                                ${gpuType && gpuType.length > 0 ? gpuType[0] : 'None'}
                                ${gpuType && gpuType.length > 1 ? '<span style="font-size: 14px; font-weight: 400; color: #666; margin-left: 4px;">(+' + (gpuType.length - 1) + ' more)</span>' : ''}
                            </div>
                            <div style="color: #666; font-size: 14px;">
                                ${gpuType && gpuType.length > 1 ? 'Models: ' + gpuList : 'Model'}
                            </div>
                        </td>
                    </tr>
                </table>
            </div>` : ''}

            <!-- MESSAGE BOX -->
            <div style="margin-bottom: 35px;">
                <div style="color: #888; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px;">
                    Message
                </div>
                <div style="color: #555; font-size: 16px; font-style: italic; border-left: 3px solid #ddd; padding: 5px 0 5px 15px;">
                    "${message}"
                </div>
            </div>

            <!-- ACTION BUTTON -->
            <div style="text-align: left; padding-top: 10px; border-top: 1px solid #f0f0f0; margin-top: 10px;">
                <a href="mailto:${email}" style="background-color: #FF0055; color: #ffffff; font-size: 15px; font-weight: 600; padding: 12px 28px; border-radius: 6px; text-decoration: none; display: inline-block; margin-top: 25px;">
                    Reply to Lead
                </a>
            </div>

        </div>

        <!-- FOOTER -->
        <div style="background-color: #fafafa; padding: 20px; text-align: center; border-top: 1px solid #eeeeee;">
            <p style="color: #999; font-size: 12px; line-height: 1.5; margin: 0;">
                System Notification • SISCOM Internal<br>
                Reliance Center, Woodvale, Nairobi, Kenya
            </p>
        </div>

    </div>
</body>
</html>
    `;
};
