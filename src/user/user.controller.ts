import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { Roles } from 'src/auth/decoratots/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guards';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { UserDto } from './dto/user.dto';
import { Role } from './role.enum';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService ) {}

    @Post()
    register(@Body() userDto: UserDto, ) {
        return this.userService.createUser(userDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    @Get()
    findUsers() {
        return this.userService.getUsers();
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.User)
    @Get('/:id')
    getUser(@Param('id', ParseIntPipe)id: number) {
        return this.userService.getUser(id)
    }

    @UseGuards(JwtAuthGuard)
    @Roles(Role.User)
    @Patch('/:id')
    editeUser(@Body() editeUserDto: UserDto,
    @Param('id') id: number) {
        return this.userService.updateUser(editeUserDto, id);
    }

    @UseGuards(JwtAuthGuard)
    @Roles(Role.Admin)
    @Delete('/:id')
    delete(@Param('id') id: number) {
        return this.userService.delete(id);
    }
}
