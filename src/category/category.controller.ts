import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { Roles } from 'src/auth/decoratots/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guards';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from 'src/user/role.enum';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) {}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.User)
    @Post()
    create(@Body() categoryDto: CategoryDto, @Req() req: any) {
        return this.categoryService.create(categoryDto, req.user);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.User)
    @Get('/:id')
    get(@Param('id') id: number) {
        return this.categoryService.get(id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    @Get()
    gets() {
        return this.categoryService.gets();
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.User)
    @Patch('/:id') 
    update(@Param('id') id:number,
    @Body() categoryDto: CategoryDto) {
        return this.categoryService.update(id, categoryDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    @Delete('/:id') 
    delete(@Param('id') id: number) {
        return this.categoryService.delete(id);
    }

}
 