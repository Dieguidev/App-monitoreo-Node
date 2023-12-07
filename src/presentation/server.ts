
import { LogSeverityLevel } from "../domain/entities/log.entity";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDataSource } from "../infrastructure/datasources/mongo-log.dtasource";
import { PostgresLogDatasource } from "../infrastructure/datasources/postgres-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const fsLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource(),
);
const mongoLogRepository = new LogRepositoryImpl(
  new MongoLogDataSource(),
);
const postgresLogRepository = new LogRepositoryImpl(
  new PostgresLogDatasource(),
);

const emailService = new EmailService();

export class Server {
  public static async start() {
    console.log('Server started');
    // console.log(envs.MAILER_EMAIL,envs.MAILER_SECRET_KEY);


    // *mandar email
    // new SendEmailLogs(
    //   emailService,
    //   fileSystemLogRepository
    // ).execute(['diegogaraycullas@gmail.com', 'dgaray@crackthecode.la'])


    // emailService.sendEmailWithFileSystemLogs(['diegogaraycullas@gmail.com', 'dgaray@crackthecode.la']);


    // const logs = await logRepository.getLogs(LogSeverityLevel.low)
    // console.log(logs);


    //* para una sola base de datos
    // CronService.createJob(
    //   '*/5 * * * * *',
    //   () => {
    //     const url = 'https://google.com';
    //     new CheckService(
    //       logRepository,
    //       () => console.log(`${url} is ok`),
    //       (error) => console.log(error)
    //     ).execute(url);
    //     // new CheckService().execute('http://localhost:3000/posts')
    //   }
    // );


    // //* para varias bases de datos
    // CronService.createJob(
    //   '*/5 * * * * *',
    //   () => {
    //     const url = 'https://google.com';
    //     new CheckServiceMultiple(
    //       [fsLogRepository, mongoLogRepository,postgresLogRepository],
    //       () => console.log(`${url} is ok`),
    //       (error) => console.log(error)
    //     ).execute(url);
    //     // new CheckService().execute('http://localhost:3000/posts')
    //   }
    // );


  }
}


