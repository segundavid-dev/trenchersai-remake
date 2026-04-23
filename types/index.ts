/** Navigation link used in Navbar and footer. */
export interface NavLink {
  label: string;
  href: string;
}

/** Key metric displayed in the hero stats strip. */
export interface Stat {
  value: string;
  label: string;
}

/** Card data used in the Overview scrolling stack. */
export interface OverviewCard {
  id: number;
  pills: string[];
  title: string;
  description: string;
  image: string;
}
