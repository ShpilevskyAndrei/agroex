import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'availableDateFormat',
})
export class AvailableDateFormatPipe implements PipeTransform {
  public transform(
    creatDate: string,
    type: 'days' | 'hours' = 'days',
    term: number = 3
  ): string {
    const nowDateFormat = moment(moment()).format('YYYY-MM-DD HH:mm');
    const availabilityFormat = moment(creatDate)
      .add(term, type)
      .format('YYYY-MM-DD HH:mm');
    const duration = moment.duration(
      moment(availabilityFormat).diff(moment(nowDateFormat))
    );
    const days = Math.floor(duration.asDays());
    const daysFormat = days >= 0 ? `${days}d` : '0d';
    const hoursFormat = duration.hours() >= 0 ? `${duration.hours()}h ` : '0h';
    const minutesFormat = `${duration.minutes()}m`;

    return `${daysFormat} ${hoursFormat}`;
  }
}
