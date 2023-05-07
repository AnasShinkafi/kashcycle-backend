import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { ContributionTypeService } from './contribution-type.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guards';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decoratots/roles.decorator';
import { Role } from 'src/user/role.enum';
import { ContributionTypeDto } from './dto/contribution-type.dt';

@Controller('contribution-type')
export class ContributionTypeController {
    constructor(
        private contributionTypeService: ContributionTypeService
    ) {}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.User)
    @Post()
    create(@Body() contributionDto: ContributionTypeDto, @Req() req: any) {
        return this.contributionTypeService.create(contributionDto, req.user);
    } 

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.User)
    @Get('/:id') 
    get(@Param() id: number) {
        return this.contributionTypeService.get(id);
    } 

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    @Get('/')
    gets() {
        return this.contributionTypeService.gets();
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.User)
    @Patch('/:id')
    update(@Param() id: number, @Body() contributionDto: ContributionTypeDto) {
        return this.contributionTypeService.update(id, contributionDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.User)
    @Delete('/:id') 
    delete(@Param() id:number) {
        return this.contributionTypeService.delete(id);
    }
}
