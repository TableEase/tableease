import { Allergy } from './allergy';

export interface Meal {
  name: string;
  description: string;
  active?: boolean;
  rId?: string;
  cId?: string;
  price?: string;
  id?: string;
  position?: number;
  allergies?: Allergy[];
}
