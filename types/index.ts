/* Navigation link  */
export interface NavLink {
  label: string;
  href: string;
}

/* Key metric */
export interface Stat {
  value: string;
  label: string;
}

/* Card data */
export interface OverviewCard { 
  id: number;
  pills: string[];
  title: string;
  description: string;
  image: string;
}

/* bento grid */
export interface BentoFeature {
  id: string;
  title: string;
  description: string;
  stats: string[];
}

/* Rank tier progression data. */
export interface RankTier {
  id: number;
  name: string;
  description: string;
}

/* Single log entry for the terminal feed. */
export interface LogEntry {
  id: string;
  action: string;
  address: string;
  amount: string;
  time: string;
  status: "success" | "pending";
}

export interface OrderBookItem {
  width: number;
  price: string;
  side: 'buy' | 'sell';
}

export interface MarketTickerData {
  pair: string;
  change: string;
  isPositive: boolean;
  isSignal?: boolean;
}
