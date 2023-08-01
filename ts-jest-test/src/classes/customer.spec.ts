/* eslint-disable prettier/prettier */
import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};
const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

describe('IndividualCustomer', () => {
  afterEach(() => jest.clearAllMocks()); //depois de cada teste vc limpa os mocks

  it('shoul have firstName, lastName, cpf', () => {
    const sut = createIndividualCustomer('Luiz', 'Otávio', '111.111');
    expect(sut).toHaveProperty('firstName', 'Luiz');
    expect(sut).toHaveProperty('lastName', 'Otávio');
    expect(sut).toHaveProperty('cpf', '111.111');
  });

  it('shoul have methods to get name and idn forindividual customers', () => {
    const sut = createIndividualCustomer('Luiz', 'Otávio', '111.111');
    expect(sut.getName()).toBe('Luiz Otávio');
    expect(sut.getIDN()).toBe('111.111');
  });
  /* EnterpriseCustomer */
});
describe('EnterpriseCustomer', () => {
  afterEach(() => jest.clearAllMocks()); //depois de cada teste vc limpa os mocks

  it('shoul have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Udemy', '222');
    expect(sut).toHaveProperty('name', 'Udemy');
    expect(sut).toHaveProperty('cnpj', '222');
  });

  it('shoul have methods to get name and idn for enterprise customers', () => {
    const sut = createEnterpriseCustomer('Udemy', '222');
    expect(sut.getName()).toBe('Udemy');
    expect(sut.getIDN()).toBe('222');
  });
});
