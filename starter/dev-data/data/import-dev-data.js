const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { debug } = require('console');
const Tour = require('../../models/tourModel');

dotenv.config({ path: './config.env', debug: true });
console.log(process.env.DATABASE);

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log('DB connection successful');
  });

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'uts-8')
);

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data Successfully Loaded!');
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data Successfully deleted!');
  } catch (err) {
    console.log(err);
  }
};

console.log(process.argv);
