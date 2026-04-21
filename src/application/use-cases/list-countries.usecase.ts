import { ICountriesRepository } from '../../domain/repositories/countries-repository';
import { Country } from '../../domain/entities/country';

export class ListCountriesUseCase {
  constructor(private countriesRepository: ICountriesRepository) {}

  async execute(): Promise<Country[]> {
    return await this.countriesRepository.listAll();
  }
}
