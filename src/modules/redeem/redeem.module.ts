import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedeemService } from './services/redeem.user.service';
import { RedeemController } from './controllers/redeem.user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [RedeemService],
  controllers: [RedeemController],

})
export class RedeemModule {}
