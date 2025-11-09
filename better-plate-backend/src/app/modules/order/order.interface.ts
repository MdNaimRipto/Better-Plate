interface Customer {
  fullName: string;
  email: string;
  phone: string;
  address: string;
}

export type currentStatusEnums = "ACTIVE" | "PAUSED" | "CANCELED" | "SPAMMING";

export interface IOrder {
  packageInfo: {
    planType: string;
    mealPerDay: string[];
    daysOfWeek: string[];
    totalDays: number;
  };
  startingDate: Date;
  expireDate: Date;
  transactionId: string;
  amount: string;
  currency: string;
  paymentDate: string;
  currentStatus: currentStatusEnums;
  customer: Customer;
}

export type IOrderFilters = {
  searchTerm?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  transactionId?: string;
  currentStatus?: string;
  cardType?: string;
  cardLast4?: string;
};
