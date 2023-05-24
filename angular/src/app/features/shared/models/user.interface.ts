export interface User {
  id: string;
  username: string;
  password: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  avatar: string;
  createdDate: Date;
  createdBy: string;
  createdById: string;
  updatedDate: Date;
  updatedBy: string;
  updatedById: string;
  deletedDate: Date;
  deletedBy: string;
  deletedById: string;
  isDeleted: boolean;
}
