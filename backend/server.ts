import express from 'express';
import cookieParser from 'cookie-parser';

import { connectDB } from "./src/database/database";

import { router } from "./src/routes/mainRoutes";

const app: express.Application = express();

app.set('x-powered-by', false);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser(process.env.SECRET ?? "secret"));

app.use('/api', router);

const PORT: number = Number(process.env.PORT ?? 3002);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`App is listening on port ${PORT}!`);
  console.log('---------------------------------------------');
});