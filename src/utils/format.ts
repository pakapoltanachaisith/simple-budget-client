import dayjs from "dayjs";

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
  }).format(amount / 100);
};

export const formatDate = (date: string) => {
  return dayjs(date).format("DD MMM YY");
};
