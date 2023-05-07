import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guards';
import { Roles } from 'src/auth/decoratots/roles.decorator';
import { Role } from 'src/user/role.enum';
import { WalletDto } from './dto/wallet.dto';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('wallet')
export class WalletController {
    constructor(private walletService: WalletService) {}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.User)
    @Post()
    create(@Body() walletDto: WalletDto , @Req() req: any) {
        return this.walletService.createWallet(walletDto, req.user);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.User)
    @Get('/:id')
    get(@Param() id: number) {
        return this.walletService.getWallet(id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    @Get() 
    gets() {
        return this.walletService.getWallets();
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.User)
    @Patch('/:id')
    update(@Param() id: number, @Body() walletDto: WalletDto) {
        return this.walletService.updateWallet(id, walletDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.User)
    @Delete('/:id')
    delete(@Param() id:number) {
        return this.walletService.deleteWallet(id);
    }
}
