import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class NextOfKinDto {
    @IsString()
    @IsNotEmpty()
    first_name: string;

    @IsString()
    @IsNotEmpty()
    second_name: string;

    @IsString()
    @IsNotEmpty()
    other_name: string

    @IsString()
    @IsNotEmpty()
    relation: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNumber()
    @IsNotEmpty()
    phone_number: number;
}