import { formatInTimeZone } from "date-fns-tz";

const dateFormat = (date) => {
  return formatInTimeZone(date, "Asia/Jakarta", "dd MMM yyyy");
};

export default dateFormat;
