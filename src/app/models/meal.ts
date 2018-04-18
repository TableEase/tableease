import { Allergy } from './allergy';

export interface Meal {
  name: string;
  description: string;
  active?: boolean;
  calories?: string;
  rId?: string;
  cId?: string;
  price?: string;
  id?: string;
  course?: string;
  position?: number;
  allergies?: Allergy[];
}
