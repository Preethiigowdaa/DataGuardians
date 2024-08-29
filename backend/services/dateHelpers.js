'use strict';

exports.getCurrentTimeinTimeStamp = () => {
    return new Date().getTime();
};

exports.convertDateToTimeStamp = date => {
    return new Date(date).getTime();
};

exports.isCurrentTimeGreaterThanTimeStamp = timeStamp => {
    return this.getCurrentTimeinTimeStamp() > timeStamp;
};

exports.addMilliSecondstoCurrentTimeStamp = (ms = 0) => {
    return this.getCurrentTimeinTimeStamp() + ms;
};

exports.addSecondstoCurrentTimeStamp = (s = 0) => {
    const ms = s * 1000;
    return this.getCurrentTimeinTimeStamp() + ms;
};
