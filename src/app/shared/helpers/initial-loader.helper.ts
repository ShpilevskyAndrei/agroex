import { NgxSpinnerService } from 'ngx-spinner';

export class InitialLoaderHelper {
  private static spinner: NgxSpinnerService;

  constructor(private spinner: NgxSpinnerService) {}

  public static show() {
    this.spinner.show();
  }

  public static remove() {
    this.spinner.hide();
  }
}
