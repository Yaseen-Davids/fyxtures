export interface FootballEvent {
  gameweek: Gameweek;
  kickoff: Kickoff;
  provisionalKickoff: Kickoff;
  teams: Teams[];
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
  matchOfficials: MatchOfficial[];
  halfTimeScore: HalfTimeScore;
  teamLists: TeamList[];
  events: Event[];
  penaltyShootouts: any[];
  behindClosedDoors: boolean;
  id: number;
  altIds: AltIds;
}

export interface Event {
  clock: Clock;
  phase: string;
  type: string;
  time: Time;
  score: HalfTimeScore;
  id?: number;
  personId?: number;
  teamId?: number;
  description?: string;
  assistId?: number;
}

export interface Time {
  millis: number;
  label: string;
  gmtOffset: number;
}

export interface TeamList {
  teamId: number;
  lineup: Lineup[];
  substitutes: Substitute[];
  formation: Formation;
}

export interface Formation {
  label: string;
  players: number[][];
}

export interface Substitute {
  matchPosition: string;
  matchShirtNumber: number;
  captain: boolean;
  playerId: number;
  info: Info;
  nationalTeam: NationalTeam2;
  birth: Birth3;
  age: string;
  name: Name2;
  id: number;
  altIds: AltIds;
}

export interface Birth3 {
  date: Date;
  country: NationalTeam2;
  place?: string;
}

export interface NationalTeam2 {
  isoCode: string;
  country: string;
  demonym: string;
}

export interface Lineup {
  matchPosition: string;
  matchShirtNumber: number;
  captain: boolean;
  playerId: number;
  info: Info;
  nationalTeam: NationalTeam;
  birth: Birth2;
  age: string;
  name: Name2;
  id: number;
  altIds: AltIds;
}

export interface Name2 {
  display: string;
  first: string;
  last: string;
  middle?: string;
}

export interface Birth2 {
  date: Date;
  country: NationalTeam;
  place?: string;
}

export interface Date {
  millis: number;
  label: string;
}

export interface NationalTeam {
  isoCode: string;
  country: string;
  demonym?: string;
}

export interface Info {
  position: string;
  shirtNum: number;
  positionInfo: string;
  loan?: boolean;
}

export interface HalfTimeScore {
  homeScore: number;
  awayScore: number;
}

export interface MatchOfficial {
  matchOfficialId: number;
  role?: string;
  birth: Birth;
  name: Name;
  id: number;
}

export interface Name {
  display: string;
  first: string;
  last: string;
}

export interface Birth {}

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

export interface Teams {
  team: Team;
  score: number;
}

export interface Team {
  name: string;
  club: Club;
  teamType: string;
  shortName: string;
  id: number;
  altIds: AltIds;
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
  competitionPhase: CompetitionPhase;
}

export interface CompetitionPhase {
  id: number;
  type: string;
  gameweekRange: number[];
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
  altIds: AltIds;
}

export interface AltIds {
  opta: string;
}
