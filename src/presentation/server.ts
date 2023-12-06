
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource()
);

const emailService = new EmailService();

export class Server {
  public static start() {
    console.log('Server started');
    // console.log(envs.MAILER_EMAIL,envs.MAILER_SECRET_KEY);


    // *mandar email
    // new SendEmailLogs(
    //   emailService,
    //   fileSystemLogRepository
    // ).execute(['diegogaraycullas@gmail.com', 'dgaray@crackthecode.la'])


    // emailService.sendEmailWithFileSystemLogs(['diegogaraycullas@gmail.com', 'dgaray@crackthecode.la']);


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


