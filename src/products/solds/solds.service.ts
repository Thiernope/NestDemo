import { Injectable } from '@nestjs/common';

@Injectable()
export class SoldsService {
  getAllSolds() {
    return 'These are solds products';
  }
}
