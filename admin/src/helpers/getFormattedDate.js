const getFormattedDate = dateString => {
  let date = new Date(dateString);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  month = (month < 10 ? "0" : "") + month;
  day = (day < 10 ? "0" : "") + day;

  let str =
    day + "." + month + "." + date.getFullYear() + " " + hours + ":" + minutes;

  return str;
};

export default getFormattedDate;
