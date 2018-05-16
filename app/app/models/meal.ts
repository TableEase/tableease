import { Allergy } from './allergy';

export interface Meal {
  name: string;
  restaurant_id: number;
  description: string;
  active?: boolean;
  rId?: string;
  cId?: string;
  price?: string;
  id?: string;
  position?: number;
  allergies?: Allergy[];
}
