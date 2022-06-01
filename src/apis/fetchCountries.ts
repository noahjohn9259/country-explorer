export const fetchCountriesByCodes = async (codes: string[]) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${codes.join(",")}`
  );
  return res.json();
};

export default async (regionName: string) => {
  let endpointToUse = "https://restcountries.com/v3.1/all";
  if (regionName && regionName !== "all")
    endpointToUse = `https://restcountries.com/v3.1/region/${regionName}`;
  const res = await fetch(endpointToUse);
  return res.json();
};
