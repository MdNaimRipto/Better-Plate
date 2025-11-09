export interface IPaymentBody {
  packageInfo: {
    planType: string;
    mealPerDay: string[];
    daysOfWeek: string[];
    totalDays: 7 | 30 | 90;
  };
  fullName: string;
  email: string;
  phoneNumber: string;
  location: string;
  currency: string;
  amount: string;
}
