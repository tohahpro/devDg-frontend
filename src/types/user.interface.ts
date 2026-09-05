import { UserRole } from "@/lib/authUtils";

export interface IAdmin {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    profilePhoto: string;
    contactNumber: string;
    isDeleted: boolean;
}

export interface IClient {
    first_name: string;
    last_name: string;
    email: string;
    address: string;
    profilePhoto: string;
    contactNumber: string;
    isDeleted: boolean;
}

export interface UserInfo {
    id: string;
    email: string;
    role: UserRole;
    status: "ACTIVE" | "INACTIVE" | "DELETED" | "SUSPENDED";
    admin?: IAdmin;
    client?: IClient;
    createdAt: string;
    updatedAt: string;
}
