/* eslint-disable prettier/prettier */
import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks()); //depois de cada teste vc limpa os mocks

  it('shoul have properties name and price', () => {
    const sut = createSut('Camiseta', 49.90);
    expect(sut).toHaveProperty('name', 'Camiseta')
    expect(sut.price).toBeCloseTo(49.90)
  });
});
