type TemplateFormEntry = {
  [key: string]: FormDataEntryValue;
};

export const bookingFormTemplate = (data: TemplateFormEntry) => {
  const { firstName, lastName, email, date, time, message } = data;
  const emailContentTitle = "Appointment Request";

  return `
    <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8f9fa;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f8f9fa; padding: 20px 0;">
            <tr>
              <td align="center">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="background: #ffffff; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                  <tr>
                    <td style="background: rgb(75, 85, 99); color: #ffffff; padding: 20px; text-align: center; font-size: 24px; font-weight: bold;">
                      ${emailContentTitle}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 20px; color: #333333; font-size: 16px; line-height: 1.6;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width: 100%; margin-top: 20px; font-size: 14px; border-collapse: collapse;">
                        <tr>
                          <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Name</td>
                          <td style="padding: 10px; border: 1px solid #ddd;">
                            <p>${firstName} ${lastName}</P>
                          </td>
                        </tr>  
                        <tr style="background-color: #f1f1f1;">
                          <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Email</td>
                          <td style="padding: 10px; border: 1px solid #ddd;">
                            ${email}
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Booking Date</td>
                          <td style="padding: 10px; border: 1px solid #ddd;">
                            ${date}
                          </td>
                        </tr>
                        <tr style="background-color: #f1f1f1;">
                          <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Booking Time</td>
                          <td style="padding: 10px; border: 1px solid #ddd;">
                            ${time}
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Message</td>
                          <td style="padding: 10px; border: 1px solid #ddd;">
                            ${message}
                          </td>
                        </tr>
                      </table>
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
