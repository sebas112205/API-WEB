import { ICountriesRepository } from '../../domain/repositories/countries-repository';
import { Country } from '../../domain/entities/country';

export class GetCountryByNameUseCase {
  constructor(private countriesRepository: ICountriesRepository) { }

  async execute(name: string): Promise<Country[]> {
    return await this.countriesRepository.getByName(name);
  }
}
