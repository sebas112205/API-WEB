import { Request, Response } from 'express';
import { ListCountriesUseCase } from '../../../application/use-cases/list-countries.usecase';
import { GetCountryByCodeUseCase } from '../../../application/use-cases/get-country-by-code.usecase';
import { FileCountriesRepository } from '../../../infrastructure/repositories/file-countries.repository';

const countriesRepository = new FileCountriesRepository();
const listCountriesUseCase = new ListCountriesUseCase(countriesRepository);
const getCountryByCodeUseCase = new GetCountryByCodeUseCase(countriesRepository);

export async function list(req: Request, res: Response) {
  try {
    const countries = await listCountriesUseCase.execute();
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to list countries' });
  }
}

export async function getLocation(req: Request, res: Response) {
  try {
    const { code } = req.params;
    const country = await getCountryByCodeUseCase.execute(code);
    
    if (!country) {
      return res.status(404).json({ error: 'Country not found' });
    }
    
    res.status(200).json(country);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get country' });
  }
}
