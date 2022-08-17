const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose.connect(
   "mongodb+srv://mistermagooo:1234@cluster0.v2pih.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (!err) {
        console.log(`*** Conexion correcta a la base de datos ***`);
      } else {
        console.log(err);
      }
    }
  );

  mongoose.set("useCreateIndex", true);
  mongoose.set("useFindAndModify", false);
};

module.exports = { dbConnect };
