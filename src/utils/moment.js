const moment = require("moment");

exports.format = (value, format, isToDate = false) => {
  if(isToDate) {
    return moment(value, format).toDate().toISOString()
  } else {
    return moment(value).format(format)
  }
};
