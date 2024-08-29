export const dateFormatter = (date: string | Date) => {
  return new Date(date).toLocaleDateString("pt-BR", {
    month: "short",
    year: "2-digit",
  });
};
