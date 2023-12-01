
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource()
);

export class Server {
  static start() {
    console.log('Server started');
    // console.log(envs.MAILER_EMAIL,envs.MAILER_SECRET_KEY);


    //*mandar email
    const emailService = new EmailService();
    emailService.sendEmail({
      to: 'diegogaraycullas@gmail.com',
      subject: 'Logs de sistema',
      htmlBody: `
        <h3>Logs de sistema - NOC</h3>
        <p>Lorem</p>
        <p>Ver logs adjuntos</p>
      `
    })


    // CronService.createJob(
    //   '*/5 * * * * *',
    //   () => {
    //     const url = 'https://google.com';
    //     new CheckService(
    //       fileSystemLogRepository,
    //       () => console.log(`${url} is ok`),
    //       (error) => console.log(error)
    //     ).execute(url);
    //     // new CheckService().execute('http://localhost:3000/posts')
    //   }
    // );


  }
}


