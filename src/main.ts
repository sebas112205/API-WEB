import express from 'express';
import paisesRoutes from './interface/http/routes/paises.routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/countries', paisesRoutes);

app.listen(PORT, () => {
  console.log(Server running on port );
});

export default app;
