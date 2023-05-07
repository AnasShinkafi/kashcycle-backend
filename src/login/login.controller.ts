import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/guards/local.guard';

@Controller('login')
export class LoginController {
    constructor(private authService: AuthService ) {}

    @UseGuards(LocalAuthGuard)
    @Post()
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
}
