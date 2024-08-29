// 'use strict';

// /* Importing modules */
// const botDataBase = require('./botDataBase');

// const constructTree = dataObj => {
//     const map = {};
//     const res = [];
//     let i, node;

//     for (i = 0; i < dataObj.length; i += 1) {
//         map[dataObj[i].data.id] = i;
//     }

//     for (i = 0; i < dataObj.length; i += 1) {
//         node = dataObj[i];
//         const key = node.data.product_key;
//         if (key !== null) {
//             if (!dataObj[map[key]]) {
//                 dataObj[map[key]] = {};
//             }
//             if (!dataObj[map[key]].children) {
//                 dataObj[map[key]].children = [];
//             }

//             dataObj[map[key]].children.push(node);
//         } else {
//             res.push(node);
//         }
//     }

//     return res;
// };

// const botService = {};

// botService.getActivity = async () => {
//     const activityList =
//         await botDataBase.getActivity();
//     const _activityList = activityList.map(obj => {
//         return {
//             activity_id: obj.activity_id,
//             question: obj.question,
//             answer: obj.answer, 
//             user_id: obj.user_id, 
//             datetime: obj.datetime, 
//             isliked: obj.isliked
//         };
//     });

//     return {
//         isSuccess: true,
//         data: _activityList
//     };
// };

// botService.addActivity = async dataObj => {
//     await botDataBase.addActivity(dataObj);
//     return {
//         isSuccess: true,
//         data: {
//             message: APP_DATA.APP_MESSAGES.SUCCESSFULLY_UPDATED,
//         },
//     };
// };
// botService.updateActivity = async (activityId, updatedData) => {
//     await botDataBase.updateActivity(activityId, updatedData);
//     return {
//         isSuccess: true,
//         data: {
//             message: 'Data updated successfully'
//         }
//     };
// };

// botService.getQuestionsStartingWith = async (prefix) => {
//     const questions = await botDataBase.getQuestionsStartingWith(prefix);
//     return {
//         isSuccess: true,
//         data: questions
//     };
// };

// botService.getAnswerByQuestion = async (question) => {
//     try {
//         const answer = await botDataBase.getAnswerByQuestion(question);
//         if (answer) {
//             return {
//                 isSuccess: true,
//                 data: {
//                     answer
//                 }
//             };
//         } else {
//             return {
//                 isSuccess: false,
//                 data: {
//                     message: 'Question not found'
//                 }
//             };
//         }
//     } catch (err) {
//         console.error(err);
//         throw err;
//     }
// };

// module.exports = botService;
