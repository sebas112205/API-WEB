import { Request, Response } from 'express';
import { ListCountriesUseCase } from '../../../application/use-cases/list-countries.usecase';
import { GetCountryByNameUseCase } from '../../../application/use-cases/get-country-by-name.usecase';
import { FileCountriesRepository } from '../../../infrastructure/repositories/file-countries.repository';

const countriesRepository = new FileCountriesRepository();
const listCountriesUseCase = new ListCountriesUseCase(countriesRepository);
const getCountryByNameUseCase = new GetCountryByNameUseCase(countriesRepository);

export async function list(req: Request, res: Response) {
  try {
    const countries = await listCountriesUseCase.execute();
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to list countries' });
  }
}

export async function getByName(req: Request, res: Response) {
  try {
    const { name } = req.params as { name: string };
    const country = await getCountryByNameUseCase.execute(name);

    if (country.length === 0) {
      return res.status(404).json({ error: 'Country not found' });
    }
    res.status(200).json(country);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get country' });
  }
}
