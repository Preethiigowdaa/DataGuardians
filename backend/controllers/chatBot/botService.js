'use strict';

const botDataBase = require('./botDataBase');

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

const botService = {};

botService.getActivity = async () => {
    const activityList =
        await botDataBase.getActivity();
    const _activityList = activityList.map(obj => {
        return {
            RULE_ID: obj.RULE_ID,
            MSTR_RULE_ID: obj.MSTR_RULE_ID,
            COL_ID_LST: obj.COL_ID_LST, 
            ENT_ID: obj.ENT_ID, 
            BK_COL_ID: obj.BK_COL_ID, 
            FLTR_CON: obj.FLTR_CON,
            ARG_1: obj.ARG_1,
            ARG_2: obj.ARG_2,
            ARG_3: obj.ARG_3,
            ARG_4: obj.ARG_4,
            RULE_SVRT: obj.RULE_SVRT,
            RULE_DESC: obj.RULE_DESC,
            IS_RULE_ACTV: obj.IS_RULE_ACTV,
            EFFCTV_STRT_DT: obj.EFFCTV_STRT_DT,
            EFFCTV_END_DT: obj.EFFCTV_END_DT,
            IS_ACTV: obj.IS_ACTV,
            AUDIT_BATCH_ID: obj.AUDIT_BATCH_ID,
            AUDIT_INSRT_DT: obj.AUDIT_INSRT_DT,
            AUDIT_INSRT_ID: obj.AUDIT_INSRT_ID,
            AUDIT_UPDT_DT: obj.AUDIT_UPDT_DT,
            AUDIT_UPDT_ID: obj.AUDIT_UPDT_ID
        };
    });

    return {
        isSuccess: true,
        data: _activityList
    };
};

botService.getDataProvider = async () => {
    const dataProviderList = await botDataBase.getDataProvider();
    
    const _dataProviderList = dataProviderList.map(obj => {
        return {
            ENT_ID: obj.ENT_ID,
            PAR_ENT_ID: obj.PAR_ENT_ID,
            SRC_LYR_ID: obj.SRC_LYR_ID,
            ENT_PRVDR_NM: obj.ENT_PRVDR_NM,
            ENT_SRC_NM: obj.ENT_SRC_NM,
            ENT_NM: obj.ENT_NM,
            ENT_TYP: obj.ENT_TYP,
            ENT_DESC: obj.ENT_DESC,
            ENT_DELIM: obj.ENT_DELIM,
            ENT_TQ: obj.ENT_TQ,
            ENT_EXT: obj.ENT_EXT,
            ENT_HDR: obj.ENT_HDR,
            ENT_STRT_ROW: obj.ENT_STRT_ROW,
            ENT_COMP: obj.ENT_COMP,
            ENT_ENCOD: obj.ENT_ENCOD,
            ENT_FRE: obj.ENT_FRE,
            CNTRY_CD: obj.CNTRY_CD,
            BUS_CD: obj.BUS_CD,
            LANG_CD: obj.LANG_CD,
            ENT_NM_PAT: obj.ENT_NM_PAT,
            FILE_ARVL_STRT_DY: obj.FILE_ARVL_STRT_DY,
            FILE_ARVL_END_DY: obj.FILE_ARVL_END_DY,
            FILE_ARVL_TIME: obj.FILE_ARVL_TIME,
            DATA_PERSIST: obj.DATA_PERSIST,
            EFF_SRT_DT: obj.EFF_SRT_DT,
            EFF_END_DT: obj.EFF_END_DT,
            IS_ACTV: obj.IS_ACTV,
            AUDIT_BATCH_ID: obj.AUDIT_BATCH_ID,
            AUDIT_INSRT_DT: obj.AUDIT_INSRT_DT,
            AUDIT_INSRT_ID: obj.AUDIT_INSRT_ID,
            AUDIT_UPDT_DT: obj.AUDIT_UPDT_DT,
            AUDIT_UPDT_ID: obj.AUDIT_UPDT_ID,
            TRGT_LAYER_NM: obj.TRGT_LAYER_NM,
            TRGT_TABLE_NM: obj.TRGT_TABLE_NM,
            data_provider: obj.data_provider
        };
    });

    return {
        isSuccess: true,
        data: _dataProviderList
    };
};
botService.getDataSetName = async () => {
    const dataSetList = await botDataBase.getDataSetName();
    
    const _dataSetList = dataSetList.map(obj => {
        return {
            ENT_ID: obj.ENT_ID,
            PAR_ENT_ID: obj.PAR_ENT_ID,
            SRC_LYR_ID: obj.SRC_LYR_ID,
            ENT_PRVDR_NM: obj.ENT_PRVDR_NM,
            ENT_SRC_NM: obj.ENT_SRC_NM,
            ENT_NM: obj.ENT_NM,
            ENT_TYP: obj.ENT_TYP,
            ENT_DESC: obj.ENT_DESC,
            ENT_DELIM: obj.ENT_DELIM,
            ENT_TQ: obj.ENT_TQ,
            ENT_EXT: obj.ENT_EXT,
            ENT_HDR: obj.ENT_HDR,
            ENT_STRT_ROW: obj.ENT_STRT_ROW,
            ENT_COMP: obj.ENT_COMP,
            ENT_ENCOD: obj.ENT_ENCOD,
            ENT_FRE: obj.ENT_FRE,
            CNTRY_CD: obj.CNTRY_CD,
            BUS_CD: obj.BUS_CD,
            LANG_CD: obj.LANG_CD,
            ENT_NM_PAT: obj.ENT_NM_PAT,
            FILE_ARVL_STRT_DY: obj.FILE_ARVL_STRT_DY,
            FILE_ARVL_END_DY: obj.FILE_ARVL_END_DY,
            FILE_ARVL_TIME: obj.FILE_ARVL_TIME,
            DATA_PERSIST: obj.DATA_PERSIST,
            EFF_SRT_DT: obj.EFF_SRT_DT,
            EFF_END_DT: obj.EFF_END_DT,
            IS_ACTV: obj.IS_ACTV,
            AUDIT_BATCH_ID: obj.AUDIT_BATCH_ID,
            AUDIT_INSRT_DT: obj.AUDIT_INSRT_DT,
            AUDIT_INSRT_ID: obj.AUDIT_INSRT_ID,
            AUDIT_UPDT_DT: obj.AUDIT_UPDT_DT,
            AUDIT_UPDT_ID: obj.AUDIT_UPDT_ID,
            TRGT_LAYER_NM: obj.TRGT_LAYER_NM,
            TRGT_TABLE_NM: obj.TRGT_TABLE_NM,
            data_provider: obj.data_provider
        };
    });

    return {
        isSuccess: true,
        data: _dataSetList
    };
};


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

 module.exports = botService;
