export interface Football {
  gameweek:           Gameweek;
  kickoff:            Kickoff;
  provisionalKickoff: Kickoff;
  teams:              TeamElement[];
  replay:             boolean;
  ground:             Ground;
  neutralGround:      boolean;
  status:             string;
  phase:              string;
  fixtureType:        string;
  extraTime:          boolean;
  shootout:           boolean;
  goals:              any[];
  penaltyShootouts:   any[];
  behindClosedDoors:  boolean;
  id:                 number;
}

export interface Gameweek {
  id:               number;
  compSeason:       CompSeason;
  gameweek:         number;
  competitionPhase: CompetitionPhase;
}

export interface CompSeason {
  label:       string;
  competition: Competition;
  id:          number;
}

export interface Competition {
  abbreviation: string;
  description:  string;
  level:        string;
  source:       string;
  id:           number;
}

export interface CompetitionPhase {
  id:            number;
  type:          string;
  gameweekRange: number[];
}

export interface Ground {
  name:   string;
  city:   string;
  source: string;
  id:     number;
}

export interface Kickoff {
  completeness: number;
  millis:       number;
  label:        string;
  gmtOffset:    number;
}

export interface TeamElement {
  team: TeamTeam;
}

export interface TeamTeam {
  name:      string;
  club:      Club;
  teamType:  string;
  shortName: string;
  id:        number;
  score:     number;
}

export interface Club {
  name:       string;
  shortName?: string;
  abbr:       string;
  id:         number;
}