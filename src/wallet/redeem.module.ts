import { Module } from '@nestjs/common';
import { RedeemController } from './redeem.controller';
import { RedeemService } from './redeem.service';

@Module({
  imports: [],
  controllers: [RedeemController],
  providers: [RedeemService],
})
export class RedeemModule {}
