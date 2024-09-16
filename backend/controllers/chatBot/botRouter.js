'use strict';

const express = require('express');
const router = express.Router();

const botCtrl = require('./botController');

router.route('/').get(botCtrl.getActivity);
router.route('/getDataProvider').get(botCtrl.getDataProvider);
router.route('/getDataSetName').get(botCtrl.getDataSetName);
// router.route('/addActivity').post(botCtrl.addActivity);
// router.route('/updateActivity/:activityId').put(botCtrl.updateActivity);
// router.route('/getAnswerByQuestion/:question').get(botCtrl.getAnswerByQuestion);
// router.route('/questions').get(botCtrl.getQuestionsStartingWith);

module.exports = router;
