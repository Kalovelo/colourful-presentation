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
