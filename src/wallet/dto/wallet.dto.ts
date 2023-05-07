import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class WalletDto {

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsNumber()
    @IsNotEmpty()
    monthly_income: number;
}