const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const compose = async (emailData, type) => {
  if (type === 'contact') {
    emailData.templateId = 'd-186e35707107415488f73c9e734777fd';
    const result = await send(emailData);
    return result;
  } else if (type === 'order') {
    emailData.templateId = 'd-e271caa3216f4c7688a721209843c328';
    const result = await send(emailData);
    return result;
  } else if (type === 'provider') {
    emailData.templateId = 'd-69b591ef006546c58002826c8715dd79';
    const result = await sendProvider(emailData);
    return result;
  } else {
    throw new Error('Wrong type');
  }
};

const send = async (emailData) => {
  const { to, from, subject, body, templateId } = emailData;
  const msg = {
    to: to,
    from: from,
    templateId: templateId,
    dynamic_template_data: {
      subject: subject,
      body: body,
    },
  };
  const res = await sgMail.send(msg);
  const { statusCode } = res[0];
  return statusCode;
};

const sendProvider = async (emailData) => {
  const { to, from, subject, body, templateId } = emailData;
  const msg = {
    to: to,
    from: from,
    templateId: templateId,
    dynamic_template_data: {
      subject: subject,
      name: body.name,
      phone: body.phone,
      email: body.email,
      city: body.city,
      capacity: body.capacity,
      price: body.price,
      plusInfo: body.plusInfo,
      agent: body.agent,
      source: body.source,
      products: body.products,
      file: body.file,
    },
  };
  const res = await sgMail.send(msg);
  const { statusCode } = res[0];
  return statusCode;
};

module.exports = { compose };
