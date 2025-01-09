export interface User {
  name?: string;
  email?: string;
  phone?: string;
}

export interface Plan {
  name: string;
  price: number;
  billing: "MONTHLY" | "YEARLY";
}

export interface AddOns {
  onlineService: boolean;
  largerSrtorage: boolean;
  customizableProfile: boolean;
}

export interface FormData {
  user?: User;
  plan?: Plan;
  addOns?: AddOns;
}
