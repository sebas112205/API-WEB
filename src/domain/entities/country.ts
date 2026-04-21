export interface Country {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: Record<string, { official: string; common: string }>;
  };
  currencies: Record<string, { name: string; symbol: string }>;
  latlng: [number, number];
  capital: string[];
}
