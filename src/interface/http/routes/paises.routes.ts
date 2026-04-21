import { Router } from 'express';
import { list, getLocation } from '../controllers/paises.controllers';

const router = Router();

router.get('/', list);
router.get('/:code', getLocation);

export default router;
