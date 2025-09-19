export interface Fixture {
  id: string;
  date: string;
  name: string;
  venue: string;
  type: "football" | "rugby" | "formulaone";
  tournament: string;
  left: {
    display: string;
    icon: string;
  };
  right: {
    display: string;
    icon: string;
  };
}
