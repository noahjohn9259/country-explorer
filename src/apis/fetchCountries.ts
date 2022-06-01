export const fetchCountriesByCodes = async (codes: string[]) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${codes.join(",")}`
  );
  return res.json();
};

export default async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  return res.json();
};
