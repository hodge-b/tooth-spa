type TemplateFormEntry = {
  [key: string]: FormDataEntryValue;
};

export const bookingConfirmationTemplate = (data: TemplateFormEntry) => {
  const { firstName, date, time, message } = data;
  const businessEmail = "toothspadh@gmail.com";
  const businessName = "Tooth Spa Dental Hygiene";
  const baseUrl = process.env.BASE_URL ?? "";

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Appointment Request Confirmation</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8f9fa;">
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f8f9fa; padding: 20px 0;">
        <tr>
          <td align="center">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="background: #ffffff; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
              <tr>
                <td style="background: rgb(75, 85, 99); color: #ffffff; padding: 20px; text-align: center; font-size: 24px; font-weight: bold;">
                  Appointment Request Confirmation
                </td>
              </tr>
              <tr>
                  <td style="padding: 20px; color: #333333; font-size: 16px; line-height: 1.6;">
                    <p>Hello ${firstName},</p>

                    <p>Thank you for reaching out to us! We have received your appointment request, and our team is reviewing the details. Below is a summary of your submission:</p>

                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width: 100%; margin-top: 20px; font-size: 14px; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Booking Date</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${date}</td>
                      </tr>
                      <tr style="background-color: #f1f1f1;">
                        <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Booking Time</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${time}</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Message</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${message}</td>
                      </tr>
                    </table>

                    <br>
                    <p>If any details need to be updated, feel free to contact us at <a href="mailto:${businessEmail}">${businessEmail}</a>.</p>

                    <p>This is only a request. If there are any issues with the date or time, our team will reach out.</p>

                    <p>Thank you for choosing ${businessName}, and we look forward to serving you!</p>


                    <br>
                    <p>Best regards,</p>
                    <p>Our team at<br>${businessName}</p>
                    <br>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr align="center">
                        <td>
                          <a href=${baseUrl}>
                            <img src="${baseUrl}/images/tooth-spa-logo-compact.png" alt="Tooth spa logo" width="240" height="80" />
                          </a>
                        </td>
                      </tr>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
};
