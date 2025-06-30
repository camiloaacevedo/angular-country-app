export interface RESTCountry {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cioc?: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: { [key: string]: Currency };
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms: Demonyms;
  cca3: string;
  translations: { [key: string]: Translation }; // Record<string, {}>
  flag: string;
  maps: Maps;
  population: number;
  gini?: { [key: string]: number };
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side: string;
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface Currency {
  symbol: string;
  name: string;
}

export interface Demonyms {
  eng: Eng;
  fra: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Languages {
  fin?: string;
  swe?: string;
  srp?: string;
  eng?: string;
  hin?: string;
  tam?: string;
  cat?: string;
  bjz?: string;
  spa?: string;
  fra?: string;
  nrf?: string;
  ber?: string;
  mey?: string;
  deu?: string;
  nld?: string;
  mri?: string;
  nzs?: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: null | string;
  regex: null | string;
}
