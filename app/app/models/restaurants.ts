import { Address } from './address';
import { Meal } from './meal';

export interface Restaurant {
  id: number;
  location_id: number;
  company_id: number;
  name: string;
  phone_number: string;
  address: Address;
  active: boolean;
  meals: Meal[];
}
