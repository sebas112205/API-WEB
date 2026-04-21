import { Country } from '../entities/country';

export interface ICountriesRepository {
  listAll(): Promise<Country[]>;
  getByName(name: string): Promise<Country[]>;
}