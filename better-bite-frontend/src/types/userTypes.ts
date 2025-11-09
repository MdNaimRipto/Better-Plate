export type roleEnums = "USER" | "ADMIN";
export type accountStatusEnums = "ACTIVE" | "FREEZE";

export interface IUser {
  userName: string;
  email: string;
  contactNumber: string;
  password: string;
  profileImage: string;
  location: string;
  activeStatus: boolean;
  accountStatus: accountStatusEnums;
  role: roleEnums;
}
