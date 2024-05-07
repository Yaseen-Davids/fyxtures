export interface HeadToHeadReponse {
  stats: Stats;
  headToHeads: HeadToHead[];
  fixtures: Fixtures;
}

export interface Fixtures {
  [teamId: string]: Fixture[];
}

export interface Fixture {
  gameweek: Gameweek2;
  kickoff: Kickoff;
  provisionalKickoff: Kickoff;
  teams: Team4[];
  replay: boolean;
  ground: Ground;
  neutralGround: boolean;
  status: string;
  phase: string;
  outcome: string;
  attendance: number;
  clock: Clock;
  fixtureType: string;
  extraTime: boolean;
  shootout: boolean;
  goals: Goals2[];
  penaltyShootouts: any[];
  behindClosedDoors: boolean;
  id: number;
}

export interface _12 {
  gameweek: Gameweek2;
  kickoff: Kickoff2;
  provisionalKickoff: Kickoff2;
  teams: Team4[];
  replay: boolean;
  ground: Ground;
  neutralGround: boolean;
  status: string;
  phase: string;
  outcome: string;
  attendance?: number;
  clock?: Clock;
  fixtureType: string;
  extraTime: boolean;
  shootout: boolean;
  goals: (Goal | Goals2)[];
  penaltyShootouts: PenaltyShootout[];
  behindClosedDoors: boolean;
  id: number;
  aetWinnerId?: number;
}

export interface PenaltyShootout {
  teamId: number;
  score: number;
  penalties: Goal[];
}

export interface Goals2 {
  personId: number;
  clock: Clock;
  phase: string;
  type: string;
  description: string;
  assistId?: number;
}

export interface Goal {
  personId: number;
  clock: Clock;
  phase: string;
  type: string;
  description: string;
}

export interface Team4 {
  team: Team3;
  score: number;
}

export interface Team3 {
  name: string;
  club: Club2;
  teamType: string;
  shortName: string;
  id: number;
}

export interface Club2 {
  name: string;
  abbr: string;
  id: number;
  shortName?: string;
}

export interface Kickoff2 {
  completeness: number;
  millis: number;
  label: string;
  gmtOffset?: number;
}

export interface Gameweek2 {
  id: number;
  compSeason: CompSeason;
  gameweek: number;
  competitionPhase: CompetitionPhase;
}

export interface CompetitionPhase {
  id: number;
  type: string;
  gameweekRange: number[];
}

export interface HeadToHead {
  gameweek: Gameweek;
  kickoff: Kickoff;
  provisionalKickoff: Kickoff;
  teams: Team2[];
  replay: boolean;
  ground: Ground;
  neutralGround: boolean;
  status: string;
  phase: string;
  outcome: string;
  attendance: number;
  clock: Clock;
  fixtureType: string;
  extraTime: boolean;
  shootout: boolean;
  aetWinnerId: number;
  behindClosedDoors: boolean;
  id: number;
}

export interface Clock {
  secs: number;
  label: string;
}

export interface Ground {
  name: string;
  city: string;
  source: string;
  id: number;
}

export interface Team2 {
  team: Team;
  score: number;
}

export interface Team {
  name: string;
  club: Club;
  teamType: string;
  shortName: string;
  id: number;
}

export interface Club {
  name: string;
  shortName: string;
  abbr: string;
  id: number;
}

export interface Kickoff {
  completeness: number;
  millis: number;
  label: string;
  gmtOffset: number;
}

export interface Gameweek {
  id: number;
  compSeason: CompSeason;
  gameweek: number;
}

export interface CompSeason {
  label: string;
  competition: Competition;
  id: number;
}

export interface Competition {
  abbreviation: string;
  description: string;
  level: string;
  source: string;
  id: number;
}

export interface Stats {
  [index: string]: Stat[];
}

export interface Stat {
  name: string;
  value: number;
  description: string;
  additionalInfo: AdditionalInfo;
}

export interface AdditionalInfo {}
