'use strict';

const botSchema = require('./botSchema');
const botService = require('./botService');
const botCtrl = {};

botCtrl.getActivity = async (req, res) => {
    try {
        const activityList = await botService.getActivity();

        return res
            .status(APP_DATA.STATUS_CODES.SUCCESS_CODE)
            .json(activityList);
    } catch (err) {
        /* eslint-disable no-console */
        console.error(err);
        return res
            .status(APP_DATA.STATUS_CODES.INTERNAL_SERVER_ERROR_CODE)
            .send(APP_DATA.APP_MESSAGES.SOMETHING_WENT_WRONG);
    }
};
botCtrl.getDataProvider = async (req, res) => {
    try {
        const dataProviderList = await botService.getDataProvider();

        return res
            .status(APP_DATA.STATUS_CODES.SUCCESS_CODE)
            .json(dataProviderList);
    } catch (err) {
        /* eslint-disable no-console */
        console.error(err);
        return res
            .status(APP_DATA.STATUS_CODES.INTERNAL_SERVER_ERROR_CODE)
            .send(APP_DATA.APP_MESSAGES.SOMETHING_WENT_WRONG);
    }
};
botCtrl.getDataSetName = async (req, res) => {
    try {
        const dataSetList = await botService.getDataSetName();

        return res
            .status(APP_DATA.STATUS_CODES.SUCCESS_CODE)
            .json(dataSetList);
    } catch (err) {
        /* eslint-disable no-console */
        console.error(err);
        return res
            .status(APP_DATA.STATUS_CODES.INTERNAL_SERVER_ERROR_CODE)
            .send(APP_DATA.APP_MESSAGES.SOMETHING_WENT_WRONG);
    }
};
// botCtrl.addActivity = async (req, res) => {
//     const dataObj = req.body;
//     try {
//         const response = await botService.addActivity(dataObj);

//         return res
//             .status(APP_DATA.STATUS_CODES.SUCCESS_CODE)
//             .json(response);
//     } catch (err) {
//         /* eslint-disable no-console */
//         console.error(err);
//         return res
//             .status(APP_DATA.STATUS_CODES.INTERNAL_SERVER_ERROR_CODE)
//             .send(APP_DATA.APP_MESSAGES.SOMETHING_WENT_WRONG);
//     }
// };
// botCtrl.updateActivity = async (req, res) => {
//     const { activityId } = req.params;
//     const updatedData = req.body;

//     try {
//         const response = await botService.updateActivity(activityId, updatedData);
//         return res.status(APP_DATA.STATUS_CODES.SUCCESS_CODE).json(response);
//     } catch (err) {
//         console.error(err);
//         return res.status(APP_DATA.STATUS_CODES.INTERNAL_SERVER_ERROR_CODE)
//             .send(APP_DATA.APP_MESSAGES.SOMETHING_WENT_WRONG);
//     }
// };
// botCtrl.getAnswerByQuestion = async (req, res) => {
//     const { question } = req.params;
//     //console.log(req.params.question);

//     try {
//         const answer = await botService.getAnswerByQuestion(question);
//         if (answer) {
//             return res.status(200).json({ success: true, answer });
//         } else {
//             return res.status(404).json({ success: false, message: 'Question not found' });
//         }
//     } catch (err) {
//         console.error(err);
//         return res.status(500).json({ success: false, message: 'Internal server error' });
//     }
// };

// botCtrl.getQuestionsStartingWith = async (req, res) => {
//     const { prefix } = req.query;
//     try {
//         const questions = await botService.getQuestionsStartingWith(prefix);
//         return res.status(APP_DATA.STATUS_CODES.SUCCESS_CODE).json(questions);
//     } catch (err) {
//         console.error(err);
//         return res.status(APP_DATA.STATUS_CODES.INTERNAL_SERVER_ERROR_CODE).send(APP_DATA.APP_MESSAGES.SOMETHING_WENT_WRONG);
//     }
// };

 module.exports = botCtrl;
