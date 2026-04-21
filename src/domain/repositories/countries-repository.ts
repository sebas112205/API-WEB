import { Country } from '../entities/country';

export interface ICountriesRepository {
  listAll(): Promise<Country[]>;
  getByCode(code: string): Promise<Country | null>;
}
