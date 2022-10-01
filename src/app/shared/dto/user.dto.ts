import { IsEmail, IsNotEmpty } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class LoginBodyDTO {

    @Expose()
    @IsNotEmpty()
    @IsEmail()
    readonly username!: string;

    @Expose()
    @IsNotEmpty()
    readonly password!: string;

}
