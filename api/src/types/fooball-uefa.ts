export interface FootballUefaType {
  awayTeam: AwayTeam;
  behindClosedDoors: boolean;
  competition: Competition;
  condition: Condition;
  group: Group;
  homeTeam: AwayTeam;
  id: string;
  kickOffTime: KickOffTime;
  lineupStatus: string;
  matchNumber: number;
  matchday: Matchday;
  phase: string;
  playerEvents: PlayerEvents;
  referees: Referee[];
  round: Round;
  score: Score;
  seasonYear: string;
  sessionNumber: number;
  stadium: Stadium;
  status: string;
  translations: Translations12;
  type: string;
  minute: {
    normal: number;
  };
  fullTimeAt: string;
}

interface Translations12 {
  phaseName: CountryName;
}

interface Stadium {
  address: string;
  capacity: number;
  city: City;
  countryCode: string;
  geolocation: Geolocation;
  id: string;
  images: Images4;
  openingDate: string;
  pitch: Pitch;
  translations: Translations11;
}

interface Translations11 {
  mediaName: CountryName;
  name: CountryName;
  officialName: CountryName;
  specialEventsName: CountryName;
  sponsorName: CountryName;
}

interface Pitch {
  length: number;
  width: number;
}

interface Images4 {
  MEDIUM_WIDE: string;
  LARGE_ULTRA_WIDE: string;
}

interface Geolocation {
  latitude: number;
  longitude: number;
}

interface City {
  countryCode: string;
  id: string;
  translations: Translations10;
}

interface Translations10 {
  name: CountryName;
}

interface Score {
  regular: Regular;
  total: Regular;
}

interface Regular {
  away: number;
  home: number;
}

interface Round {
  active: boolean;
  benchGKCount: number;
  benchPlayersCount: number;
  benchStaffCount: number;
  coefficientWinnerBonus: number;
  competitionId: string;
  dateFrom: string;
  dateTo: string;
  fieldPlayersCount: number;
  groupCount: number;
  id: string;
  metaData: MetaData3;
  mode: string;
  modeDetail: string;
  orderInCompetition: number;
  phase: string;
  seasonYear: string;
  secondaryType: string;
  stadiumNameType: string;
  status: string;
  substitutionCount: number;
  teamCount: number;
  teams: string[];
  translations: Translations9;
}

interface Translations9 {
  abbreviation: CountryName;
  name: CountryName;
  shortName: CountryName;
}

interface MetaData3 {
  name: string;
  type: string;
}

interface Referee {
  images: Images3;
  person: Person;
  role: string;
  translations: Translations8;
}

interface Translations8 {
  roleName: CountryName;
}

interface Person {
  countryCode: string;
  gender: string;
  id: string;
  translations: Translations7;
}

interface Translations7 {
  countryName: CountryName;
  firstName: CountryName;
  lastName: CountryName;
  name: CountryName;
  shortName: CountryName;
}

interface Images3 {
  SMALL_SQUARE: string;
}

interface PlayerEvents {
  scorers: Scorer[];
}

interface Scorer {
  goalType: string;
  id: string;
  images: Images2;
  phase: string;
  player: Player;
  teamId: string;
  teamIdProvider: string;
  time: Time;
}

interface Time {
  minute: number;
  second: number;
}

interface Player {
  age: string;
  birthDate: string;
  clubId: string;
  clubJerseyNumber: string;
  clubShirtName: string;
  countryCode: string;
  countryOfBirthCode: string;
  detailedFieldPosition?: string;
  fieldPosition: string;
  gender: string;
  id: string;
  imageUrl: string;
  internationalName: string;
  nationalFieldPosition: string;
  nationalJerseyNumber: string;
  nationalShirtName: string;
  nationalTeamId: string;
  translations: Translations6;
}

interface Translations6 {
  countryName: CountryName;
  countryOfBirthName: CountryName;
  fieldPosition: CountryName;
  firstName: CountryName;
  lastName: CountryName;
  name: CountryName;
  nationalFieldPosition: CountryName;
  shortName: CountryName;
}

interface Images2 {
  PLAYER_CELEBRATING: string;
}

interface Matchday {
  competitionId: string;
  dateFrom: string;
  dateTo: string;
  format: string;
  id: string;
  longName: string;
  name: string;
  roundId: string;
  seasonYear: string;
  sequenceNumber: string;
  translations: Translations5;
  type: string;
}

interface Translations5 {
  longName: CountryName;
  name: CountryName;
}

interface KickOffTime {
  date: string;
  dateTime: string;
  utcOffsetInHours: number;
}

interface Group {
  competitionId: string;
  id: string;
  metaData: MetaData2;
  order: number;
  phase: string;
  roundId: string;
  seasonYear: string;
  teams: string[];
  teamsQualifiedNumber: number;
  translations: Translations4;
  type: string;
}

interface Translations4 {
  name: CountryName;
  shortName: CountryName;
}

interface MetaData2 {
  groupName: string;
  groupShortName: string;
}

interface Condition {
  humidity: number;
  pitchCondition: string;
  temperature: number;
  translations: Translations3;
  weatherCondition: string;
  windSpeed: number;
}

interface Translations3 {
  pitchConditionName: CountryName;
  weatherConditionName: CountryName;
}

interface Competition {
  age: string;
  code: string;
  id: string;
  images: Images;
  metaData: MetaData;
  region: string;
  sex: string;
  sportsType: string;
  teamCategory: string;
  translations: Translations2;
  type: string;
}

interface Translations2 {
  name: CountryName;
  prequalifyingName: CountryName;
  qualifyingName: CountryName;
  tournamentName: CountryName;
}

interface MetaData {
  name: string;
}

interface Images {
  FULL_LOGO: string;
}

interface AwayTeam {
  associationId: string;
  associationLogoUrl: string;
  bigLogoUrl: string;
  confederationType: string;
  countryCode: string;
  id: string;
  idProvider: string;
  internationalName: string;
  isPlaceHolder: boolean;
  logoUrl: string;
  mediumLogoUrl: string;
  organizationId: string;
  teamCode: string;
  teamTypeDetail: string;
  translations: Translations;
  typeIsNational: boolean;
  typeTeam: string;
}

interface Translations {
  countryName: CountryName;
  displayName: CountryName;
  displayOfficialName: CountryName;
  displayTeamCode: CountryName;
}

interface CountryName {
  EN: string;
  FR: string;
  DE: string;
  ES: string;
  PT: string;
  IT: string;
  RU: string;
  ZH: string;
  TR: string;
  HU: string;
  CS: string;
  NL: string;
}
