import { IsBoolean, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Month } from "../month.enum";

export class ParticipantsDto {
    @IsString()
    @IsNotEmpty()
    image: string;

    @IsString()
    name: string;

    @IsBoolean()
    collect: boolean;

    @IsString()
    month: Month;
}