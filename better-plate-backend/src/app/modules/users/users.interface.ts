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

export interface IUserWithoutPassword {
  _id: string;
  userName: string;
  email: string;
  contactNumber: string;
  profileImage: string;
  location: string;
  activeStatus: boolean;
  accountStatus: accountStatusEnums;
  role: roleEnums;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAuthUser {
  token: string;
  userData: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IAuthenticatedUser {
  accessToken: string;
  refreshToken: string;
}

export interface IUpdatePassword {
  userId: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export type IUserFilters = {
  searchTerm?: string;
  userName?: string;
  email?: string;
  accountStatus?: accountStatusEnums;
};
