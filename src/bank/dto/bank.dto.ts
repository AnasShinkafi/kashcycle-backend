import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ProfileDto {

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    marital_status: string;

     @IsString()
    @IsNotEmpty()
    occupation: string;

    @IsString()
    @IsNotEmpty()
    picture: string;

    @IsString()
    @IsNotEmpty()
    gender: string;

    @IsNumber()
    @IsNotEmpty()
    monthly_income: number;
}