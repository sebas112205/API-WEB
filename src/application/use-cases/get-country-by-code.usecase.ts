import { ICountriesRepository } from '../../domain/repositories/countries-repository';
import { Country } from '../../domain/entities/country';

export class GetCountryByCodeUseCase {
  constructor(private countriesRepository: ICountriesRepository) {}

  async execute(code: string): Promise<Country | null> {
    return await this.countriesRepository.getByCode(code);
  }
}
