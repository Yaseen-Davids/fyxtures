export interface FormulaOneEvent {
  meetingOfficialName: string; // "FORMULA 1 LOUIS VUITTON AUSTRALIAN GRAND PRIX 2025";
  meetingStartDate: string; // "2025-03-14";
  meetingEndDate: string; // "2025-03-16";
  meetingLocation: string; // "Melbourne";
  meetingKey: string; // "1254";
  meetingCountryName: string; // "Australia";
  meetingIsoCountryName: string; // "Australia";
  meetingCountryCode: string; // "AUS";
  countryKey: string; // "5";
  url: string; // "/en/racing/2025/australia";
  countryFlag: string; // "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/australia-flag.png";
  meetingSessions: FormulaOneMeeting[];
}

export interface FormulaOneMeeting {
  session: string; // "p1";
  shortName: string; // "FP1";
  description: string; // "Practice 1";
  startTime: string; // "2025-03-14T12:30:00";
  endTime: string; // "2025-03-14T13:30:00";
  gmtOffset: string; // "+11:00";
  state: string; // "completed";
  sessionType: string; // "Practice";
  sessionNumber: 1;
}

export interface FormulaOneSession extends FormulaOneMeeting {
  id: string;
  name: string;
  date: string;
  venue: string;
  flag: string;
  track: string;
}
