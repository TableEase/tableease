import { GeoPoint } from '@firebase/firestore-types';
import { Location } from './location';

export interface Restaurant {
  uid: string;
  rid: string;
  name: string;
  phone: string;
  locations: Location[];
  active: boolean;
}
