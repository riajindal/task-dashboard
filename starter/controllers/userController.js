const User = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('./../utils/catchAsync');

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});

exports.updateMe = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This route is not for password updates. Please use /Update Password ',
        400
      )
    );
  }

  const filterBody = filterObj(req.body, 'name', 'email');
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filterBody, {
    new: true,
    runValidator: true,
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser,
    },
  });
});

exports.getUsers = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'This route is not yet defined',
  });
};

exports.createUsers = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'This is an internal error',
  });
};

exports.updateUsers = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'This is an internal error',
  });
};

exports.deleteUsers = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'This is an internal error',
  });
};
