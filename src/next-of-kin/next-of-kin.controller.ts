import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { Roles } from 'src/auth/decoratots/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guards';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from 'src/user/role.enum';
import { NextOfKinDto } from './dto/next-of-kin.dto';
import { NextOfKinEnttity } from './enyity/next-of-kin.entity';
import { NextOfKinService } from './next-of-kin.service';

@Controller('next-of-kin')
export class NextOfKinController {
    constructor(private nextOfKinService: NextOfKinService) {}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.User)
    @Post()
    create(@Body() nextOfKinDto: NextOfKinDto, @Req() req: any) {
        return this.nextOfKinService.add(nextOfKinDto, req.user);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.User)
    @Get('/:id')
    get(@Param('id') id: number) {
        return this.nextOfKinService.get(id);
    } 

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    @Get('/')
    gets() {
        return this.nextOfKinService.gets();
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.User)
    @Patch(':/id')
    update(@Param('id')id: number,
    @Body() nextOfKinDto: NextOfKinDto) {
        return this.nextOfKinService.update(id, nextOfKinDto)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    @Delete('/:id')
    delete(@Param('id') id: number) {
        return this.nextOfKinService.delete(id);
    }
} 
