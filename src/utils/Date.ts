export const formatDate = (date: string) => {
  const parsedDate = new Date(date);
  let formattedDate =
    parsedDate.getDate() +
    "/" +
    (parsedDate.getMonth() + 1) +
    "/" +
    parsedDate.getFullYear();
  return formattedDate;
};

export const formatDateWithHour = (date: string) => {
  const parsedDate = new Date(date);
  let formattedDate =
    parsedDate.getDate() +
    "/" +
    (parsedDate.getMonth() + 1) +
    "/" +
    parsedDate.getFullYear() +
    ", " +
    _24HourFormat(parsedDate);
  return formattedDate;
};

const _24HourFormat = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const hourText = hours > 9 ? hours : `0${hours}`;
  const minuteText = minutes > 9 ? hours : `0${minutes}`;
  return `${hourText}:${minuteText}`;
};
