import { LoginBodyDTO } from "../../shared/dto/user.dto";

export interface UserData {
    readonly username: string;
    readonly token: string;
    readonly email: string;
    readonly bio: string;
    readonly image?: string;
  }
  
  export interface UserRO {
    readonly user: UserData;
  }
  
  export interface UsersRO {
    readonly list: UserData[];
    readonly count: number;
  }

  export type LoginBodyRO = {
    readonly user: LoginBodyDTO
  }
  