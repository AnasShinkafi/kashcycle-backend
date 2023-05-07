import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { Roles } from 'src/auth/decoratots/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guards';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from 'src/user/role.enum';
import { ParticipantsDto } from './dto/participants.dto';
import { ParticipantsService } from './participants.service';

@Controller('members')
export class ParticipantsController {
    constructor(private participantsService: ParticipantsService) {}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.User)
    @Post()
    create(@Body() participantsDto: ParticipantsDto, @Req() req: any) {
        return this.participantsService.create(participantsDto, req.user);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.User)
    @Get('/:id') 
    get(@Param('id') id: number) {
        return this.participantsService.get(id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    @Get('/')
    gets() {
        return this.participantsService.gets();
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.User)
    @Patch('/:id')
    edite(@Body() participantsDto: ParticipantsDto,
    @Param('id') id: number) {
        return this.participantsService.update(id, participantsDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    @Delete('/:id')
    delete(@Param('id') id:number) {
        return this.participantsService.delete(id);
    }
}
