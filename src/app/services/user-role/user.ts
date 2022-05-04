import { Role } from "./role";

export class User {
    id: number;
    email: string;
    username: string;
    role: Role;
    token?: string;

}
