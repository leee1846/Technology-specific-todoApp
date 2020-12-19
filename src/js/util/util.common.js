//날짜 선택 구성
const newDate = new Date();
const thisYear = newDate.getFullYear();
const thisMonth = newDate.getMonth() + 1;
const thisDate = newDate.getDate();

export { thisYear, thisMonth, thisDate };
