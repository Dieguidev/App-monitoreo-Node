
export enum LogSeverityLevel {
  low = 'low',
  medium = 'medium',
  high = 'high'
}


export class LogEntity {

  public level: LogSeverityLevel;  //enum
  public message: string;
  public createdAt: Date;

}
