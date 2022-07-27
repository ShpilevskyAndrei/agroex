export interface IAdvertisementApiResponse {
  advertisement: IAdvertisement;
}

export interface IAdvertisement {
  status: string;
  id_advertisement: number;
  slug: string;
}
