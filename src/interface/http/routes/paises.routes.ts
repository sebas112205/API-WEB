import { Router } from 'express';
import { list, getByName } from '../controllers/paises.controllers';

const router = Router();

router.get('/', list);
router.get('/:name', getByName);

export default router;
