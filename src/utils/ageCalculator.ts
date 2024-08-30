export function calcAge(birthDate: Date): number {
  const currentDate = new Date();
  const birth = new Date(birthDate);

  let age = currentDate.getFullYear() - birth.getFullYear();
  const month = currentDate.getMonth() - birth.getMonth();

  if (month < 0 || (month === 0 && currentDate.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}
