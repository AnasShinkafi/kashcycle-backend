import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ContributionTypeDto {
    @IsNumber()
    @IsNotEmpty()
    number_of_users: number;

    @IsString()
    @IsNotEmpty()
    payment_period: string;

    @IsNumber()
    @IsNotEmpty()
    duration: number;

    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    readonly start_date: Date;

    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    readonly end_date: Date;

    @IsNumber()
    @IsNotEmpty()
    amount: number;
}