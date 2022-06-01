export default async (name: string) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${name.replaceAll(
      "_",
      " "
    )}?fullText=true`
  );
  return res.json();
};
