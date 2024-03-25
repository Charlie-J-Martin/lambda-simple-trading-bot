export type StockData = {
  ticker: string;
  queryCount: number;
  resultsCount: number;
  adjusted: boolean;
  results: StockResult[];
  status: string;
  request_id: string;
  count: number;
};

export type StockResult = {
  v: number; // Volume
  vw: number; // Volume Weighted Average Price
  o: number; // Open Price
  c: number; // Close Price
  h: number; // High Price
  l: number; // Low Price
  t: number; // Timestamp (Unix Epoch Time)
  n: number; // Number of trades
};
