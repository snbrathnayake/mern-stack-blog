require('dotenv/config');
const mongoose = require('mongoose');

const mongodbConnect = async () => {
   console.log("[mongodb]:: connecting...");
   console.clear();
   try {
      await mongoose.connect(process.env.DATABASE_LOCAL, {
         useNewUrlParser: true,
         useCreateIndex: true,
         useFindAndModify: false,
         useUnifiedTopology: true,
      });

      console.log("[mongodb] :: Connection has been established, ", Date().toString());

   } catch (error) {
      console.log("[mongodb] :: Connection has been failed", Date().toString());
      process.exit(1);
   }
};


module.exports = mongodbConnect;
