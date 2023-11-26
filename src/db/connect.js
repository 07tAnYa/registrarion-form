const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

mongoose.connect("mongodb://localhost:27017/BharatInternRegd")
.then(() => {
    console.log(`connection successful`);
})
.catch((e) => {
    console.log(`no connection`);
})
