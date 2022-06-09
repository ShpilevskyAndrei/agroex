import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timeFormat',
})
export class TimeFormatPipe implements PipeTransform {
  public transform(timer: number | null): unknown {
    return moment.utc(timer).format('HH:mm:ss');
  }
}
