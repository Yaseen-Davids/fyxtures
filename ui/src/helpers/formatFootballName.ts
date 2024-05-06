export const formatFootballName = (name: string): string => {
  // how can we do this better?
  const abbr: any = {
    "Manchester United": "Man Utd",
  };
  return abbr[name] ? abbr[name] : name;
};
