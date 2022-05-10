export class Category {
  public id: number;
  public title: string;
  public icon?: string;

  public constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
