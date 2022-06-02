import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'creatDateFormat',
})
export class CreatDateFormatPipe implements PipeTransform {
  public transform(creatDate: string): string {
    moment.locale('en', {
      calendar: {
        lastDay: '[Yesterday] HH:mm',
        sameDay: '[Today] HH:mm',
        nextDay: '[Tomorrow] HH:mm',
        lastWeek: '[last] dddd',
        nextWeek: 'dddd [at] LT',
        sameElse: 'YYYY.MM.DD',
      },
    });

    return moment().diff(creatDate, 'days') >= 2
      ? moment(creatDate).fromNow()
      : moment(creatDate).calendar();
  }
}
