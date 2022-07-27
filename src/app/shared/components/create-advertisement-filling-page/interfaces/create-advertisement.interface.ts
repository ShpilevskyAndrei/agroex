export interface IBaseCreateAdvertisement {
  value: string;
  viewValue: string;
}

export interface ILocation extends IBaseCreateAdvertisement {}
export interface ICountry extends IBaseCreateAdvertisement {}
export interface IUnit extends IBaseCreateAdvertisement {}
export interface ICurrency extends IBaseCreateAdvertisement {}
export interface ICategory extends IBaseCreateAdvertisement {}
export interface IProductType extends IBaseCreateAdvertisement {}
