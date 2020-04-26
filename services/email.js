const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const compose = async (emailData, type) => {
  if (type === 'contact') {
    const { to, from, subject, body } = emailData;
    const msg = {
      to: to,
      from: from,
      templateId: 'd-186e35707107415488f73c9e734777fd',
      dynamic_template_data: {
        subject: subject,
        body: body,
      },
    };
    const result = await send(msg);
    return result;
  } else if (type === 'provider') {
    const { to, from, subject, body } = emailData;
    const msg = {
      to: to,
      from: from,
      templateId: 'd-69b591ef006546c58002826c8715dd79',
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
    const result = await send(msg);
    return result;
  } else if (type === 'institutional') {
    const { to, from, subject, body } = emailData;
    const msg = {
      to: to,
      from: from,
      templateId: 'd-65c65c563895417ea22385564c09a805',
      dynamic_template_data: {
        subject: subject,
        name: body.name,
        phone: body.phone,
        email: body.email,
        text: body.text,
      },
    };
    const result = await send(msg);
    return result;
  } else if (type === 'order') {
    const { to, from, subject, body } = emailData;
    const msg = {
      to: to,
      from: from,
      templateId: 'd-e271caa3216f4c7688a721209843c328',
      dynamic_template_data: {
        subject: subject,
        body: body,
      },
    };
    const result = await send(msg);
    return result;
  } else {
    throw new Error('Wrong type');
  }
};

const send = async (msg) => {
  const res = await sgMail.send(msg);
  const { statusCode } = res[0];
  return statusCode;
};

module.exports = { compose };
