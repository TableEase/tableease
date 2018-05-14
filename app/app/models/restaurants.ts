import { Address } from './address';

export interface Restaurant {
  id: string;
  location_id: Number;
  company_id: Number;
  name: string;
  phone_number: string;
  address: Address;
  active: boolean;
}
