const sgMail = require('@sendgrid/mail');


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const verification_email_id = process.env.SENDGRID_VERIFICATION_EMAIL_TEMPLATE_ID;

const login_email_id = process.env.SENDGRID_LOGIN_EMAIL_TEMPLATE_ID;


async function sendEmailWithTemplate(to, dynamicTemplateData) {
  const msg = {
    to: to,
    from: 'musemasaad3@gmail.com', 
    templateId: verification_email_id,
    dynamic_template_data: dynamicTemplateData
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}


async function sendLogin(to, dynamicTemplateData) {
  const msg = {
    to: to,
    from: 'musemasaad3@gmail.com', 
    templateId: login_email_id,
    dynamic_template_data: dynamicTemplateData
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

module.exports = { sendEmailWithTemplate , sendLogin};
