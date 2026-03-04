import { Coffee } from './entities/coffee.entity';

export interface CoffeesDataSource {
  [index: number]: Coffee;
}
