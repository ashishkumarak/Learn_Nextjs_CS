import mongoose from "mongoose";

// here we only make connection to Mongodb
export default async () => {

  try {
     // in video DB_OPTIONS is used with local setup.
    const DB_OPTIONS = { 
      dbName : process.env.DBNAME ,
      user : process.env.DBUSERNAME,
      pass: process.env.DBPASSWORD,
      authSource: process.env.DBAUTHSOURCE
    }
    // If you want to connect more options like above given in DB_OPTIONS
    // await mongoose.connect(process.env.DATABASE_URL , DB_OPTIONS ) ;

// *****************************************
    // I used mongodb Atlas cloud so used only URI in which given db name also
    await mongoose.connect( process.env.DATABASE_URI ) ;
    console.log("Connected Successfully...");

    
  } catch (error) {
    console.log(error);
  }

}