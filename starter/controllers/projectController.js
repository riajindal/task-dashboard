const AppError = require('../utils/appError');
const project = require('../models/projectModel');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');

exports.aliasTopprojects = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingsAverage,price';
  req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
  next();
};

exports.getAllprojects = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(project.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const projects = await features.query;

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: projects.length,
    data: {
      projects,
    },
  });
});

exports.getproject = catchAsync(async (req, res, next) => {
  const project = await project.findById(req.params.id);
  // project.findOne({ _id: req.params.id })

  if (!project) {
    return next(new AppError('No project found by that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      project,
    },
  });
});

exports.createproject = catchAsync(async (req, res, next) => {
  const newproject = await project.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      project: newproject,
    },
  });
});

exports.updateproject = catchAsync(async (req, res, next) => {
  const project = await project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: {
      project,
    },
  });
});

exports.deleteproject = catchAsync(async (req, res, next) => {
  const project = await project.findByIdAndDelete(req.params.id);

  if (!project) {
    return next(new AppError('No project found by that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.getprojectStats = catchAsync(async (req, res, next) => {
  const stats = await project.aggregate([
    {
      $match: { ratingsAverage: { $gte: 4.5 } },
    },
    {
      $group: {
        _id: { $toUpper: '$difficulty' },
        numprojects: { $sum: 1 },
        numRatings: { $sum: '$ratingsQuantity' },
        avgRating: { $avg: '$ratingsAverage' },
        avgPrice: { $avg: '$price' },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' },
      },
    },
    {
      $sort: { avgPrice: 1 },
    },
    // {
    //   $match: { _id: { $ne: 'EASY' } }
    // }
  ]);

  res.status(200).json({
    status: 'success',
    data: {
      stats,
    },
  });
});

exports.getMonthlyPlan = catchAsync(async (req, res, next) => {
  const year = req.params.year * 1; // 2021

  const plan = await project.aggregate([
    {
      $unwind: '$startDates',
    },
    {
      $match: {
        startDates: {
          $gte: new Date(`${year}-01-01`),
          $lte: new Date(`${year}-12-31`),
        },
      },
    },
    {
      $group: {
        _id: { $month: '$startDates' },
        numprojectStarts: { $sum: 1 },
        projects: { $push: '$name' },
      },
    },
    {
      $addFields: { month: '$_id' },
    },
    {
      $project: {
        _id: 0,
      },
    },
    {
      $sort: { numprojectStarts: -1 },
    },
    {
      $limit: 12,
    },
  ]);

  res.status(200).json({
    status: 'success',
    data: {
      plan,
    },
  });
});
