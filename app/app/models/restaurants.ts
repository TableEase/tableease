import { Address } from './address';
import { Meal } from './meal';

export interface Restaurant {
  id: number;
  name: string;
  phone_number: string;
  active: boolean;
  address: Address;
  location_id?: number;
  company_id?: number;
  meals?: Meal[];
}
