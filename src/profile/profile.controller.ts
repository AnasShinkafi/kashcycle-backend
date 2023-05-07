import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/decoratots/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guards';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from 'src/user/role.enum';
import { ProfileDto } from './dto/profile.dto';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
    constructor(private profileService: ProfileService) {}

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.User)
    @Post()
    create(@Body() createDto: ProfileDto, @Req() req: any) {
        return this.profileService.create(createDto, req.user);
    }

    // @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Get('/:id')
    getProfile(@Param('id') id: number) {
        return this.profileService.getProfile(id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.User)
    @Get()
    getProfiles() {
        return this.profileService.getProfiles()
    }

    @Patch('/:id')
    update(@Body() profileDto: ProfileDto,
    @Param() id: number) {
        return this.profileService.update(id, profileDto)
    }

    @Delete('/:id')
    delete(@Param('id') id: number) {
        return this.profileService.delete(id);
    }
}
