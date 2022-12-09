const mongoose = require('mongoose');
const slugify = require('slugify');
// const validator = require('validator');

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A project must have a name'],
      unique: true,
      trim: true,
      maxlength: [40, 'A project name must have less or equal then 40 characters'],
      minlength: [10, 'A project name must have more or equal then 10 characters'],
    },
    slug: String
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

projectSchema.virtual('durationWeeks').get(function () {
  return this.duration / 7;
});

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
projectSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// projectSchema.pre('save', function(next) {
//   console.log('Will save document...');
//   next();
// });

// projectSchema.post('save', function(doc, next) {
//   console.log(doc);
//   next();
// });

// QUERY MIDDLEWARE
// projectSchema.pre('find', function(next) {
projectSchema.pre(/^find/, function (next) {
  this.find({ secretproject: { $ne: true } });

  this.start = Date.now();
  next();
});

projectSchema.post(/^find/, function (docs, next) {
  console.log(`Query took ${Date.now() - this.start} milliseconds!`);
  next();
});

// AGGREGATION MIDDLEWARE
projectSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { secretproject: { $ne: true } } });

  console.log(this.pipeline());
  next();
});

const project = mongoose.model('project', projectSchema);

module.exports = project;
