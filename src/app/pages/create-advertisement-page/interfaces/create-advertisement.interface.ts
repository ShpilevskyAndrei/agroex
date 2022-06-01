export interface ILocation {
  value: string;
  viewValue: string;
}

export interface ICountry {
  value: string;
  viewValue: string;
}

export interface IUnit {
  value: string;
  viewValue: string;
}

export interface ICurrency {
  value: string;
  viewValue: string;
}

export interface IAdvertisementFormCredentials {
  title: string;
  country?: string;
  location?: string;
  price: string;
  currency: string;
  quantity: string;
  unit: string;
  category: string;
}
