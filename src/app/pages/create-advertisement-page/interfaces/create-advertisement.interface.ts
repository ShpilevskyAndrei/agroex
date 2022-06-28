export interface IBaseCreateAdvertisementType {
  value: string;
  viewValue: string;
}

export interface ILocation extends IBaseCreateAdvertisementType {}
export interface ICountry extends IBaseCreateAdvertisementType {}
export interface IUnit extends IBaseCreateAdvertisementType {}
export interface ICurrency extends IBaseCreateAdvertisementType {}
export interface ICategory extends IBaseCreateAdvertisementType {}
export interface IProductType extends IBaseCreateAdvertisementType {}
