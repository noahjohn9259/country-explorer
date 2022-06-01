type Currency = {
  name: string;
  symbol: string;
};

export type Country = {
  name: {
    common: string;
  };
  flags: {
    png: string;
    svg: string;
  };
  population: number;
  tld: string[];
  currencies?: Record<string, Currency>;
  region: string;
  subregion: string;
  languages: Record<string, string>;
  capital?: string[];
  borders?: string[];
};

export type Theme = "light" | "dark";
