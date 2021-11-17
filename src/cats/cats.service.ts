import { Injectable, Inject } from '@nestjs/common';
// import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './cat.entity';

// export interface Cat {
//   name: string;
//   age: number;
//   breed: string;
// }

@Injectable()
export class CatsService {
  constructor(
    @Inject('CATS_REPOSITORY') private catsRepository: typeof Cat
  ) {}

  async getAll(): Promise<Cat[]> {
    return this.catsRepository.findAll<Cat>();
  }
}
