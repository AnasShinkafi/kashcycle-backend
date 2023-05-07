import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { LedgerService } from './ledger.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guards';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decoratots/roles.decorator';
import { Role } from 'src/user/role.enum';
import { LedgerDto } from './dto/ledger.dto';

@Controller('ledger')
export class LedgerController {
    constructor(
        private ledgerService: LedgerService
    ) {}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.User)
    @Post()
    create(@Body() ledgerDto: LedgerDto, @Req() req: any) {
        return this.ledgerService.createLedger(ledgerDto, req.user);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.User)
    @Get('/:id')
    get(@Param() id: number) {
        return this.ledgerService.getLedger(id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    @Get()
    gets() {
        return this.ledgerService.getLedgers();
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.User)
    @Patch('/:id')
    update(@Param() id: number, @Body() ledgerDto: LedgerDto) {
        return this.ledgerService.updateLedger(id,ledgerDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.User)
    @Delete('/:id')
    delete(@Param() id: number) {
        return this.ledgerService.deleteLedger(id);
    }
}
