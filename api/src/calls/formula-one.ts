import axios from "axios";
import { FormulaOneEvent, FormulaOneSession } from "../types/formulaone";

interface FormulaOneRacesProps {
  startDate: string; // yyyymmdd
}

export const getFormulaOneFixtures = async ({
  startDate,
}: FormulaOneRacesProps): Promise<FormulaOneSession[]> => {
  const season = 2025;
  const baseUrl = process.env.FORMULA_ONE_URL;

  if (!baseUrl) {
    throw new Error("FORMULA_ONE_URL is not defined");
  }

  const url = `${baseUrl}?season=${season}`;

  const { data }: { data: { meetings: FormulaOneEvent[] } } = await axios.get(
    url,
    {
      headers: {
        apikey: process.env.FORMULA_ONE_API_KEY || "",
        locale: "en",
      },
    }
  );

  return data.meetings.reduce((acc: FormulaOneSession[], meeting) => {
    if (meeting.meetingStartDate >= startDate) {
      const sessions = meeting.meetingSessions.map((s) => ({
        ...s,
        id: meeting.meetingKey,
        name: meeting.meetingOfficialName,
        date: meeting.meetingStartDate,
        venue: meeting.meetingCountryName,
        flag: meeting.countryFlag,
        track: meeting.meetingLocation,
      }));
      acc.push(...sessions);
    }
    return acc;
  }, []);
};
