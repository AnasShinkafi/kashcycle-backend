import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/user/dto/user.dto';
import { Repository } from 'typeorm';
import { CategoryDto } from './dto/category.dto';
import { CategoryEntity } from './entity/category.entity';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(CategoryEntity)
        private categoryRepository: Repository<CategoryEntity>
    ) {}

    async create(categoryDto: CategoryDto, user: UserDto) {
        const category = await this.categoryRepository.create({
            ...categoryDto,
            user: user
        });
        await this.categoryRepository.save(category);
        return category;
    }

    async get(id: number): Promise<CategoryEntity> {
        const category = await this.categoryRepository.findOne({ where: { id }});
        if (category) {
            return category;
        }
        throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
    }

    async gets(): Promise<CategoryEntity[]> {
        return this.categoryRepository.find();
    }

    async update(id: number, categoryDto: CategoryDto) {
        const category = await this.categoryRepository.update( id, categoryDto);
        if (category) {
            return category;
        }
        throw new HttpException('Category does not exist', HttpStatus.NOT_FOUND);
    }

    async delete(id: number) {
        const deletedCategory = await this.categoryRepository.delete(id);
        if (!deletedCategory.affected) {
            throw new HttpException('Category does not exist', HttpStatus.NOT_FOUND)
        } 
    }
}
