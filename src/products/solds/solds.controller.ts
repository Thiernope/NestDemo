import { Controller, Get } from '@nestjs/common';
import { SoldsService } from './solds.service';

@Controller('products/solds')
export class SoldsController {
  constructor(private readonly soldsService: SoldsService) {}
  @Get()
  getAllSolds() {
    return 'These are all solds products';
  }
}
