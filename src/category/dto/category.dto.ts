import { IsEnum, IsNumber, IsString } from "class-validator";
import { Categories } from "../categorie.enum";

export class CategoryDto {
    @IsEnum(Categories)
    category: Categories;

    @IsNumber()
    slot: number;

    @IsNumber()
    taken: number;

    @IsNumber()
    remaining: number;
}