import mongoose from 'mongoose';

export async function connectDB () {
  try {

    if(process.env.DATABASE_ADRESS === undefined) throw new Error('There is no dburi.')
    
    const dburi:string = process.env.DATABASE_ADRESS;

    // const dburi: string = `mongodb://mongodb:27017/`;
    // const dburi: string = `mongodb://host.docker.internal:27017/`;

    await mongoose.connect(dburi, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    console.log('Successful connection to the database');
  } catch (error) {
    console.error('Error with connecting to database: \n', error);
  }
}