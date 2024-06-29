require('dotenv').config({ path: '/root/var/www/apiFreelance/.env' }); 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const validator = require('validator');


const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
    cors({
      origin: 'https://zaenithweb.fr',
      methods: 'POST',
      credentials: true,
    })
  );

  const transporter = nodemailer.createTransport({
    host: 'smtp.ionos.fr',
    port: 465,
    secure: true,
    auth: {
      user: process.env.IONOS_EMAIL,
      pass: process.env.IONOS_PASSWORD,
    },
    authMethod: 'PLAIN',

  });

  app.post('/apiFreelance/send-email', async (req, res) => {
    try {
      const { userName, userEmail, companyName, subject, userMessage } =
        req.body;
  
      if (!userName || !validator.isEmail(userEmail) || !userMessage || !subject) {
        return res.status(400).json({ error: 'Données invalides' });
      }
  
      const mailOptions = {
        from: process.env.IONOS_EMAIL,
        to: process.env.IONOS_EMAIL,
        subject: 'Demande de contact',
        text: `
          Nom: ${userName}
          Email: ${userEmail}
          Sujet : ${subject}
          Nom de l'entreprise: ${companyName}
          Message: ${userMessage}
        `,
      };
  
      const info = await transporter.sendMail(mailOptions);
  
      console.log('Message envoyé : %s', info.messageId);
      res.setHeader('Content-Type', 'application/json');
      res.status(200).send('E-mail envoyé avec succès');
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'e-mail :", error);
      console.log('mes identifiant', process.env.NODE_MAILER_USERNAME);
      res.setHeader('Content-Type', 'application/json');
      res
        .status(500)
        .send("Erreur lors de l'envoi de l'e-mail : " + error);
        console.log('identifiants : ', process.env.NODE_MAILER_USERNAME);


    }
  });

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
