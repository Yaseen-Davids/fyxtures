export interface Fixture {
  id: string;
  date: string;
  name: string;
  venue: string;
  type: "football" | "rugby" | "formulaone";
  tournament: string;
  left: {
    id: string;
    display: string;
    icon: string;
  };
  right: {
    id: string;
    display: string;
    icon: string;
  };
}
