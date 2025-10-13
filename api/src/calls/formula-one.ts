import axios from "axios";
import { FormulaOneEvent, FormulaOneSession } from "../types/formulaone";
import { parseISO, formatISO, getYear } from "date-fns";

interface FormulaOneRacesProps {
  startDate: string; // yyyymmdd
}

export const getFormulaOneFixtures = async ({
  startDate,
}: FormulaOneRacesProps): Promise<FormulaOneSession[]> => {
  const season = getYear(new Date());
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
    const selectedDate = new Date(startDate);
    selectedDate.setHours(0, 0, 0, 0);

    const sessions = meeting.meetingSessions
      .filter((s) => new Date(s.startTime) >= selectedDate)
      .map((s) => {
        const start = parseISO(`${s.startTime}${s.gmtOffset}`);
        const end = parseISO(`${s.endTime}${s.gmtOffset}`);
        return {
          ...s,
          id: meeting.meetingKey,
          name: meeting.meetingOfficialName,
          date: meeting.meetingStartDate,
          venue: meeting.meetingCountryName,
          flag: meeting.countryFlag,
          track: meeting.meetingLocation,
          startTime: formatISO(start),
          endTime: formatISO(end),
        };
      });
    acc.push(...sessions);
    return acc;
  }, []);
};
