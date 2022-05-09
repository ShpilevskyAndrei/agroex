export class Category {
  id: number;
  title: string;
  icon?: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
