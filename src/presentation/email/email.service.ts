import nodemailer from 'nodemailer'
import { envs } from '../../config/plugins/envs.plugins'

interface SendMailOptions {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachments?: Attachments[];
}

interface Attachments {
  filename: string;
  path: string;
}

// todo: definir attachements

export class EmailService {

  private transporter = nodemailer.createTransport({
    service: envs.MAILER_SERVICE,
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY
    }
  });


  //*metodo para envio de emails
  async sendEmail(options: SendMailOptions): Promise<boolean> {

    const { to, subject, htmlBody, attachments = [] } = options;

    try {

      const sentInformation = await this.transporter.sendMail({
        // from: envs.MAILER_EMAIL,
        to,
        subject,
        html: htmlBody,
        attachments,
      })

      console.log(sentInformation);


      return true;
    } catch (error) {
      return false;
    }
  }

  async sendEmailWithFileSystemLogs(to: string | string[]) {
    const subject = 'Logs de sistema';
    const htmlBody = `
        <h3>Logs de sistema - NOC</h3>
        <p>Lorem</p>
        <p>Ver logs adjuntos</p>
      `;
    const attachments: Attachments[]  = [
      {filename: 'logs-all.log', path: './logs/logs-all.log'},
      {filename: 'logs-high.log', path: './logs/logs-high.log'},
      {filename: 'logs-medium.log', path: './logs/logs-medium.log'},
    ]

    return this.sendEmail({
      to,
      subject,
      htmlBody,
      attachments
    })
  }

}
