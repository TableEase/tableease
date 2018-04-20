export interface Customers {
  id: string;
  acitve: boolean;
  email: string;
  name: {
    first: string;
    last: string;
  };
  phone: string;
  uid: string;
  username: string;
  restaurantId: string[];
  address: {
    home: {
      address1: {
        street: string;
        apartment: string;
        city: string;
        state: string;
        zip: number;
      };
    };
  };
}
