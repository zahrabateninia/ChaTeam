export function createWelcomeEmailTemplate(name, clientURL) {
  const primaryColor = '#6366f1';
  const secondaryColor = '#4f46e5';
  const backgroundColor = '#f8fafc';
  const textColor = '#334155';
  const mutedText = '#64748b';

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Messenger</title>
    <!--[if mso]>
    <style type="text/css">
      body, table, td { font-family: Arial, sans-serif !important; }
    </style>
    <![endif]-->
  </head>
  <body style="margin: 0; padding: 0; background-color: ${backgroundColor}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: ${backgroundColor}; padding: 40px 20px;">
      <tr>
        <td align="center">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);">
            
            <tr>
              <td align="center" style="padding: 48px 40px 32px 40px;">
                <div style="width: 72px; height: 72px; margin-bottom: 24px;">
                   <img src="https://img.freepik.com/free-vector/hand-drawn-message-element-vector-cute-sticker_53876-118344.jpg" alt="Messenger" style="width: 100%; height: auto; border-radius: 18px;">
                </div>
                <h1 style="margin: 0; color: #1e293b; font-size: 28px; font-weight: 800; letter-spacing: -0.025em;">Welcome home, ${name}!</h1>
                <p style="margin: 12px 0 0 0; color: ${mutedText}; font-size: 16px; line-height: 24px;">We're so glad you've decided to join our community.</p>
              </td>
            </tr>

            <tr>
              <td style="padding: 0 40px 40px 40px;">
                <p style="margin: 0 0 24px 0; color: ${textColor}; font-size: 16px; line-height: 26px;">
                  Messenger is designed to keep you connected with what matters most. Whether it's a quick hello or a deep conversation, we've built the space for it.
                </p>

                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; border-radius: 16px; margin-bottom: 32px;">
                  <tr>
                    <td style="padding: 24px;">
                      <p style="margin: 0 0 16px 0; font-weight: 700; color: #1e293b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Quick Start Guide</p>
                      
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td width="24" valign="top" style="padding-bottom: 12px; font-size: 16px;">✨</td>
                          <td style="padding-bottom: 12px; padding-left: 12px; font-size: 15px; color: ${textColor};">Complete your profile to stand out</td>
                        </tr>
                        <tr>
                          <td width="24" valign="top" style="padding-bottom: 12px; font-size: 16px;">🔍</td>
                          <td style="padding-bottom: 12px; padding-left: 12px; font-size: 15px; color: ${textColor};">Sync contacts to find your friends</td>
                        </tr>
                        <tr>
                          <td width="24" valign="top" style="font-size: 16px;">💬</td>
                          <td style="padding-left: 12px; font-size: 15px; color: ${textColor};">Send your first "Hi" to a colleague</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <!-- Call to Action -->
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td align="center">
                      <a href="${clientURL}" style="display: inline-block; background-color: ${primaryColor}; color: #ffffff; padding: 16px 36px; border-radius: 12px; font-size: 16px; font-weight: 600; text-decoration: none; box-shadow: 0 4px 6px -1px rgba(99, 102, 241, 0.3);">Launch Messenger</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 32px 40px; border-top: 1px solid #f1f5f9; background-color: #fafafa;">
                <p style="margin: 0 0 16px 0; color: ${mutedText}; font-size: 14px; text-align: center; line-height: 20px;">
                  Need help? Check out our <a href="#" style="color: ${primaryColor}; text-decoration: none; font-weight: 500;">Help Center</a> or reply directly to this email.
                </p>
                <div style="text-align: center;">
                  <span style="display: inline-block; margin: 0 8px; color: #cbd5e1;">•</span>
                  <a href="#" style="color: ${mutedText}; font-size: 12px; text-decoration: none;">Privacy</a>
                  <span style="display: inline-block; margin: 0 8px; color: #cbd5e1;">•</span>
                  <a href="#" style="color: ${mutedText}; font-size: 12px; text-decoration: none;">Terms</a>
                  <span style="display: inline-block; margin: 0 8px; color: #cbd5e1;">•</span>
                  <a href="#" style="color: ${mutedText}; font-size: 12px; text-decoration: none;">Unsubscribe</a>
                </div>
              </td>
            </tr>
          </table>
          
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin-top: 24px;">
          
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}