const express = require('express');
const projectController = require('./../controllers/projectController');
const authController = require('../controllers/authController');

const router = express.Router();

// router.param('id', projectController.checkID);

router
  .route('/top-5-cheap')
  .get(projectController.aliasTopprojects, projectController.getAllprojects);

router.route('/project-stats').get(projectController.getprojectStats);
router.route('/monthly-plan/:year').get(projectController.getMonthlyPlan);

router
  .route('/')
  .get(authController.protect, projectController.getAllprojects)
  .post(projectController.createproject);

router
  .route('/:id')
  .get(projectController.getproject)
  .patch(projectController.updateproject)
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    projectController.deleteproject
  );

module.exports = router;
