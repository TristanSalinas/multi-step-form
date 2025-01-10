export interface User {
  name?: string;
  email?: string;
  phone?: string;
}
export type PlanName = "Arcade" | "Advanced" | "Pro";

export interface Plan {
  name: PlanName;
  price: number;
  billing: "MONTHLY" | "YEARLY";
}

export interface AddOns {
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
}

export interface FormData {
  user: User;
  plan: Plan;
  addOns: AddOns;
}
