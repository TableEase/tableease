export interface User {
  uid: string;
  email: string;
  name?: {
    first: string;
    last: string;
  };
  phone?: string;
  role?: string;
  active?: boolean;
  username?: string;
  location?: Location[];
}

export interface Roles {
  subscriber?: boolean;
  editor?: boolean;
  admin?: boolean;
}
