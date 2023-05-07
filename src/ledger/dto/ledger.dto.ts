import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class LedgerDto {
    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @IsNumber()
    @IsNotEmpty()
    slot: number;

    @IsString()
    @IsNotEmpty()
    type: string;
}