import { IsAlphanumeric, IsEmail, IsEnum, IsNotEmpty, IsString, MaxLength, MinLength, NotContains, Validate } from "class-validator";
import { Role } from "../role.enum";

export class UserDto {
    @IsString()
    first_name: string;

    @IsString()
    last_name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsAlphanumeric()
    @MaxLength(10, { message: 'Maxium length is 10'})
    @MinLength(8, { message:'Minium lenght is 8'})
    @NotContains(" ", { message: "No spaces allowed"})
    password: string;

    @IsEnum(Role)
    role: Role;
}
