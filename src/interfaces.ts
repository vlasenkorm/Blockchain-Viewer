export interface  Group {
  name: string;
  indexes: number[];
  '0': string
}

export interface Index {
  id: number
  name : string;
  ethPriceInWei: number;
  usdPriceInCents: number;
  usdCapitalization: number;
  percentageChange: number;
}
