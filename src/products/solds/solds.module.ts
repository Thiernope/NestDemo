import { Module } from '@nestjs/common';
import { SoldsController } from './solds.controller';
import { SoldsService } from './solds.service';

@Module({
  imports: [],
  controllers: [SoldsController],
  providers: [SoldsService],
})
export class SoldsModule {}
