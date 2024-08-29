// 'use strict';

// /* Importing modules */
// const { runQuery, toNumber, escapeString } = require('../../services/helpers');

// const botDataBase = {};

// botDataBase.getActivity = async () => {
//     const query = `
//     SELECT *
//     FROM chat_activity order by activity_id desc ;
//     `;
//     return await runQuery(query);
// };

// botDataBase.getQuestionsStartingWith = async (prefix) => {
//     const query = `
//         SELECT distinct (question)
//         FROM chat_activity
//         WHERE question LIKE '${prefix}%';
//     `;
//     return await runQuery(query);
// };

// botDataBase.addActivity = async dataObj => {
//     const {
//         question,
//         answer,
//         user_id,
//         datetime,
//         isliked
//     } = dataObj;
//     const isLikedValue = isliked !== undefined ? isliked : false;
//     const newActivityquery = `
//         INSERT INTO public.chat_activity
//         (question, answer, user_id, datetime, isliked)
//         VALUES
//         (${escapeString(question)},
//         ${escapeString(answer)},
//         ${escapeString(user_id)},
//         NOW(),
//         ${isLikedValue});
//     `;

//     await runQuery(newActivityquery);

//     return { success: true, message: 'Data added successfully' };
// };
// botDataBase.updateActivity = async (activityId, updatedData) => {
//     const {
//         question,
//         answer,
//         user_id,
//         datetime,
//         isliked
//     } = updatedData;

//     const updateActivityQuery = `
//     UPDATE public.chat_activity
//     SET
//         datetime = ${datetime ? escapeString(datetime) : 'NOW()'}, 
//         isliked = ${isliked}
//     WHERE activity_id = ${activityId};
//     `;

//     await runQuery(updateActivityQuery);

//     return { success: true, message: 'Data updated successfully' };
// };

// botDataBase.getAnswerByQuestion = async (question) => {
//     const query = `
//         SELECT answer, activity_id
//         FROM chat_activity
//         WHERE question = '${question}';
//     `;
//     try {
//         const result = await runQuery(query);
//         if (result && result[0]) {
//             return { activity_id: result[0].activity_id,
//                 answer: result[0].answer};
//         } else {
//             return null; // Return null if no answer found
//         }
//     } catch (err) {
//         console.error(err);
//         throw err;
//     }
// };


// module.exports = botDataBase;