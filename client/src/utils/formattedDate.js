const formattedDate = date => {
  const format = n => (n < 10 ? `0${n}` : `${n}`);
  return `${date.getFullYear()}-${format(date.getMonth() + 1)}-${format(date.getDate())}`;
};

export default formattedDate;
