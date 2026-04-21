import express from 'express';
import cors from 'cors';
import paisesRoutes from './interface/http/routes/paises.routes';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use('/api/countries', paisesRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
