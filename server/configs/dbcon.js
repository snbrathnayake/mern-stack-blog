require('dotenv/config');
const mongoose = require('mongoose');

const mongodbConnect = async () => {
   try {
      await mongoose.connect(process.env.DATABASE_LOCAL, {
         useNewUrlParser: true,
         useCreateIndex: true,
         useFindAndModify: false,
         useUnifiedTopology: true,
      });

      console.log("[127.0.0.1] :: Connection has been established, ", Date().toString());

   } catch (error) {
      console.log("[127.0.0.1] :: Connection has been failed", Date().toString());
      process.exit(1);
   }
};


module.exports = mongodbConnect;
