import { ICountriesRepository } from '../../domain/repositories/countries-repository';
import { Country } from '../../domain/entities/country';
import fs from 'fs/promises';
import path from 'path';

export class FileCountriesRepository implements ICountriesRepository {
  private dataPath: string;
  private countries: Country[] = [];

  constructor() {
    this.dataPath = path.join(process.cwd(), 'src/data/countries.json');
  }

  async listAll(): Promise<Country[]> {
    if (this.countries.length === 0) {
      await this.loadData();
    }
    return this.countries;
  }

  async getByCode(code: string): Promise<Country[]> {
    if (this.countries.length === 0) {
      await this.loadData();
    }

    const countryCode = code.toLowerCase();
    const countries = this.countries.filter((c) => {
      const common = c.name.common.toLowerCase();
      const official = c.name.official.toLowerCase();
      return common.includes(countryCode) || official.includes(countryCode);
    });

    return countries;
  }

  private async loadData(): Promise<void> {
    try {
      const data = await fs.readFile(this.dataPath, 'utf-8');
      this.countries = JSON.parse(data);
    } catch (error) {
      console.error('Error loading countries data:', error);
      this.countries = [];
    }
  }
}
