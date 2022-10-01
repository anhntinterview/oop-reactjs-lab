import { IsDateString, IsEmail, IsNumberString } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UserEntity {
    @Expose()
    @IsNumberString()
    readonly id!: number;

    @Expose()
    readonly username!: string;

    @Expose()
    @IsEmail()
    readonly email!: string;

    @Expose()
    readonly bio!: string;

    @Expose()
    readonly image!: string;

    @Expose()
    readonly password!: string;

    @Expose()
    @IsDateString()
    readonly created!: Date;

    @Expose()
    @IsDateString()
    readonly updated!: Date;
}
