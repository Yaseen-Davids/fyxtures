export interface FormulaOneResponse {
  MRData: MRData;
}

export interface MRData {
  xmlns:     string;
  series:    string;
  url:       string;
  limit:     string;
  offset:    string;
  total:     string;
  RaceTable: RaceTable;
}

export interface RaceTable {
  season: string;
  Races:  FormulaOneRace[];
}

export interface FormulaOneRace {
  season:         string;
  round:          string;
  url:            string;
  raceName:       string;
  Circuit:        Circuit;
  date:           string;
  time:           string;
  FirstPractice:  Time;
  SecondPractice: Time;
  ThirdPractice:  Time;
  Qualifying:     Time;
  Sprint:     Time;
}

export interface Circuit {
  circuitId:   string;
  url:         string;
  circuitName: string;
  Location:    Location;
}

export interface Location {
  lat:      string;
  long:     string;
  locality: string;
  country:  string;
}

export interface Time {
  date: string;
  time: string;
}