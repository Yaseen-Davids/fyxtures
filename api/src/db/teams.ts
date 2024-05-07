// TODO: add to database

export type FootballTeam = {
  id: number;
  name: string;
  image: {
    id: number;
    url: string | null;
  };
};

export const footballTeamsDataSet: FootballTeam[] = [
  {
    id: 1,
    name: "Arsenal",
    image: {
      id: 57,
      url: "https://crests.football-data.org/57.png",
    },
  },
  {
    id: 1,
    name: "Arsenal de Sarandí",
    image: {
      id: 6804,
      url: "https://crests.football-data.org/6804.png",
    },
  },
  {
    id: 2,
    name: "Aston Villa",
    image: {
      id: 58,
      url: "https://crests.football-data.org/58.png",
    },
  },
  {
    id: 4,
    name: "Chelsea",
    image: {
      id: 61,
      url: "https://crests.football-data.org/61.png",
    },
  },
  {
    id: 5,
    name: "Coventry City",
    image: {
      id: 1076,
      url: "https://crests.football-data.org/1076.png",
    },
  },
  {
    id: 6,
    name: "Crystal Palace",
    image: {
      id: 354,
      url: "https://crests.football-data.org/354.png",
    },
  },
  {
    id: 7,
    name: "Everton",
    image: {
      id: 62,
      url: "https://crests.football-data.org/62.png",
    },
  },
  {
    id: 7,
    name: "Everton de Vina del Mar Escudo",
    image: {
      id: 4456,
      url: "https://crests.football-data.org/4456.png",
    },
  },
  {
    id: 8,
    name: "Ipswich Town",
    image: {
      id: 349,
      url: "https://crests.football-data.org/349.png",
    },
  },
  {
    id: 9,
    name: "Leeds United",
    image: {
      id: 341,
      url: "https://crests.football-data.org/341.png",
    },
  },
  {
    id: 10,
    name: "Liverpool",
    image: {
      id: 64,
      url: "https://crests.football-data.org/64.png",
    },
  },
  {
    id: 10,
    name: "Liverpool - Uruguay",
    image: {
      id: 7118,
      url: "https://crests.football-data.org/7118.png",
    },
  },
  {
    id: 13,
    name: "Middlesbrough",
    image: {
      id: 343,
      url: "https://crests.football-data.org/343.png",
    },
  },
  {
    id: 20,
    name: "Southampton",
    image: {
      id: 340,
      url: "https://crests.football-data.org/340.png",
    },
  },
  {
    id: 24,
    name: "Swindon Town",
    image: {
      id: 1079,
      url: "https://crests.football-data.org/1079.png",
    },
  },
  {
    id: 26,
    name: "Leicester City",
    image: {
      id: 338,
      url: "https://crests.football-data.org/338.png",
    },
  },
  {
    id: 28,
    name: "Derby County",
    image: {
      id: 342,
      url: "https://crests.football-data.org/342.png",
    },
  },
  {
    id: 29,
    name: "Sunderland",
    image: {
      id: 71,
      url: "https://crests.football-data.org/71.png",
    },
  },
  {
    id: 30,
    name: "Barnsley",
    image: {
      id: 357,
      url: "https://crests.football-data.org/357.png",
    },
  },
  {
    id: 32,
    name: "Bradford City",
    image: {
      id: 1067,
      url: "https://crests.football-data.org/1067.png",
    },
  },
  {
    id: 33,
    name: "Watford",
    image: {
      id: 346,
      url: "https://crests.football-data.org/346.png",
    },
  },
  {
    id: 34,
    name: "Fulham",
    image: {
      id: 63,
      url: "https://crests.football-data.org/63.svg",
    },
  },
  {
    id: 37,
    name: "Portsmouth",
    image: {
      id: 325,
      url: "https://crests.football-data.org/325.png",
    },
  },
  {
    id: 39,
    name: "Wigan Athletic",
    image: {
      id: 75,
      url: "https://crests.football-data.org/75.png",
    },
  },
  {
    id: 40,
    name: "Reading",
    image: {
      id: 355,
      url: "https://crests.football-data.org/355.png",
    },
  },
  {
    id: 41,
    name: "Hull City",
    image: {
      id: 322,
      url: "https://crests.football-data.org/322.png",
    },
  },
  {
    id: 43,
    name: "Burnley",
    image: {
      id: 328,
      url: "https://crests.football-data.org/328.png",
    },
  },
  {
    id: 44,
    name: "Blackpool",
    image: {
      id: 336,
      url: "https://crests.football-data.org/336.png",
    },
  },
  {
    id: 47,
    name: "Ajax",
    image: {
      id: 678,
      url: "https://crests.football-data.org/678.png",
    },
  },
  {
    id: 53,
    name: "Celtic",
    image: {
      id: 732,
      url: "https://crests.football-data.org/732.png",
    },
  },
  {
    id: 61,
    name: "Galatasaray",
    image: {
      id: 610,
      url: "https://crests.football-data.org/610.png",
    },
  },
  {
    id: 62,
    name: "Juventus",
    image: {
      id: 109,
      url: "https://crests.football-data.org/109.png",
    },
  },
  {
    id: 63,
    name: "Marseille",
    image: {
      id: 516,
      url: "https://crests.football-data.org/516.png",
    },
  },
  {
    id: 64,
    name: "Milan",
    image: {
      id: 98,
      url: "https://crests.football-data.org/98.png",
    },
  },
  {
    id: 65,
    name: "Napoli",
    image: {
      id: 113,
      url: "https://crests.football-data.org/113.png",
    },
  },
  {
    id: 66,
    name: "Olympiakos",
    image: {
      id: 654,
      url: "https://crests.football-data.org/654.png",
    },
  },
  {
    id: 68,
    name: "Real Madrid",
    image: {
      id: 86,
      url: "https://crests.football-data.org/86.png",
    },
  },
  {
    id: 69,
    name: "Real Sociedad",
    image: {
      id: 92,
      url: "https://crests.football-data.org/92.svg",
    },
  },
  {
    id: 78,
    name: "AZ",
    image: {
      id: 682,
      url: "https://crests.football-data.org/682.png",
    },
  },
  {
    id: 79,
    name: "Bordeaux",
    image: {
      id: 526,
      url: "https://crests.football-data.org/526.svg",
    },
  },
  {
    id: 81,
    name: "Dinamo Zagreb",
    image: {
      id: 755,
      url: "https://crests.football-data.org/755.png",
    },
  },
  {
    id: 83,
    name: "Dynamo Kyiv",
    image: {
      id: 842,
      url: "https://crests.football-data.org/842.png",
    },
  },
  {
    id: 86,
    name: "Estoril Praia",
    image: {
      id: 582,
      url: "https://crests.football-data.org/582.png",
    },
  },
  {
    id: 90,
    name: "Fiorentina",
    image: {
      id: 99,
      url: "https://crests.football-data.org/99.png",
    },
  },
  {
    id: 92,
    name: "IF Elfsborg",
    image: {
      id: 5284,
      url: "https://crests.football-data.org/5284.png",
    },
  },
  {
    id: 93,
    name: "KRC Genk",
    image: {
      id: 1858,
      url: "https://crests.football-data.org/1858.png",
    },
  },
  {
    id: 95,
    name: "Lazio",
    image: {
      id: 110,
      url: "https://crests.football-data.org/110.png",
    },
  },
  {
    id: 99,
    name: "Maccabi Haifa",
    image: {
      id: 884,
      url: "https://crests.football-data.org/884.png",
    },
  },
  {
    id: 106,
    name: "Real Betis",
    image: {
      id: 90,
      url: "https://crests.football-data.org/90.png",
    },
  },
  {
    id: 107,
    name: "Rubin Kazan",
    image: {
      id: 882,
      url: "https://crests.football-data.org/882.png",
    },
  },
  {
    id: 112,
    name: "Slovan Liberec",
    image: {
      id: 4472,
      url: null,
    },
  },
  {
    id: 114,
    name: "Standard Liège",
    image: {
      id: 1866,
      url: "https://crests.football-data.org/1866.png",
    },
  },
  {
    id: 116,
    name: "Trabzonspor",
    image: {
      id: 602,
      url: "https://crests.football-data.org/602.png",
    },
  },
  {
    id: 117,
    name: "Tromsø",
    image: {
      id: 5733,
      url: "https://crests.football-data.org/5733.png",
    },
  },
  {
    id: 121,
    name: "AFC Wimbledon",
    image: {
      id: 347,
      url: "https://crests.football-data.org/347.png",
    },
  },
  {
    id: 122,
    name: "Alfreton Town",
    image: {
      id: 1153,
      url: "https://crests.football-data.org/1153.png",
    },
  },
  {
    id: 123,
    name: "Barnet",
    image: {
      id: 1134,
      url: "https://crests.football-data.org/1134.png",
    },
  },
  {
    id: 126,
    name: "Boreham Wood",
    image: {
      id: 1113,
      url: "https://crests.football-data.org/1113.png",
    },
  },
  {
    id: 127,
    name: "Bournemouth",
    image: {
      id: 1044,
      url: "https://crests.football-data.org/1044.png",
    },
  },
  {
    id: 128,
    name: "Brackley Town",
    image: {
      id: 1151,
      url: "",
    },
  },
  {
    id: 129,
    name: "Braintree Town",
    image: {
      id: 1109,
      url: "",
    },
  },
  {
    id: 130,
    name: "Brentford",
    image: {
      id: 402,
      url: "https://crests.football-data.org/402.png",
    },
  },
  {
    id: 132,
    name: "Bristol City",
    image: {
      id: 387,
      url: "https://crests.football-data.org/387.svg",
    },
  },
  {
    id: 133,
    name: "Bristol Rovers",
    image: {
      id: 400,
      url: "https://crests.football-data.org/400.png",
    },
  },
  {
    id: 134,
    name: "Burton Albion",
    image: {
      id: 1072,
      url: "https://crests.football-data.org/1072.png",
    },
  },
  {
    id: 135,
    name: "Bury",
    image: {
      id: 1068,
      url: "https://crests.football-data.org/1068.png",
    },
  },
  {
    id: 139,
    name: "Chesterfield",
    image: {
      id: 363,
      url: "https://upload.wikimedia.org/wikipedia/en/9/94/Chesterfield_FC_crest.svg",
    },
  },
  {
    id: 141,
    name: "Corby Town",
    image: {
      id: 1399,
      url: "",
    },
  },
  {
    id: 142,
    name: "Crawley Town",
    image: {
      id: 1132,
      url: "https://crests.football-data.org/1132.png",
    },
  },
  {
    id: 145,
    name: "Dartford",
    image: {
      id: 1160,
      url: "",
    },
  },
  {
    id: 146,
    name: "Daventry Town",
    image: {
      id: 1754,
      url: "",
    },
  },
  {
    id: 148,
    name: "Dover Athletic",
    image: {
      id: 1111,
      url: "",
    },
  },
  {
    id: 149,
    name: "Exeter City",
    image: {
      id: 1135,
      url: "https://crests.football-data.org/1135.png",
    },
  },
  {
    id: 151,
    name: "Fleetwood Town",
    image: {
      id: 1073,
      url: "https://crests.football-data.org/1073.png",
    },
  },
  {
    id: 152,
    name: "Gateshead",
    image: {
      id: 1117,
      url: "https://crests.football-data.org/1117.png",
    },
  },
  {
    id: 153,
    name: "Gillingham",
    image: {
      id: 370,
      url: "https://crests.football-data.org/370.png",
    },
  },
  {
    id: 155,
    name: "Grimsby Town",
    image: {
      id: 1137,
      url: "https://crests.football-data.org/1137.png",
    },
  },
  {
    id: 161,
    name: "Leyton Orient",
    image: {
      id: 399,
      url: "https://crests.football-data.org/399.png",
    },
  },
  {
    id: 162,
    name: "Lincoln City",
    image: {
      id: 1126,
      url: "https://crests.football-data.org/1126.png",
    },
  },
  {
    id: 163,
    name: "Luton Town",
    image: {
      id: 389,
      url: "https://crests.football-data.org/389.png",
    },
  },
  {
    id: 165,
    name: "Mansfield Town",
    image: {
      id: 1133,
      url: "https://crests.football-data.org/1133.png",
    },
  },
  {
    id: 166,
    name: "Millwall",
    image: {
      id: 384,
      url: "https://crests.football-data.org/384.png",
    },
  },
  {
    id: 168,
    name: "Morecambe",
    image: {
      id: 1141,
      url: "https://crests.football-data.org/1141.png",
    },
  },
  {
    id: 169,
    name: "Newport County",
    image: {
      id: 1142,
      url: "https://crests.football-data.org/1142.png",
    },
  },
  {
    id: 171,
    name: "Notts County",
    image: {
      id: 391,
      url: "https://crests.football-data.org/391.png",
    },
  },
  {
    id: 172,
    name: "Oxford United",
    image: {
      id: 1082,
      url: "https://crests.football-data.org/1082.png",
    },
  },
  {
    id: 175,
    name: "Port Vale",
    image: {
      id: 393,
      url: "https://crests.football-data.org/393.png",
    },
  },
  {
    id: 177,
    name: "Rochdale",
    image: {
      id: 361,
      url: "https://crests.football-data.org/361.png",
    },
  },
  {
    id: 184,
    name: "Southport",
    image: {
      id: 1125,
      url: "https://crests.football-data.org/1125.png",
    },
  },
  {
    id: 185,
    name: "St Albans City",
    image: {
      id: 1158,
      url: "",
    },
  },
  {
    id: 186,
    name: "Staines Town",
    image: {
      id: 1201,
      url: "",
    },
  },
  {
    id: 187,
    name: "Stevenage",
    image: {
      id: 1144,
      url: "https://crests.football-data.org/1144.png",
    },
  },
  {
    id: 188,
    name: "Stourbridge",
    image: {
      id: 1148,
      url: "",
    },
  },
  {
    id: 189,
    name: "Sutton United",
    image: {
      id: 1122,
      url: "https://crests.football-data.org/1122.png",
    },
  },
  {
    id: 190,
    name: "Tamworth",
    image: {
      id: 2356,
      url: null,
    },
  },
  {
    id: 193,
    name: "Walsall",
    image: {
      id: 369,
      url: "https://crests.football-data.org/369.png",
    },
  },
  {
    id: 194,
    name: "Welling United",
    image: {
      id: 1186,
      url: "",
    },
  },
  {
    id: 195,
    name: "Wrexham",
    image: {
      id: 404,
      url: "https://crests.football-data.org/404.png",
    },
  },
  {
    id: 197,
    name: "Yeovil Town",
    image: {
      id: 1131,
      url: "https://crests.football-data.org/1131.png",
    },
  },
  {
    id: 198,
    name: "York City",
    image: {
      id: 1129,
      url: "https://crests.football-data.org/1129.png",
    },
  },
  {
    id: 201,
    name: "Malmö FF",
    image: {
      id: 749,
      url: "https://crests.football-data.org/749.png",
    },
  },
  {
    id: 202,
    name: "Monaco",
    image: {
      id: 548,
      url: "https://crests.football-data.org/548.png",
    },
  },
  {
    id: 203,
    name: "Roma",
    image: {
      id: 100,
      url: "https://crests.football-data.org/100.png",
    },
  },
  {
    id: 207,
    name: "Aldershot Town",
    image: {
      id: 1108,
      url: "https://crests.football-data.org/1108.png",
    },
  },
  {
    id: 208,
    name: "Altrincham",
    image: {
      id: 1161,
      url: "https://crests.football-data.org/1161.png",
    },
  },
  {
    id: 210,
    name: "Blyth Spartans",
    image: {
      id: 1253,
      url: "",
    },
  },
  {
    id: 211,
    name: "Bromley",
    image: {
      id: 1118,
      url: "https://crests.football-data.org/1118.png",
    },
  },
  {
    id: 215,
    name: "Eastleigh",
    image: {
      id: 1116,
      url: "https://crests.football-data.org/1116.png",
    },
  },
  {
    id: 224,
    name: "Woking",
    image: {
      id: 1115,
      url: "https://crests.football-data.org/1115.png",
    },
  },
  {
    id: 225,
    name: "Worcester City",
    image: {
      id: 1226,
      url: "",
    },
  },
  {
    id: 228,
    name: "Astra Giurgiu",
    image: {
      id: 698,
      url: "https://crests.football-data.org/698.svg",
    },
  },
  {
    id: 232,
    name: "Club Brugge",
    image: {
      id: 851,
      url: "https://crests.football-data.org/851.svg",
    },
  },
  {
    id: 235,
    name: "FC Zürich",
    image: {
      id: 5273,
      url: "https://crests.football-data.org/5273.png",
    },
  },
  {
    id: 236,
    name: "Feyenoord",
    image: {
      id: 675,
      url: "https://crests.football-data.org/675.png",
    },
  },
  {
    id: 243,
    name: "Lille",
    image: {
      id: 521,
      url: "https://crests.football-data.org/521.svg",
    },
  },
  {
    id: 245,
    name: "Panathinaikos",
    image: {
      id: 646,
      url: "https://crests.football-data.org/646.png",
    },
  },
  {
    id: 247,
    name: "Rio Ave",
    image: {
      id: 496,
      url: "https://crests.football-data.org/496.png",
    },
  },
  {
    id: 251,
    name: "Torino",
    image: {
      id: 586,
      url: "https://crests.football-data.org/586.png",
    },
  },
  {
    id: 253,
    name: "Villarreal",
    image: {
      id: 94,
      url: "https://crests.football-data.org/94.png",
    },
  },
  {
    id: 254,
    name: "Barwell",
    image: {
      id: 1248,
      url: "",
    },
  },
  {
    id: 255,
    name: "Chesham United",
    image: {
      id: 1164,
      url: "",
    },
  },
  {
    id: 256,
    name: "Didcot Town",
    image: {
      id: 1462,
      url: "",
    },
  },
  {
    id: 261,
    name: "Salford City",
    image: {
      id: 1219,
      url: "https://crests.football-data.org/1219.png",
    },
  },
  {
    id: 263,
    name: "Wealdstone",
    image: {
      id: 1174,
      url: "https://crests.football-data.org/1174.png",
    },
  },
  {
    id: 361,
    name: "Belenenses",
    image: {
      id: 5568,
      url: "https://crests.football-data.org/5568.png",
    },
  },
  {
    id: 366,
    name: "Fenerbahçe",
    image: {
      id: 613,
      url: "https://crests.football-data.org/613.png",
    },
  },
  {
    id: 370,
    name: "Molde",
    image: {
      id: 5726,
      url: "https://crests.football-data.org/5726.png",
    },
  },
  {
    id: 371,
    name: "Rosenborg",
    image: {
      id: 889,
      url: "https://crests.football-data.org/889.png",
    },
  },
  {
    id: 378,
    name: "FC Porto B",
    image: {
      id: 5532,
      url: null,
    },
  },
  {
    id: 380,
    name: "Jong PSV",
    image: {
      id: 1925,
      url: "https://crests.football-data.org/1925.png",
    },
  },
  {
    id: 384,
    name: "Villarreal B",
    image: {
      id: 302,
      url: "https://crests.football-data.org/302.png",
    },
  },
  {
    id: 389,
    name: "KAA Gent",
    image: {
      id: 1057,
      url: "https://crests.football-data.org/1057.png",
    },
  },
  {
    id: 395,
    name: "Barrow",
    image: {
      id: 1110,
      url: "https://crests.football-data.org/1110.png",
    },
  },
  {
    id: 396,
    name: "Bath City",
    image: {
      id: 1190,
      url: "",
    },
  },
  {
    id: 397,
    name: "Buxton",
    image: {
      id: 6598,
      url: "https://crests.football-data.org/6598.png",
    },
  },
  {
    id: 400,
    name: "Darlington",
    image: {
      id: 4610,
      url: "https://crests.football-data.org/4610.png",
    },
  },
  {
    id: 401,
    name: "Droylsden",
    image: {
      id: 6551,
      url: null,
    },
  },
  {
    id: 405,
    name: "Farnborough",
    image: {
      id: 1296,
      url: "https://crests.football-data.org/1296.png",
    },
  },
  {
    id: 406,
    name: "Guiseley",
    image: {
      id: 1119,
      url: "",
    },
  },
  {
    id: 407,
    name: "Harrow Borough",
    image: {
      id: 1163,
      url: "",
    },
  },
  {
    id: 409,
    name: "Hendon",
    image: {
      id: 1171,
      url: "",
    },
  },
  {
    id: 410,
    name: "Histon",
    image: {
      id: 6346,
      url: null,
    },
  },
  {
    id: 412,
    name: "Kettering Town",
    image: {
      id: 1183,
      url: "",
    },
  },
  {
    id: 413,
    name: "Leiston",
    image: {
      id: 1187,
      url: "",
    },
  },
  {
    id: 416,
    name: "Mossley",
    image: {
      id: 6539,
      url: null,
    },
  },
  {
    id: 417,
    name: "Newcastle Town",
    image: {
      id: 6543,
      url: null,
    },
  },
  {
    id: 422,
    name: "Sheffield FC",
    image: {
      id: 6557,
      url: null,
    },
  },
  {
    id: 427,
    name: "Workington",
    image: {
      id: 6614,
      url: null,
    },
  },
  {
    id: 435,
    name: "Hertha BSC II",
    image: {
      id: 5989,
      url: "https://crests.football-data.org/5989.png",
    },
  },
  {
    id: 437,
    name: "Dundalk",
    image: {
      id: 1873,
      url: "https://crests.football-data.org/1873.png",
    },
  },
  {
    id: 438,
    name: "Nice",
    image: {
      id: 522,
      url: "https://crests.football-data.org/522.png",
    },
  },
  {
    id: 440,
    name: "Sassuolo",
    image: {
      id: 471,
      url: "https://crests.football-data.org/471.png",
    },
  },
  {
    id: 441,
    name: "Zorya Luhansk",
    image: {
      id: 5200,
      url: "https://crests.football-data.org/5200.png",
    },
  },
  {
    id: 444,
    name: "Konyaspor",
    image: {
      id: 5247,
      url: "https://crests.football-data.org/5247.png",
    },
  },
  {
    id: 446,
    name: "Merstham",
    image: {
      id: 1166,
      url: "",
    },
  },
  {
    id: 449,
    name: "Westfields",
    image: {
      id: 1154,
      url: "",
    },
  },
  {
    id: 450,
    name: "Curzon Ashton",
    image: {
      id: 1150,
      url: "https://crests.football-data.org/1150.png",
    },
  },
  {
    id: 451,
    name: "Taunton Town",
    image: {
      id: 1152,
      url: "https://crests.football-data.org/1152.png",
    },
  },
  {
    id: 452,
    name: "Stamford",
    image: {
      id: 5068,
      url: null,
    },
  },
  {
    id: 453,
    name: "Udinese",
    image: {
      id: 115,
      url: "https://crests.football-data.org/115.png",
    },
  },
  {
    id: 457,
    name: "Marítimo",
    image: {
      id: 5575,
      url: "https://crests.football-data.org/5575.png",
    },
  },
  {
    id: 464,
    name: "Levante",
    image: {
      id: 88,
      url: "https://crests.football-data.org/88.svg",
    },
  },
  {
    id: 467,
    name: "CFR Cluj",
    image: {
      id: 5515,
      url: "https://crests.football-data.org/5515.png",
    },
  },
  {
    id: 470,
    name: "Rangers",
    image: {
      id: 5376,
      url: "https://crests.football-data.org/5376.png",
    },
  },
  {
    id: 471,
    name: "Livorno",
    image: {
      id: 436,
      url: "https://crests.football-data.org/436.svg",
    },
  },
  {
    id: 472,
    name: "Auxerre",
    image: {
      id: 519,
      url: "https://crests.football-data.org/519.png",
    },
  },
  {
    id: 475,
    name: "Parma",
    image: {
      id: 112,
      url: "https://crests.football-data.org/112.png",
    },
  },
  {
    id: 476,
    name: "Osasuna",
    image: {
      id: 79,
      url: "https://crests.football-data.org/79.svg",
    },
  },
  {
    id: 480,
    name: "Nancy",
    image: {
      id: 520,
      url: "https://crests.football-data.org/520.png",
    },
  },
  {
    id: 482,
    name: "Espanyol",
    image: {
      id: 80,
      url: "https://crests.football-data.org/80.svg",
    },
  },
  {
    id: 484,
    name: "Mladá Boleslav",
    image: {
      id: 4477,
      url: null,
    },
  },
  {
    id: 485,
    name: "Palermo",
    image: {
      id: 114,
      url: "https://crests.football-data.org/114.png",
    },
  },
  {
    id: 488,
    name: "Hertha BSC",
    image: {
      id: 9,
      url: "https://crests.football-data.org/9.png",
    },
  },
  {
    id: 491,
    name: "Chievo",
    image: {
      id: 106,
      url: "https://crests.football-data.org/106.png",
    },
  },
  {
    id: 495,
    name: "Derry City",
    image: {
      id: 5521,
      url: "https://crests.football-data.org/5521.png",
    },
  },
  {
    id: 497,
    name: "Kayserispor",
    image: {
      id: 608,
      url: "https://crests.football-data.org/608.png",
    },
  },
  {
    id: 499,
    name: "IK Start",
    image: {
      id: 5723,
      url: "https://crests.football-data.org/5723.png",
    },
  },
  {
    id: 502,
    name: "CSKA Sofia",
    image: {
      id: 4396,
      url: "https://crests.football-data.org/4396.png",
    },
  },
  {
    id: 514,
    name: "CD Nacional",
    image: {
      id: 5529,
      url: "https://crests.football-data.org/5529.png",
    },
  },
  {
    id: 520,
    name: "Sydney FC",
    image: {
      id: 1834,
      url: "https://crests.football-data.org/1834.png",
    },
  },
  {
    id: 525,
    name: "Monterrey",
    image: {
      id: 5780,
      url: "https://crests.football-data.org/5780.png",
    },
  },
  {
    id: 526,
    name: "LA Galaxy",
    image: {
      id: 7452,
      url: "https://crests.football-data.org/7452.png",
    },
  },
  {
    id: 528,
    name: "Real Salt Lake",
    image: {
      id: 7461,
      url: "https://crests.football-data.org/7461.png",
    },
  },
  {
    id: 529,
    name: "Sampdoria",
    image: {
      id: 584,
      url: "https://crests.football-data.org/584.svg",
    },
  },
  {
    id: 530,
    name: "Vålerenga",
    image: {
      id: 5734,
      url: "https://crests.football-data.org/5734.png",
    },
  },
  {
    id: 537,
    name: "Toluca",
    image: {
      id: 5790,
      url: "https://crests.football-data.org/5790.png",
    },
  },
  {
    id: 541,
    name: "Atalanta",
    image: {
      id: 102,
      url: "https://crests.football-data.org/102.png",
    },
  },
  {
    id: 554,
    name: "Racing Club",
    image: {
      id: 2083,
      url: null,
    },
  },
  {
    id: 558,
    name: "Vitesse",
    image: {
      id: 679,
      url: "https://crests.football-data.org/679.png",
    },
  },
  {
    id: 560,
    name: "Latina",
    image: {
      id: 722,
      url: "http://upload.wikimedia.org/wikipedia/de/c/ca/US_Latina.svg",
    },
  },
  {
    id: 571,
    name: "Chicago Fire",
    image: {
      id: 7456,
      url: "https://crests.football-data.org/7456.png",
    },
  },
  {
    id: 577,
    name: "San Lorenzo",
    image: {
      id: 2071,
      url: "https://crests.football-data.org/2071.png",
    },
  },
  {
    id: 578,
    name: "Lanús",
    image: {
      id: 2066,
      url: "https://crests.football-data.org/2066.png",
    },
  },
  {
    id: 580,
    name: "D.C. United",
    image: {
      id: 7454,
      url: "https://crests.football-data.org/7454.png",
    },
  },
  {
    id: 594,
    name: "Houston Dynamo",
    image: {
      id: 7458,
      url: "https://crests.football-data.org/7458.png",
    },
  },
  {
    id: 596,
    name: "FC Dallas",
    image: {
      id: 7459,
      url: "https://crests.football-data.org/7459.png",
    },
  },
  {
    id: 597,
    name: "KAS Eupen",
    image: {
      id: 1857,
      url: "https://crests.football-data.org/1857.png",
    },
  },
  {
    id: 603,
    name: "Akhmat Grozny",
    image: {
      id: 5491,
      url: "https://crests.football-data.org/5491.png",
    },
  },
  {
    id: 607,
    name: "River Plate",
    image: {
      id: 2069,
      url: null,
    },
  },
  {
    id: 609,
    name: "Excelsior",
    image: {
      id: 670,
      url: "https://crests.football-data.org/670.png",
    },
  },
  {
    id: 611,
    name: "Numancia",
    image: {
      id: 260,
      url: "http://upload.wikimedia.org/wikipedia/en/0/07/CD_Numancia_logo.svg",
    },
  },
  {
    id: 613,
    name: "FC Lisse",
    image: {
      id: 6951,
      url: "https://crests.football-data.org/6951.png",
    },
  },
  {
    id: 614,
    name: "Slovácko",
    image: {
      id: 4468,
      url: "https://crests.football-data.org/4468.png",
    },
  },
  {
    id: 633,
    name: "Málaga",
    image: {
      id: 84,
      url: "https://crests.football-data.org/84.png",
    },
  },
  {
    id: 634,
    name: "Guadalajara",
    image: {
      id: 551,
      url: "https://crests.football-data.org/551.svg",
    },
  },
  {
    id: 635,
    name: "RB Leipzig",
    image: {
      id: 721,
      url: "https://crests.football-data.org/721.png",
    },
  },
  {
    id: 636,
    name: "1. FC Köln",
    image: {
      id: 1,
      url: "https://crests.football-data.org/1.png",
    },
  },
  {
    id: 639,
    name: "Leganés",
    image: {
      id: 745,
      url: "https://crests.football-data.org/745.png",
    },
  },
  {
    id: 640,
    name: "Getafe",
    image: {
      id: 82,
      url: "https://crests.football-data.org/82.png",
    },
  },
  {
    id: 641,
    name: "Girona",
    image: {
      id: 298,
      url: "https://crests.football-data.org/298.png",
    },
  },
  {
    id: 651,
    name: "Chapecoense",
    image: {
      id: 1772,
      url: "https://crests.football-data.org/1772_large.png",
    },
  },
  {
    id: 688,
    name: "Oxford City",
    image: {
      id: 1235,
      url: "https://crests.football-data.org/1235.png",
    },
  },
  {
    id: 689,
    name: "Nantwich Town",
    image: {
      id: 1182,
      url: "",
    },
  },
  {
    id: 691,
    name: "Redbridge",
    image: {
      id: 6445,
      url: null,
    },
  },
  {
    id: 694,
    name: "Yate Town",
    image: {
      id: 6586,
      url: null,
    },
  },
  {
    id: 695,
    name: "Bury Town",
    image: {
      id: 1479,
      url: "",
    },
  },
  {
    id: 708,
    name: "Truro City",
    image: {
      id: 1304,
      url: "",
    },
  },
  {
    id: 710,
    name: "Leatherhead",
    image: {
      id: 1380,
      url: "",
    },
  },
  {
    id: 711,
    name: "Hyde United",
    image: {
      id: 1294,
      url: "",
    },
  },
  {
    id: 714,
    name: "Chorley",
    image: {
      id: 1217,
      url: "",
    },
  },
  {
    id: 715,
    name: "Quick Boys",
    image: {
      id: 6958,
      url: "https://crests.football-data.org/6958.png",
    },
  },
  {
    id: 724,
    name: "Corinthians",
    image: {
      id: 1779,
      url: "https://crests.football-data.org/1779.svg",
    },
  },
  {
    id: 725,
    name: "Fluminense",
    image: {
      id: 1765,
      url: "https://crests.football-data.org/1765.svg",
    },
  },
  {
    id: 728,
    name: "Telstar",
    image: {
      id: 1912,
      url: "https://crests.football-data.org/1912.png",
    },
  },
  {
    id: 734,
    name: "Luzern",
    image: {
      id: 5266,
      url: "https://crests.football-data.org/5266.png",
    },
  },
  {
    id: 737,
    name: "MSV Duisburg",
    image: {
      id: 7630,
      url: null,
    },
  },
  {
    id: 742,
    name: "Kendal Town",
    image: {
      id: 1551,
      url: "",
    },
  },
  {
    id: 745,
    name: "Thurrock",
    image: {
      id: 1568,
      url: "",
    },
  },
  {
    id: 748,
    name: "Genoa",
    image: {
      id: 107,
      url: "https://crests.football-data.org/107.png",
    },
  },
  {
    id: 750,
    name: "Levski Sofia",
    image: {
      id: 928,
      url: "https://crests.football-data.org/928.png",
    },
  },
  {
    id: 753,
    name: "Toulouse",
    image: {
      id: 511,
      url: "https://crests.football-data.org/511.png",
    },
  },
  {
    id: 755,
    name: "Ventspils",
    image: {
      id: 5824,
      url: null,
    },
  },
  {
    id: 759,
    name: "Mallorca",
    image: {
      id: 89,
      url: "https://crests.football-data.org/89.png",
    },
  },
  {
    id: 761,
    name: "Hércules",
    image: {
      id: 269,
      url: "http://upload.wikimedia.org/wikipedia/en/8/8a/H%C3%A9rcules_cf_200px.png",
    },
  },
  {
    id: 763,
    name: "Real Zaragoza",
    image: {
      id: 91,
      url: "https://crests.football-data.org/91.png",
    },
  },
  {
    id: 764,
    name: "Almería",
    image: {
      id: 267,
      url: "https://crests.football-data.org/267.png",
    },
  },
  {
    id: 765,
    name: "Albacete",
    image: {
      id: 237,
      url: "https://crests.football-data.org/237.png",
    },
  },
  {
    id: 768,
    name: "Cartagena",
    image: {
      id: 300,
      url: "https://crests.football-data.org/300.png",
    },
  },
  {
    id: 769,
    name: "Córdoba",
    image: {
      id: 295,
      url: "https://crests.football-data.org/295.png",
    },
  },
  {
    id: 770,
    name: "Elche",
    image: {
      id: 285,
      url: "https://crests.football-data.org/285.png",
    },
  },
  {
    id: 772,
    name: "Huesca",
    image: {
      id: 299,
      url: "https://crests.football-data.org/299.svg",
    },
  },
  {
    id: 773,
    name: "Las Palmas",
    image: {
      id: 275,
      url: "https://crests.football-data.org/275.png",
    },
  },
  {
    id: 774,
    name: "Ponferradina",
    image: {
      id: 286,
      url: "https://crests.football-data.org/286.png",
    },
  },
  {
    id: 775,
    name: "Rayo Vallecano",
    image: {
      id: 87,
      url: "https://crests.football-data.org/87.svg",
    },
  },
  {
    id: 781,
    name: "Alcoyano",
    image: {
      id: 550,
      url: "https://crests.football-data.org/550.png",
    },
  },
  {
    id: 783,
    name: "Real Murcia",
    image: {
      id: 258,
      url: "http://upload.wikimedia.org/wikipedia/de/a/ae/Real_Murcia.svg",
    },
  },
  {
    id: 785,
    name: "Lugo",
    image: {
      id: 596,
      url: "https://crests.football-data.org/596.png",
    },
  },
  {
    id: 788,
    name: "Alavés",
    image: {
      id: 263,
      url: "https://crests.football-data.org/263.png",
    },
  },
  {
    id: 789,
    name: "Eibar",
    image: {
      id: 278,
      url: "https://crests.football-data.org/278.svg",
    },
  },
  {
    id: 790,
    name: "Real Jaén",
    image: {
      id: 7437,
      url: "https://crests.football-data.org/7437.png",
    },
  },
  {
    id: 793,
    name: "Real Oviedo",
    image: {
      id: 1048,
      url: "https://crests.football-data.org/1048.png",
    },
  },
  {
    id: 797,
    name: "UCAM Murcia",
    image: {
      id: 1100,
      url: "https://crests.football-data.org/1100.png",
    },
  },
  {
    id: 804,
    name: "Castellón",
    image: {
      id: 7446,
      url: "https://crests.football-data.org/7446.png",
    },
  },
  {
    id: 816,
    name: "Melilla",
    image: {
      id: 5341,
      url: "https://crests.football-data.org/5341.png",
    },
  },
  {
    id: 818,
    name: "Ontinyent",
    image: {
      id: 7435,
      url: null,
    },
  },
  {
    id: 825,
    name: "Real Unión",
    image: {
      id: 5315,
      url: "https://crests.football-data.org/5315.png",
    },
  },
  {
    id: 826,
    name: "Sant Andreu",
    image: {
      id: 7436,
      url: null,
    },
  },
  {
    id: 828,
    name: "Teruel",
    image: {
      id: 7450,
      url: "https://crests.football-data.org/7450.png",
    },
  },
  {
    id: 829,
    name: "Tudelano",
    image: {
      id: 7443,
      url: "https://crests.football-data.org/7443.png",
    },
  },
  {
    id: 830,
    name: "UD Logroñés",
    image: {
      id: 5340,
      url: "https://crests.football-data.org/5340.png",
    },
  },
  {
    id: 836,
    name: "Barakaldo",
    image: {
      id: 7432,
      url: "https://crests.football-data.org/7432.png",
    },
  },
  {
    id: 840,
    name: "Fuenlabrada",
    image: {
      id: 5325,
      url: "https://crests.football-data.org/5325.png",
    },
  },
  {
    id: 849,
    name: "Olot",
    image: {
      id: 6853,
      url: "https://crests.football-data.org/6853.png",
    },
  },
  {
    id: 855,
    name: "Toledo",
    image: {
      id: 279,
      url: "https://crests.football-data.org/279.png",
    },
  },
  {
    id: 861,
    name: "Compostela",
    image: {
      id: 7448,
      url: "https://crests.football-data.org/7448.png",
    },
  },
  {
    id: 868,
    name: "Mensajero",
    image: {
      id: 7441,
      url: "https://crests.football-data.org/7441.png",
    },
  },
  {
    id: 870,
    name: "Peña Sport",
    image: {
      id: 5316,
      url: "https://crests.football-data.org/5316.png",
    },
  },
  {
    id: 879,
    name: "Internacional",
    image: {
      id: 1839,
      url: null,
    },
  },
  {
    id: 880,
    name: "Villanovense",
    image: {
      id: 5329,
      url: "https://crests.football-data.org/5329.png",
    },
  },
  {
    id: 881,
    name: "Pachuca",
    image: {
      id: 5781,
      url: "https://crests.football-data.org/5781.png",
    },
  },
  {
    id: 887,
    name: "Kashiwa Reysol",
    image: {
      id: 5866,
      url: "https://crests.football-data.org/5866.png",
    },
  },
  {
    id: 888,
    name: "Santos",
    image: {
      id: 6685,
      url: "https://crests.football-data.org/6685.png",
    },
  },
  {
    id: 894,
    name: "Cruz Azul",
    image: {
      id: 5789,
      url: "https://crests.football-data.org/5789.png",
    },
  },
  {
    id: 897,
    name: "América",
    image: {
      id: 5776,
      url: "https://crests.football-data.org/5776.png",
    },
  },
  {
    id: 901,
    name: "Beijing Guoan",
    image: {
      id: 4412,
      url: null,
    },
  },
  {
    id: 904,
    name: "BK Häcken",
    image: {
      id: 5278,
      url: "https://crests.football-data.org/5278.png",
    },
  },
  {
    id: 905,
    name: "Boca Juniors",
    image: {
      id: 2061,
      url: "https://crests.football-data.org/2061.png",
    },
  },
  {
    id: 908,
    name: "Kuwait",
    image: {
      id: 8066,
      url: "https://crests.football-data.org/8066.png",
    },
  },
  {
    id: 917,
    name: "Kaizer Chiefs",
    image: {
      id: 5360,
      url: null,
    },
  },
  {
    id: 932,
    name: "Jong Ajax",
    image: {
      id: 1922,
      url: "https://crests.football-data.org/1922.png",
    },
  },
  {
    id: 938,
    name: "Nagoya Grampus",
    image: {
      id: 5854,
      url: "https://crests.football-data.org/5854.png",
    },
  },
  {
    id: 949,
    name: "Thailand",
    image: {
      id: 8059,
      url: "https://crests.football-data.org/8059.png",
    },
  },
  {
    id: 950,
    name: "Verona",
    image: {
      id: 450,
      url: "https://crests.football-data.org/450.png",
    },
  },
  {
    id: 953,
    name: "Willem II",
    image: {
      id: 672,
      url: "https://crests.football-data.org/672.png",
    },
  },
  {
    id: 955,
    name: "Montpellier",
    image: {
      id: 518,
      url: "https://crests.football-data.org/518.png",
    },
  },
  {
    id: 956,
    name: "São Paulo",
    image: {
      id: 1776,
      url: "https://crests.football-data.org/1776.png",
    },
  },
  {
    id: 957,
    name: "Bursaspor",
    image: {
      id: 607,
      url: "https://crests.football-data.org/607.png",
    },
  },
  {
    id: 968,
    name: "Marbella",
    image: {
      id: 5330,
      url: "https://crests.football-data.org/5330.png",
    },
  },
  {
    id: 969,
    name: "Real Avilés",
    image: {
      id: 5334,
      url: "https://crests.football-data.org/5334.png",
    },
  },
  {
    id: 974,
    name: "Zamora",
    image: {
      id: 5178,
      url: "https://crests.football-data.org/5178.png",
    },
  },
  {
    id: 982,
    name: "Conquense",
    image: {
      id: 7440,
      url: null,
    },
  },
  {
    id: 991,
    name: "China PR",
    image: {
      id: 8052,
      url: "https://crests.football-data.org/china.svg",
    },
  },
  {
    id: 1005,
    name: "Peñarol",
    image: {
      id: 5184,
      url: "https://crests.football-data.org/5184.png",
    },
  },
  {
    id: 1061,
    name: "Badalona",
    image: {
      id: 5317,
      url: null,
    },
  },
  {
    id: 1062,
    name: "Cacereño",
    image: {
      id: 6856,
      url: "https://crests.football-data.org/6856.png",
    },
  },
  {
    id: 1064,
    name: "Durango",
    image: {
      id: 6854,
      url: null,
    },
  },
  {
    id: 1067,
    name: "Grêmio",
    image: {
      id: 1767,
      url: "https://crests.football-data.org/1767.png",
    },
  },
  {
    id: 1069,
    name: "Tarazona",
    image: {
      id: 6858,
      url: "https://crests.football-data.org/6858.png",
    },
  },
  {
    id: 1071,
    name: "Boluspor",
    image: {
      id: 5238,
      url: "https://crests.football-data.org/5238.png",
    },
  },
  {
    id: 1083,
    name: "Lleida",
    image: {
      id: 280,
      url: "https://crests.football-data.org/280.png",
    },
  },
  {
    id: 1089,
    name: "Yeclano",
    image: {
      id: 7444,
      url: "https://crests.football-data.org/7444.png",
    },
  },
  {
    id: 1136,
    name: "FC Biel-Bienne",
    image: {
      id: 5258,
      url: null,
    },
  },
  {
    id: 1142,
    name: "Lillestrøm",
    image: {
      id: 5725,
      url: "https://crests.football-data.org/5725.png",
    },
  },
  {
    id: 1147,
    name: "Olhanense",
    image: {
      id: 499,
      url: "http://upload.wikimedia.org/wikipedia/de/e/e3/SC_Olhanense_Logo.svg",
    },
  },
  {
    id: 1148,
    name: "Sivasspor",
    image: {
      id: 612,
      url: "https://crests.football-data.org/612.png",
    },
  },
  {
    id: 1150,
    name: "Stabæk",
    image: {
      id: 5731,
      url: "https://crests.football-data.org/5731.png",
    },
  },
  {
    id: 1166,
    name: "",
    image: {
      id: 691,
      url: "",
    },
  },
  {
    id: 1168,
    name: "Perth Glory",
    image: {
      id: 1835,
      url: "https://crests.football-data.org/1835.png",
    },
  },
  {
    id: 1175,
    name: "Cagliari",
    image: {
      id: 104,
      url: "https://crests.football-data.org/104.png",
    },
  },
  {
    id: 1177,
    name: "Avellino",
    image: {
      id: 486,
      url: "http://upload.wikimedia.org/wikipedia/de/a/ab/AS_Avellino.png",
    },
  },
  {
    id: 1182,
    name: "BFC Siófok",
    image: {
      id: 6031,
      url: null,
    },
  },
  {
    id: 1185,
    name: "Novara",
    image: {
      id: 587,
      url: "http://upload.wikimedia.org/wikipedia/de/a/a5/Novara_Calcio.svg",
    },
  },
  {
    id: 1187,
    name: "Samsunspor",
    image: {
      id: 603,
      url: "https://crests.football-data.org/603.png",
    },
  },
  {
    id: 1188,
    name: "Mutilvera",
    image: {
      id: 7433,
      url: null,
    },
  },
  {
    id: 1189,
    name: "Navalcarnero",
    image: {
      id: 7431,
      url: "https://crests.football-data.org/7431.png",
    },
  },
  {
    id: 1190,
    name: "Don Benito",
    image: {
      id: 7438,
      url: null,
    },
  },
  {
    id: 1191,
    name: "Langreo",
    image: {
      id: 7447,
      url: null,
    },
  },
  {
    id: 1193,
    name: "Poblense",
    image: {
      id: 7434,
      url: null,
    },
  },
  {
    id: 1196,
    name: "AD Ceuta",
    image: {
      id: 7445,
      url: "https://crests.football-data.org/7445.png",
    },
  },
  {
    id: 1198,
    name: "Nantes",
    image: {
      id: 543,
      url: "https://crests.football-data.org/543.png",
    },
  },
  {
    id: 1199,
    name: "Porto",
    image: {
      id: 503,
      url: "https://crests.football-data.org/503.png",
    },
  },
  {
    id: 1241,
    name: "F91 Dudelange",
    image: {
      id: 1875,
      url: "https://crests.football-data.org/1875.png",
    },
  },
  {
    id: 1242,
    name: "Sarpsborg 08",
    image: {
      id: 5729,
      url: "https://crests.football-data.org/5729.png",
    },
  },
  {
    id: 1243,
    name: "Spartak Trnava",
    image: {
      id: 7288,
      url: "https://crests.football-data.org/7288.png",
    },
  },
  {
    id: 1245,
    name: "Benevento",
    image: {
      id: 1106,
      url: "https://crests.football-data.org/1106.png",
    },
  },
  {
    id: 1259,
    name: "Bretteville",
    image: {
      id: 6250,
      url: null,
    },
  },
  {
    id: 1262,
    name: "Mondeville",
    image: {
      id: 7739,
      url: null,
    },
  },
  {
    id: 1269,
    name: "Orléans",
    image: {
      id: 742,
      url: "https://crests.football-data.org/742.png",
    },
  },
  {
    id: 1292,
    name: "Helmond Sport",
    image: {
      id: 1921,
      url: "https://crests.football-data.org/1921.png",
    },
  },
  {
    id: 1294,
    name: "MTK Budapest",
    image: {
      id: 6086,
      url: null,
    },
  },
  {
    id: 1296,
    name: "Vissel Kobe",
    image: {
      id: 5862,
      url: "https://crests.football-data.org/5862.png",
    },
  },
  {
    id: 1313,
    name: "Botev Plovdiv",
    image: {
      id: 4376,
      url: null,
    },
  },
  {
    id: 1315,
    name: "Glenavon",
    image: {
      id: 5742,
      url: "https://crests.football-data.org/5742.png",
    },
  },
  {
    id: 1317,
    name: "Jelgava",
    image: {
      id: 5821,
      url: null,
    },
  },
  {
    id: 1321,
    name: "Raith Rovers",
    image: {
      id: 5389,
      url: null,
    },
  },
  {
    id: 1326,
    name: "Strasbourg",
    image: {
      id: 576,
      url: "https://crests.football-data.org/576.png",
    },
  },
  {
    id: 1332,
    name: "Baník Ostrava",
    image: {
      id: 4470,
      url: "https://crests.football-data.org/4470.png",
    },
  },
  {
    id: 1333,
    name: "Boavista",
    image: {
      id: 810,
      url: "https://crests.football-data.org/810.png",
    },
  },
  {
    id: 1334,
    name: "Bohemians",
    image: {
      id: 5518,
      url: null,
    },
  },
  {
    id: 1336,
    name: "Coleraine",
    image: {
      id: 5739,
      url: "https://crests.football-data.org/5739.png",
    },
  },
  {
    id: 1338,
    name: "Dundee United",
    image: {
      id: 5381,
      url: "https://crests.football-data.org/5381.svg",
    },
  },
  {
    id: 1341,
    name: "Hajduk Split",
    image: {
      id: 4447,
      url: "https://crests.football-data.org/4447.png",
    },
  },
  {
    id: 1345,
    name: "LASK",
    image: {
      id: 2016,
      url: "https://crests.football-data.org/2016.png",
    },
  },
  {
    id: 1348,
    name: "Portimonense",
    image: {
      id: 5601,
      url: "https://crests.football-data.org/5601.png",
    },
  },
  {
    id: 1349,
    name: "RFC Liège",
    image: {
      id: 3884,
      url: "https://crests.football-data.org/3884.png",
    },
  },
  {
    id: 1351,
    name: "St. Mirren",
    image: {
      id: 5387,
      url: "https://crests.football-data.org/5387.png",
    },
  },
  {
    id: 1356,
    name: "Dinamo Tbilisi",
    image: {
      id: 7482,
      url: "https://crests.football-data.org/7482.png",
    },
  },
  {
    id: 1365,
    name: "Glentoran",
    image: {
      id: 5743,
      url: "https://crests.football-data.org/5743.png",
    },
  },
  {
    id: 1366,
    name: "Grazer AK",
    image: {
      id: 7129,
      url: "https://crests.football-data.org/7129.png",
    },
  },
  {
    id: 1368,
    name: "IFK Norrköping",
    image: {
      id: 5286,
      url: "https://crests.football-data.org/5286.svg",
    },
  },
  {
    id: 1373,
    name: "Servette",
    image: {
      id: 5276,
      url: "https://crests.football-data.org/5276.png",
    },
  },
  {
    id: 1375,
    name: "Slavia Sofia",
    image: {
      id: 4401,
      url: null,
    },
  },
  {
    id: 1376,
    name: "Sochaux",
    image: {
      id: 517,
      url: "https://crests.football-data.org/517.png",
    },
  },
  {
    id: 1377,
    name: "Stal Mielec",
    image: {
      id: 5636,
      url: null,
    },
  },
  {
    id: 1385,
    name: "IFK Göteborg",
    image: {
      id: 5285,
      url: "https://crests.football-data.org/5285.png",
    },
  },
  {
    id: 1393,
    name: "Vasas",
    image: {
      id: 5960,
      url: "https://crests.football-data.org/5960.png",
    },
  },
  {
    id: 1396,
    name: "Adanaspor",
    image: {
      id: 5234,
      url: "https://crests.football-data.org/5234.png",
    },
  },
  {
    id: 1399,
    name: "BFC Dynamo",
    image: {
      id: 1825,
      url: "https://crests.football-data.org/1825.png",
    },
  },
  {
    id: 1400,
    name: "Brann",
    image: {
      id: 5730,
      url: "https://crests.football-data.org/5730.png",
    },
  },
  {
    id: 1402,
    name: "Cesena",
    image: {
      id: 591,
      url: "https://crests.football-data.org/591.png",
    },
  },
  {
    id: 1405,
    name: "Finn Harps",
    image: {
      id: 7645,
      url: null,
    },
  },
  {
    id: 1407,
    name: "Hibernian",
    image: {
      id: 5372,
      url: "https://crests.football-data.org/5372.png",
    },
  },
  {
    id: 1411,
    name: "Östers IF",
    image: {
      id: 5306,
      url: "https://crests.football-data.org/5306.png",
    },
  },
  {
    id: 1414,
    name: "Dunav Ruse",
    image: {
      id: 4378,
      url: null,
    },
  },
  {
    id: 1417,
    name: "GAIS",
    image: {
      id: 5295,
      url: "https://crests.football-data.org/5295.png",
    },
  },
  {
    id: 1422,
    name: "Aberdeen",
    image: {
      id: 5368,
      url: "https://crests.football-data.org/5368.png",
    },
  },
  {
    id: 1424,
    name: "Ararat",
    image: {
      id: 5433,
      url: null,
    },
  },
  {
    id: 1425,
    name: "BK Frem",
    image: {
      id: 6999,
      url: null,
    },
  },
  {
    id: 1435,
    name: "Ruch Chorzów",
    image: {
      id: 5641,
      url: "https://crests.football-data.org/5641.png",
    },
  },
  {
    id: 1450,
    name: "Club Tijuana",
    image: {
      id: 5788,
      url: "https://crests.football-data.org/5788.png",
    },
  },
  {
    id: 1474,
    name: "Peterhead",
    image: {
      id: 6899,
      url: null,
    },
  },
  {
    id: 1475,
    name: "Edinburgh City",
    image: {
      id: 6907,
      url: null,
    },
  },
  {
    id: 1476,
    name: "Clyde",
    image: {
      id: 6896,
      url: null,
    },
  },
  {
    id: 1477,
    name: "Annan Athletic",
    image: {
      id: 6901,
      url: null,
    },
  },
  {
    id: 1479,
    name: "Queen's Park",
    image: {
      id: 6908,
      url: null,
    },
  },
  {
    id: 1480,
    name: "Elgin City",
    image: {
      id: 6902,
      url: null,
    },
  },
  {
    id: 1481,
    name: "Cowdenbeath",
    image: {
      id: 6897,
      url: null,
    },
  },
  {
    id: 1482,
    name: "Albion Rovers",
    image: {
      id: 2289,
      url: null,
    },
  },
  {
    id: 1484,
    name: "Ross County",
    image: {
      id: 5377,
      url: "https://crests.football-data.org/5377.png",
    },
  },
  {
    id: 1486,
    name: "Ayr United",
    image: {
      id: 6909,
      url: null,
    },
  },
  {
    id: 1490,
    name: "Alloa Athletic",
    image: {
      id: 5388,
      url: null,
    },
  },
  {
    id: 1491,
    name: "Falkirk",
    image: {
      id: 5382,
      url: null,
    },
  },
  {
    id: 1503,
    name: "Kilmarnock",
    image: {
      id: 5373,
      url: "https://crests.football-data.org/5373.png",
    },
  },
  {
    id: 1504,
    name: "Livingston",
    image: {
      id: 5385,
      url: "https://crests.football-data.org/5385.png",
    },
  },
  {
    id: 1505,
    name: "St. Johnstone",
    image: {
      id: 5378,
      url: "https://crests.football-data.org/5378.png",
    },
  },
  {
    id: 1506,
    name: "Motherwell",
    image: {
      id: 5374,
      url: "https://crests.football-data.org/5374.png",
    },
  },
  {
    id: 1507,
    name: "Dumbarton",
    image: {
      id: 5380,
      url: null,
    },
  },
  {
    id: 1508,
    name: "Airdrieonians",
    image: {
      id: 5395,
      url: null,
    },
  },
  {
    id: 1509,
    name: "Stranraer",
    image: {
      id: 6913,
      url: null,
    },
  },
  {
    id: 1510,
    name: "Brechin City",
    image: {
      id: 6911,
      url: null,
    },
  },
  {
    id: 1512,
    name: "Montrose",
    image: {
      id: 5402,
      url: null,
    },
  },
  {
    id: 1514,
    name: "East Fife",
    image: {
      id: 5397,
      url: null,
    },
  },
  {
    id: 1515,
    name: "Stenhousemuir",
    image: {
      id: 6900,
      url: null,
    },
  },
  {
    id: 1519,
    name: "Cove Rangers",
    image: {
      id: 6905,
      url: null,
    },
  },
  {
    id: 1543,
    name: "Brescia",
    image: {
      id: 449,
      url: "https://crests.football-data.org/449.png",
    },
  },
  {
    id: 1700,
    name: "OFI",
    image: {
      id: 6135,
      url: null,
    },
  },
  {
    id: 1702,
    name: "Perugia",
    image: {
      id: 452,
      url: "https://crests.football-data.org/452.png",
    },
  },
  {
    id: 1703,
    name: "Guangzhou R&F",
    image: {
      id: 4417,
      url: "https://crests.football-data.org/4417.png",
    },
  },
  {
    id: 1816,
    name: "Feronikeli",
    image: {
      id: 8101,
      url: null,
    },
  },
  {
    id: 1820,
    name: "Arezzo",
    image: {
      id: 489,
      url: "https://crests.football-data.org/489.png",
    },
  },
  {
    id: 1918,
    name: "Valencia",
    image: {
      id: 95,
      url: "https://crests.football-data.org/95.svg",
    },
  },
  {
    id: 1986,
    name: "Boston United",
    image: {
      id: 1210,
      url: "",
    },
  },
  {
    id: 1987,
    name: "Dulwich Hamlet",
    image: {
      id: 1265,
      url: "",
    },
  },
  {
    id: 1989,
    name: "Kingstonian",
    image: {
      id: 1413,
      url: "",
    },
  },
  {
    id: 2008,
    name: "Flamengo",
    image: {
      id: 1783,
      url: "https://crests.football-data.org/1783.png",
    },
  },
  {
    id: 2024,
    name: "Honka",
    image: {
      id: 5114,
      url: "https://crests.football-data.org/5114.png",
    },
  },
  {
    id: 2025,
    name: "Kalmar FF",
    image: {
      id: 5288,
      url: "https://crests.football-data.org/5288.png",
    },
  },
  {
    id: 2035,
    name: "Southend Manor",
    image: {
      id: 1612,
      url: "",
    },
  },
  {
    id: 2092,
    name: "Le Havre",
    image: {
      id: 533,
      url: "https://crests.football-data.org/533.png",
    },
  },
  {
    id: 2101,
    name: "TOP Oss",
    image: {
      id: 1917,
      url: "https://crests.football-data.org/1917.png",
    },
  },
  {
    id: 2102,
    name: "De Graafschap",
    image: {
      id: 1913,
      url: "https://crests.football-data.org/1913.png",
    },
  },
  {
    id: 2115,
    name: "VV UNA",
    image: {
      id: 5765,
      url: "https://crests.football-data.org/5765.png",
    },
  },
  {
    id: 2118,
    name: "De Treffers",
    image: {
      id: 6980,
      url: "https://crests.football-data.org/6980.png",
    },
  },
  {
    id: 2120,
    name: "Holstein Kiel",
    image: {
      id: 720,
      url: "https://crests.football-data.org/720.png",
    },
  },
  {
    id: 2124,
    name: "Alanyaspor",
    image: {
      id: 5249,
      url: "https://crests.football-data.org/5249.png",
    },
  },
  {
    id: 2128,
    name: "Antalyaspor",
    image: {
      id: 605,
      url: "https://crests.football-data.org/605.png",
    },
  },
  {
    id: 2132,
    name: "BB Erzurumspor",
    image: {
      id: 5237,
      url: "https://crests.football-data.org/5237.png",
    },
  },
  {
    id: 2133,
    name: "Hatayspor",
    image: {
      id: 7314,
      url: "https://crests.football-data.org/7314.png",
    },
  },
  {
    id: 2134,
    name: "Monza",
    image: {
      id: 5911,
      url: "https://crests.football-data.org/5911.png",
    },
  },
  {
    id: 2135,
    name: "Vicenza Virtus",
    image: {
      id: 451,
      url: "https://crests.football-data.org/451.png",
    },
  },
  {
    id: 2137,
    name: "Frosinone",
    image: {
      id: 470,
      url: "https://crests.football-data.org/470.png",
    },
  },
  {
    id: 2156,
    name: "Altona 93",
    image: {
      id: 5967,
      url: null,
    },
  },
  {
    id: 2163,
    name: "VfB Oldenburg",
    image: {
      id: 6015,
      url: "https://crests.football-data.org/6015.png",
    },
  },
  {
    id: 2170,
    name: "Cercle Brugge",
    image: {
      id: 3939,
      url: "https://crests.football-data.org/3939.png",
    },
  },
  {
    id: 2171,
    name: "OH Leuven",
    image: {
      id: 3840,
      url: "https://crests.football-data.org/3840.png",
    },
  },
  {
    id: 2177,
    name: "Marine",
    image: {
      id: 6606,
      url: "https://crests.football-data.org/6606.png",
    },
  },
  {
    id: 2259,
    name: "Palmeiras",
    image: {
      id: 1769,
      url: "https://crests.football-data.org/1769.png",
    },
  },
  {
    id: 2308,
    name: "Kelty Hearts",
    image: {
      id: 5390,
      url: null,
    },
  },
  {
    id: 2312,
    name: "Mexico",
    image: {
      id: 769,
      url: "https://crests.football-data.org/769.svg",
    },
  },
  {
    id: 2319,
    name: "Bologna",
    image: {
      id: 103,
      url: "https://crests.football-data.org/103.png",
    },
  },
  {
    id: 2320,
    name: "RWDM",
    image: {
      id: 4200,
      url: null,
    },
  },
  {
    id: 2324,
    name: "Le Mans",
    image: {
      id: 535,
      url: "https://upload.wikimedia.org/wikipedia/en/5/57/Le_Mans_FC_logo.svg",
    },
  },
  {
    id: 2335,
    name: "Troyes",
    image: {
      id: 531,
      url: "https://crests.football-data.org/531.svg",
    },
  },
  {
    id: 2337,
    name: "Modena",
    image: {
      id: 460,
      url: "http://upload.wikimedia.org/wikipedia/de/7/70/FC_Modena.svg",
    },
  },
  {
    id: 2344,
    name: "Crotone",
    image: {
      id: 472,
      url: "https://crests.football-data.org/472.png",
    },
  },
  {
    id: 2351,
    name: "Giresunspor",
    image: {
      id: 5243,
      url: "https://crests.football-data.org/5243.png",
    },
  },
  {
    id: 2439,
    name: "Alessandria",
    image: {
      id: 5889,
      url: "https://crests.football-data.org/5889.png",
    },
  },
  {
    id: 2443,
    name: "Horsham",
    image: {
      id: 1550,
      url: "https://crests.football-data.org/1550.png",
    },
  },
  {
    id: 2446,
    name: "Halifax Town",
    image: {
      id: 1149,
      url: "https://crests.football-data.org/1149.png",
    },
  },
  {
    id: 2520,
    name: "Vélez",
    image: {
      id: 2078,
      url: "https://crests.football-data.org/2078.png",
    },
  },
  {
    id: 2544,
    name: "Platense",
    image: {
      id: 7580,
      url: "https://crests.football-data.org/7580.png",
    },
  },
  {
    id: 2552,
    name: "Bodø/Glimt",
    image: {
      id: 5721,
      url: "https://crests.football-data.org/5721.png",
    },
  },
  {
    id: 2553,
    name: "Flora",
    image: {
      id: 5100,
      url: "https://crests.football-data.org/5100.png",
    },
  },
  {
    id: 2560,
    name: "Bonnyrigg Rose",
    image: {
      id: 7552,
      url: null,
    },
  },
  {
    id: 2576,
    name: "Gamba Osaka",
    image: {
      id: 5851,
      url: "https://crests.football-data.org/5851.png",
    },
  },
  {
    id: 2581,
    name: "Bohemians 1905",
    image: {
      id: 4469,
      url: "https://crests.football-data.org/4469.png",
    },
  },
  {
    id: 2583,
    name: "Valenciennes",
    image: {
      id: 515,
      url: "https://crests.football-data.org/515.png",
    },
  },
  {
    id: 2584,
    name: "Paris FC",
    image: {
      id: 1045,
      url: "https://crests.football-data.org/1045.png",
    },
  },
  {
    id: 2585,
    name: "Salernitana",
    image: {
      id: 455,
      url: "https://crests.football-data.org/455.png",
    },
  },
  {
    id: 2593,
    name: "Sigma Olomouc",
    image: {
      id: 4480,
      url: null,
    },
  },
  {
    id: 2595,
    name: "Zalaegerszeg",
    image: {
      id: 6131,
      url: "https://crests.football-data.org/6131.png",
    },
  },
  {
    id: 2600,
    name: "Pumas UNAM",
    image: {
      id: 5796,
      url: "https://crests.football-data.org/5796.png",
    },
  },
  {
    id: 2604,
    name: "Empoli",
    image: {
      id: 445,
      url: "https://crests.football-data.org/445.png",
    },
  },
  {
    id: 2605,
    name: "Atlas",
    image: {
      id: 5771,
      url: "https://crests.football-data.org/5771.png",
    },
  },
  {
    id: 2631,
    name: "Qatar",
    image: {
      id: 8030,
      url: "https://crests.football-data.org/8030.svg",
    },
  },
  {
    id: 2654,
    name: "Jamaica",
    image: {
      id: 819,
      url: "https://crests.football-data.org/jamaica.svg",
    },
  },
  {
    id: 2659,
    name: "Pyunik",
    image: {
      id: 7497,
      url: "https://crests.football-data.org/7497.png",
    },
  },
  {
    id: 2722,
    name: "Alvechurch",
    image: {
      id: 1510,
      url: "https://crests.football-data.org/1510.png",
    },
  },
  {
    id: 2724,
    name: "Merthyr Town",
    image: {
      id: 1225,
      url: "https://crests.football-data.org/1225.png",
    },
  },
  {
    id: 2725,
    name: "Weymouth",
    image: {
      id: 1178,
      url: "https://crests.football-data.org/1178.png",
    },
  },
  {
    id: 2765,
    name: "Colo-Colo",
    image: {
      id: 4410,
      url: "https://crests.football-data.org/4410.png",
    },
  },
  {
    id: 2783,
    name: "Vietnam",
    image: {
      id: 8060,
      url: "https://crests.football-data.org/vietnam.svg",
    },
  },
  {
    id: 2787,
    name: "Botafogo",
    image: {
      id: 1770,
      url: "https://crests.football-data.org/1770.png",
    },
  },
  {
    id: 2790,
    name: "Millonarios",
    image: {
      id: 4444,
      url: "https://crests.football-data.org/4444.png",
    },
  },
  {
    id: 2796,
    name: "Barking",
    image: {
      id: 1445,
      url: "",
    },
  },
  {
    id: 2798,
    name: "Burscough",
    image: {
      id: 6531,
      url: null,
    },
  },
  {
    id: 2799,
    name: "Croydon",
    image: {
      id: 1675,
      url: "",
    },
  },
  {
    id: 2801,
    name: "Fareham Town",
    image: {
      id: 6351,
      url: null,
    },
  },
  {
    id: 2808,
    name: "Scarborough",
    image: {
      id: 6555,
      url: null,
    },
  },
  {
    id: 2811,
    name: "Bideford",
    image: {
      id: 6547,
      url: null,
    },
  },
  {
    id: 2815,
    name: "Grantham Town",
    image: {
      id: 1312,
      url: "",
    },
  },
  {
    id: 2821,
    name: "Runcorn Town",
    image: {
      id: 6399,
      url: null,
    },
  },
  {
    id: 2828,
    name: "Vasco da Gama",
    image: {
      id: 1780,
      url: "https://crests.football-data.org/1780.png",
    },
  },
  {
    id: 4076,
    name: "Cerezo Osaka",
    image: {
      id: 5864,
      url: "https://crests.football-data.org/5864.png",
    },
  },
  {
    id: 5710,
    name: "Annecy",
    image: {
      id: 6208,
      url: "https://crests.football-data.org/6208.png",
    },
  },
  {
    id: 5712,
    name: "Châteauroux",
    image: {
      id: 539,
      url: "https://crests.football-data.org/539.png",
    },
  },
  {
    id: 5713,
    name: "Grenoble",
    image: {
      id: 6242,
      url: "https://crests.football-data.org/6242.png",
    },
  },
  {
    id: 5719,
    name: "Lorient",
    image: {
      id: 525,
      url: "https://crests.football-data.org/525.png",
    },
  },
  {
    id: 5813,
    name: "Russia",
    image: {
      id: 808,
      url: "https://crests.football-data.org/808.svg",
    },
  },
  {
    id: 5853,
    name: "Worthing",
    image: {
      id: 1218,
      url: "https://crests.football-data.org/1218.png",
    },
  },
  {
    id: 5854,
    name: "Ramsgate",
    image: {
      id: 1398,
      url: "https://crests.football-data.org/1398.png",
    },
  },
  {
    id: 5975,
    name: "Whitby Town",
    image: {
      id: 1292,
      url: "",
    },
  },
  {
    id: 16387,
    name: "FC Kufstein",
    image: {
      id: 2642,
      url: null,
    },
  },
  {
    id: 30648,
    name: "Threave Rovers",
    image: {
      id: 6865,
      url: null,
    },
  },
  {
    id: 30649,
    name: "Lossiemouth",
    image: {
      id: 6886,
      url: null,
    },
  },
  {
    id: 30656,
    name: "Brora Rangers",
    image: {
      id: 6895,
      url: null,
    },
  },
  {
    id: 30675,
    name: "Beith Juniors",
    image: {
      id: 7553,
      url: null,
    },
  },
  {
    id: 30676,
    name: "Wick Academy",
    image: {
      id: 6883,
      url: null,
    },
  },
  {
    id: 30677,
    name: "Buckie Thistle",
    image: {
      id: 6906,
      url: null,
    },
  },
  {
    id: 30678,
    name: "Clachnacuddin",
    image: {
      id: 6894,
      url: null,
    },
  },
  {
    id: 30680,
    name: "Banks O'Dee",
    image: {
      id: 6860,
      url: null,
    },
  },
  {
    id: 30681,
    name: "Rothes",
    image: {
      id: 6884,
      url: null,
    },
  },
  {
    id: 30682,
    name: "Nairn County",
    image: {
      id: 6885,
      url: null,
    },
  },
  {
    id: 30683,
    name: "Fraserburgh",
    image: {
      id: 6890,
      url: null,
    },
  },
  {
    id: 30684,
    name: "Keith",
    image: {
      id: 6887,
      url: null,
    },
  },
  {
    id: 30685,
    name: "East Kilbride",
    image: {
      id: 6904,
      url: null,
    },
  },
  {
    id: 30690,
    name: "Huntly",
    image: {
      id: 6889,
      url: null,
    },
  },
  {
    id: 30698,
    name: "Deveronvale",
    image: {
      id: 6893,
      url: null,
    },
  },
  {
    id: 30738,
    name: "Mohun Bagan",
    image: {
      id: 5937,
      url: null,
    },
  },
  {
    id: 49,
    name: "FC Barcelona",
    image: {
      id: 81,
      url: "https://crests.football-data.org/81.svg",
    },
  },
  {
    id: 50,
    name: "Bayer 04 Leverkusen",
    image: {
      id: 3,
      url: "https://crests.football-data.org/3.png",
    },
  },
  {
    id: 52,
    name: "Borussia Dortmund",
    image: {
      id: 4,
      url: "https://crests.football-data.org/4.png",
    },
  },
  {
    id: 56,
    name: "FC Bayern München",
    image: {
      id: 5,
      url: "https://crests.football-data.org/5.svg",
    },
  },
  {
    id: 57,
    name: "FC København",
    image: {
      id: 1876,
      url: "https://crests.football-data.org/1876.png",
    },
  },
  {
    id: 58,
    name: "FC Porto",
    image: {
      id: 503,
      url: "https://crests.football-data.org/503.png",
    },
  },
  {
    id: 59,
    name: "FC Schalke 04",
    image: {
      id: 6,
      url: "https://crests.football-data.org/6.png",
    },
  },
  {
    id: 60,
    name: "FK Austria Wien",
    image: {
      id: 2020,
      url: "https://crests.football-data.org/2020.png",
    },
  },
  {
    id: 70,
    name: "RSC Anderlecht",
    image: {
      id: 726,
      url: "https://crests.football-data.org/726.png",
    },
  },
  {
    id: 84,
    name: "Eintracht Frankfurt",
    image: {
      id: 19,
      url: "https://crests.football-data.org/19.svg",
    },
  },
  {
    id: 85,
    name: "Esbjerg fB",
    image: {
      id: 4494,
      url: null,
    },
  },
  {
    id: 87,
    name: "FC Red Bull Salzburg",
    image: {
      id: 1877,
      url: "https://crests.football-data.org/1877.png",
    },
  },
  {
    id: 88,
    name: "FC St. Gallen",
    image: {
      id: 5269,
      url: "https://crests.football-data.org/5269.png",
    },
  },
  {
    id: 89,
    name: "FC Thun",
    image: {
      id: 1003,
      url: "https://crests.football-data.org/1003.png",
    },
  },
  {
    id: 91,
    name: "HNK Rijeka",
    image: {
      id: 1893,
      url: "https://crests.football-data.org/1893.png",
    },
  },
  {
    id: 101,
    name: "NK Maribor",
    image: {
      id: 734,
      url: "https://crests.football-data.org/734.png",
    },
  },
  {
    id: 111,
    name: "SK Rapid Wien",
    image: {
      id: 2014,
      url: "https://crests.football-data.org/2014.png",
    },
  },
  {
    id: 118,
    name: "Valencia CF",
    image: {
      id: 95,
      url: "https://crests.football-data.org/95.svg",
    },
  },
  {
    id: 150,
    name: "FC Halifax Town",
    image: {
      id: 1149,
      url: "https://crests.football-data.org/1149.png",
    },
  },
  {
    id: 199,
    name: "Athletic Club",
    image: {
      id: 77,
      url: "https://crests.football-data.org/77.png",
    },
  },
  {
    id: 205,
    name: "AFC Fylde",
    image: {
      id: 1243,
      url: "https://crests.football-data.org/1243.png",
    },
  },
  {
    id: 206,
    name: "AFC Telford United",
    image: {
      id: 1229,
      url: "",
    },
  },
  {
    id: 212,
    name: "Chester FC",
    image: {
      id: 1112,
      url: "https://crests.football-data.org/1112.png",
    },
  },
  {
    id: 226,
    name: "Aalborg BK",
    image: {
      id: 946,
      url: "https://crests.football-data.org/946.png",
    },
  },
  {
    id: 230,
    name: "Borussia Mönchengladbach",
    image: {
      id: 18,
      url: "https://crests.football-data.org/18.png",
    },
  },
  {
    id: 231,
    name: "BSC Young Boys",
    image: {
      id: 1871,
      url: "https://crests.football-data.org/1871.png",
    },
  },
  {
    id: 237,
    name: "FK Krasnodar",
    image: {
      id: 5452,
      url: "https://crests.football-data.org/5452.png",
    },
  },
  {
    id: 252,
    name: "VfL Wolfsburg",
    image: {
      id: 11,
      url: "https://crests.football-data.org/11.svg",
    },
  },
  {
    id: 257,
    name: "FC United of Manchester",
    image: {
      id: 4622,
      url: null,
    },
  },
  {
    id: 333,
    name: "AFC Bournemouth",
    image: {
      id: 1044,
      url: "https://crests.football-data.org/1044.png",
    },
  },
  {
    id: 362,
    name: "FC Augsburg",
    image: {
      id: 16,
      url: "https://crests.football-data.org/16.png",
    },
  },
  {
    id: 363,
    name: "FC Groningen",
    image: {
      id: 677,
      url: "https://crests.football-data.org/677.png",
    },
  },
  {
    id: 364,
    name: "FC Midtjylland",
    image: {
      id: 4485,
      url: "https://crests.football-data.org/4485.png",
    },
  },
  {
    id: 365,
    name: "FC Sion",
    image: {
      id: 5268,
      url: "https://crests.football-data.org/5268.png",
    },
  },
  {
    id: 376,
    name: "Borussia Mönchengladbach II",
    image: {
      id: 5969,
      url: "https://crests.football-data.org/5969.png",
    },
  },
  {
    id: 431,
    name: "VfL Wolfsburg II",
    image: {
      id: 6016,
      url: null,
    },
  },
  {
    id: 445,
    name: "1. FSV Mainz 05",
    image: {
      id: 15,
      url: "https://crests.football-data.org/15.png",
    },
  },
  {
    id: 458,
    name: "VfB Stuttgart",
    image: {
      id: 10,
      url: "https://crests.football-data.org/10.png",
    },
  },
  {
    id: 463,
    name: "Hannover 96",
    image: {
      id: 8,
      url: "https://crests.football-data.org/8.png",
    },
  },
  {
    id: 465,
    name: "Helsingborgs IF",
    image: {
      id: 5298,
      url: "https://crests.football-data.org/5298.png",
    },
  },
  {
    id: 505,
    name: "Brøndby IF",
    image: {
      id: 4483,
      url: "https://crests.football-data.org/4483.png",
    },
  },
  {
    id: 511,
    name: "Randers FC",
    image: {
      id: 4490,
      url: "https://crests.football-data.org/4490.png",
    },
  },
  {
    id: 513,
    name: "SV Werder Bremen",
    image: {
      id: 12,
      url: "https://crests.football-data.org/12.svg",
    },
  },
  {
    id: 515,
    name: "AFC Totton",
    image: {
      id: 1504,
      url: "",
    },
  },
  {
    id: 523,
    name: "Urawa Red Diamonds",
    image: {
      id: 5859,
      url: "https://crests.football-data.org/5859.png",
    },
  },
  {
    id: 527,
    name: "Western Sydney Wanderers FC",
    image: {
      id: 1831,
      url: "https://crests.football-data.org/1831.png",
    },
  },
  {
    id: 535,
    name: "FC Rot-Weiß Erfurt",
    image: {
      id: 2009,
      url: "https://crests.football-data.org/2009.png",
    },
  },
  {
    id: 536,
    name: "Rot-Weiss Essen",
    image: {
      id: 2002,
      url: "https://crests.football-data.org/2002.png",
    },
  },
  {
    id: 538,
    name: "FC Lugano",
    image: {
      id: 5265,
      url: "https://crests.football-data.org/5265.png",
    },
  },
  {
    id: 540,
    name: "1. FC Nürnberg",
    image: {
      id: 14,
      url: "https://crests.football-data.org/14.png",
    },
  },
  {
    id: 542,
    name: "FSV Zwickau",
    image: {
      id: 198,
      url: "https://crests.football-data.org/198.png",
    },
  },
  {
    id: 543,
    name: "VfL Bochum 1848",
    image: {
      id: 36,
      url: "https://crests.football-data.org/36.png",
    },
  },
  {
    id: 549,
    name: "Philadelphia Union",
    image: {
      id: 1796,
      url: "",
    },
  },
  {
    id: 551,
    name: "Seattle Sounders FC",
    image: {
      id: 7464,
      url: "https://crests.football-data.org/7464.png",
    },
  },
  {
    id: 553,
    name: "TSG 1899 Hoffenheim",
    image: {
      id: 2,
      url: "https://crests.football-data.org/2.png",
    },
  },
  {
    id: 555,
    name: "Columbus Crew SC",
    image: {
      id: 7460,
      url: "https://crests.football-data.org/7460.png",
    },
  },
  {
    id: 556,
    name: "Orlando City SC",
    image: {
      id: 7468,
      url: "https://crests.football-data.org/7468.png",
    },
  },
  {
    id: 563,
    name: "Portland Timbers",
    image: {
      id: 1798,
      url: "",
    },
  },
  {
    id: 564,
    name: "FC Eindhoven",
    image: {
      id: 1918,
      url: "https://crests.football-data.org/1918.png",
    },
  },
  {
    id: 565,
    name: "Toronto FC",
    image: {
      id: 1785,
      url: "https://crests.football-data.org/1785.png",
    },
  },
  {
    id: 567,
    name: "ADO Den Haag",
    image: {
      id: 680,
      url: "https://crests.football-data.org/680.png",
    },
  },
  {
    id: 569,
    name: "SC Paderborn 07",
    image: {
      id: 29,
      url: "https://crests.football-data.org/29.png",
    },
  },
  {
    id: 582,
    name: "FC Liefering",
    image: {
      id: 2024,
      url: "https://crests.football-data.org/2024.png",
    },
  },
  {
    id: 583,
    name: "Atlanta United FC",
    image: {
      id: 7470,
      url: "https://crests.football-data.org/7470.png",
    },
  },
  {
    id: 586,
    name: "FK Jablonec",
    image: {
      id: 4476,
      url: null,
    },
  },
  {
    id: 587,
    name: "New York City FC",
    image: {
      id: 7469,
      url: "https://crests.football-data.org/7469.png",
    },
  },
  {
    id: 590,
    name: "New England Revolution",
    image: {
      id: 7453,
      url: "https://crests.football-data.org/7453.png",
    },
  },
  {
    id: 591,
    name: "Sporting Kansas City",
    image: {
      id: 7455,
      url: "https://crests.football-data.org/7455.png",
    },
  },
  {
    id: 592,
    name: "San Jose Earthquakes",
    image: {
      id: 7463,
      url: "https://crests.football-data.org/7463.png",
    },
  },
  {
    id: 599,
    name: "New York Red Bulls",
    image: {
      id: 7462,
      url: "https://crests.football-data.org/7462.png",
    },
  },
  {
    id: 601,
    name: "Jönköpings Södra IF",
    image: {
      id: 5302,
      url: null,
    },
  },
  {
    id: 605,
    name: "Colorado Rapids",
    image: {
      id: 1803,
      url: "",
    },
  },
  {
    id: 608,
    name: "Minnesota United FC",
    image: {
      id: 7467,
      url: "https://crests.football-data.org/7467.png",
    },
  },
  {
    id: 610,
    name: "Vancouver Whitecaps FC",
    image: {
      id: 4406,
      url: "https://crests.football-data.org/4406.png",
    },
  },
  {
    id: 615,
    name: "SDC Putten",
    image: {
      id: 6939,
      url: null,
    },
  },
  {
    id: 644,
    name: "FC Bayern München II",
    image: {
      id: 5974,
      url: "https://crests.football-data.org/5974.png",
    },
  },
  {
    id: 677,
    name: "Östersunds FK",
    image: {
      id: 5290,
      url: "https://crests.football-data.org/5290.png",
    },
  },
  {
    id: 681,
    name: "AG Caennaise",
    image: {
      id: 7683,
      url: null,
    },
  },
  {
    id: 696,
    name: "AFC Hornchurch",
    image: {
      id: 1326,
      url: "",
    },
  },
  {
    id: 709,
    name: "Hereford FC",
    image: {
      id: 372,
      url: "https://crests.football-data.org/372.png",
    },
  },
  {
    id: 727,
    name: "Sparta Rotterdam",
    image: {
      id: 6806,
      url: "https://crests.football-data.org/6806.png",
    },
  },
  {
    id: 730,
    name: "SG Sonnenhof Großaspach",
    image: {
      id: 741,
      url: "http://upload.wikimedia.org/wikipedia/de/1/1d/SG_Sonnenhof.svg",
    },
  },
  {
    id: 736,
    name: "Lyngby BK",
    image: {
      id: 4488,
      url: "https://crests.football-data.org/4488.png",
    },
  },
  {
    id: 749,
    name: "Hamburger SV",
    image: {
      id: 7,
      url: "https://crests.football-data.org/7.png",
    },
  },
  {
    id: 771,
    name: "Granada CF",
    image: {
      id: 83,
      url: "https://crests.football-data.org/83.svg",
    },
  },
  {
    id: 787,
    name: "Real Madrid Castilla",
    image: {
      id: 289,
      url: "http://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    },
  },
  {
    id: 822,
    name: "Pontevedra CF",
    image: {
      id: 5332,
      url: "https://crests.football-data.org/5332.png",
    },
  },
  {
    id: 839,
    name: "Extremadura UD",
    image: {
      id: 7396,
      url: "https://upload.wikimedia.org/wikipedia/en/a/ab/Extremadura_UD.png",
    },
  },
  {
    id: 860,
    name: "CD Ebro",
    image: {
      id: 7439,
      url: null,
    },
  },
  {
    id: 869,
    name: "Mérida AD",
    image: {
      id: 270,
      url: "https://crests.football-data.org/270.png",
    },
  },
  {
    id: 889,
    name: "Sanfrecce Hiroshima",
    image: {
      id: 5856,
      url: "https://crests.football-data.org/5856.png",
    },
  },
  {
    id: 899,
    name: "Kashima Antlers",
    image: {
      id: 5865,
      url: "https://crests.football-data.org/5865.png",
    },
  },
  {
    id: 928,
    name: "FC Dordrecht",
    image: {
      id: 1908,
      url: "https://crests.football-data.org/1908.png",
    },
  },
  {
    id: 929,
    name: "Heracles Almelo",
    image: {
      id: 671,
      url: "https://crests.football-data.org/671.png",
    },
  },
  {
    id: 940,
    name: "PEC Zwolle",
    image: {
      id: 684,
      url: "https://crests.football-data.org/684.png",
    },
  },
  {
    id: 942,
    name: "RKC Waalwijk",
    image: {
      id: 683,
      url: "https://crests.football-data.org/683.png",
    },
  },
  {
    id: 944,
    name: "SG Dynamo Dresden",
    image: {
      id: 35,
      url: "https://crests.football-data.org/35.svg",
    },
  },
  {
    id: 954,
    name: "FC Nordsjælland",
    image: {
      id: 4486,
      url: "https://crests.football-data.org/4486.png",
    },
  },
  {
    id: 959,
    name: "Otelul Galati",
    image: {
      id: 704,
      url: "https://crests.football-data.org/704.png",
    },
  },
  {
    id: 976,
    name: "CD Calahorra",
    image: {
      id: 5314,
      url: null,
    },
  },
  {
    id: 989,
    name: "Ferencvárosi TC",
    image: {
      id: 5954,
      url: "https://crests.football-data.org/5954.png",
    },
  },
  {
    id: 999,
    name: "FC Emmen",
    image: {
      id: 1914,
      url: "https://crests.football-data.org/1914.png",
    },
  },
  {
    id: 1058,
    name: "AD Unión Adarve",
    image: {
      id: 7122,
      url: "https://crests.football-data.org/7122.png",
    },
  },
  {
    id: 1063,
    name: "Club Rápido de Bouzas",
    image: {
      id: 6857,
      url: null,
    },
  },
  {
    id: 1070,
    name: "UD San Fernando",
    image: {
      id: 5342,
      url: null,
    },
  },
  {
    id: 1125,
    name: "1. FC Union Berlin",
    image: {
      id: 28,
      url: "https://crests.football-data.org/28.svg",
    },
  },
  {
    id: 1129,
    name: "Brisbane Roar FC",
    image: {
      id: 1826,
      url: "https://crests.football-data.org/1826.png",
    },
  },
  {
    id: 1130,
    name: "Çaykur Rizespor",
    image: {
      id: 5239,
      url: "https://crests.football-data.org/5239.png",
    },
  },
  {
    id: 1137,
    name: "FC Erzgebirge Aue",
    image: {
      id: 22,
      url: "https://crests.football-data.org/22.png",
    },
  },
  {
    id: 1139,
    name: "Karlsruher SC",
    image: {
      id: 32,
      url: "https://crests.football-data.org/32.png",
    },
  },
  {
    id: 1146,
    name: "Melbourne City FC",
    image: {
      id: 6801,
      url: "https://crests.football-data.org/6801.png",
    },
  },
  {
    id: 1153,
    name: "SV Grödig",
    image: {
      id: 2580,
      url: null,
    },
  },
  {
    id: 1154,
    name: "SV Mattersburg",
    image: {
      id: 2015,
      url: null,
    },
  },
  {
    id: 1155,
    name: "SV Meppen",
    image: {
      id: 6308,
      url: "https://crests.football-data.org/6308.png",
    },
  },
  {
    id: 1156,
    name: "SV Wehen Wiesbaden",
    image: {
      id: 39,
      url: "https://crests.football-data.org/39.png",
    },
  },
  {
    id: 1157,
    name: "TSV 1860 München",
    image: {
      id: 26,
      url: "https://crests.football-data.org/26.png",
    },
  },
  {
    id: 1162,
    name: "Fortuna Sittard",
    image: {
      id: 1920,
      url: "https://crests.football-data.org/1920.png",
    },
  },
  {
    id: 1184,
    name: "FC Wil 1900",
    image: {
      id: 5270,
      url: null,
    },
  },
  {
    id: 1244,
    name: "VfL Osnabrück",
    image: {
      id: 7418,
      url: "https://crests.football-data.org/7418.png",
    },
  },
  {
    id: 1249,
    name: "AF Virois",
    image: {
      id: 6157,
      url: null,
    },
  },
  {
    id: 1251,
    name: "Alemannia Aachen",
    image: {
      id: 27,
      url: "https://crests.football-data.org/27.png",
    },
  },
  {
    id: 1293,
    name: "Afjet Afyonspor",
    image: {
      id: 7315,
      url: null,
    },
  },
  {
    id: 1299,
    name: "KR Reykjavík",
    image: {
      id: 5947,
      url: "https://crests.football-data.org/5947.png",
    },
  },
  {
    id: 1306,
    name: "V-Varen Nagasaki",
    image: {
      id: 5860,
      url: null,
    },
  },
  {
    id: 1310,
    name: "1. FC Kaiserslautern",
    image: {
      id: 13,
      url: "https://crests.football-data.org/13.png",
    },
  },
  {
    id: 1320,
    name: "Omonia Nicosia",
    image: {
      id: 910,
      url: "https://crests.football-data.org/910.png",
    },
  },
  {
    id: 1322,
    name: "Roda JC Kerkrade",
    image: {
      id: 665,
      url: "https://crests.football-data.org/665.png",
    },
  },
  {
    id: 1324,
    name: "SC Farense",
    image: {
      id: 5602,
      url: "https://crests.football-data.org/5602.png",
    },
  },
  {
    id: 1325,
    name: "Silkeborg IF",
    image: {
      id: 4491,
      url: "https://crests.football-data.org/4491.png",
    },
  },
  {
    id: 1327,
    name: "Viking FK",
    image: {
      id: 5720,
      url: "https://crests.football-data.org/5720.png",
    },
  },
  {
    id: 1340,
    name: "FC Wacker Innsbruck",
    image: {
      id: 2026,
      url: "https://crests.football-data.org/2026.png",
    },
  },
  {
    id: 1350,
    name: "Sportul Studentesc",
    image: {
      id: 702,
      url: "",
    },
  },
  {
    id: 1357,
    name: "FC Carl Zeiss Jena",
    image: {
      id: 49,
      url: "https://crests.football-data.org/49.png",
    },
  },
  {
    id: 1359,
    name: "FC Tatabánya",
    image: {
      id: 7592,
      url: null,
    },
  },
  {
    id: 1361,
    name: "FC Utrecht",
    image: {
      id: 676,
      url: "https://crests.football-data.org/676.png",
    },
  },
  {
    id: 1362,
    name: "FK Sarajevo",
    image: {
      id: 4275,
      url: "https://crests.football-data.org/4275.svg",
    },
  },
  {
    id: 1369,
    name: "IK Brage",
    image: {
      id: 5300,
      url: null,
    },
  },
  {
    id: 1379,
    name: "1. FC Magdeburg",
    image: {
      id: 1054,
      url: "https://crests.football-data.org/1054.png",
    },
  },
  {
    id: 1391,
    name: "RWD Molenbeek",
    image: {
      id: 4200,
      url: null,
    },
  },
  {
    id: 1403,
    name: "Eintracht Braunschweig",
    image: {
      id: 33,
      url: "https://crests.football-data.org/33.png",
    },
  },
  {
    id: 1406,
    name: "GKS Tychy",
    image: {
      id: 7077,
      url: null,
    },
  },
  {
    id: 1408,
    name: "Hibernians FC",
    image: {
      id: 1892,
      url: "https://crests.football-data.org/1892.png",
    },
  },
  {
    id: 1429,
    name: "Hvidovre IF",
    image: {
      id: 6998,
      url: "https://crests.football-data.org/6998.png",
    },
  },
  {
    id: 1440,
    name: "Valletta FC",
    image: {
      id: 5813,
      url: "https://crests.football-data.org/5813.png",
    },
  },
  {
    id: 1532,
    name: "Kristiansund BK",
    image: {
      id: 5724,
      url: "https://crests.football-data.org/5724.png",
    },
  },
  {
    id: 1533,
    name: "Atlético San Luis",
    image: {
      id: 5772,
      url: "https://crests.football-data.org/5772.png",
    },
  },
  {
    id: 1540,
    name: "SV Darmstadt 98",
    image: {
      id: 55,
      url: "https://crests.football-data.org/55.png",
    },
  },
  {
    id: 1709,
    name: "SC Preußen Münster",
    image: {
      id: 6307,
      url: "https://crests.football-data.org/6307.png",
    },
  },
  {
    id: 1961,
    name: "FC Energie Cottbus",
    image: {
      id: 23,
      url: "https://upload.wikimedia.org/wikipedia/en/1/12/Fcenergie.png",
    },
  },
  {
    id: 2016,
    name: "Adana Demirspor",
    image: {
      id: 5233,
      url: "https://crests.football-data.org/5233.png",
    },
  },
  {
    id: 2018,
    name: "AC Bellinzona",
    image: {
      id: 7316,
      url: null,
    },
  },
  {
    id: 2023,
    name: "FC Vaslui",
    image: {
      id: 689,
      url: null,
    },
  },
  {
    id: 2046,
    name: "Debreceni VSC",
    image: {
      id: 5952,
      url: "https://crests.football-data.org/5952.png",
    },
  },
  {
    id: 2094,
    name: "Go Ahead Eagles",
    image: {
      id: 718,
      url: "https://crests.football-data.org/718.png",
    },
  },
  {
    id: 2095,
    name: "FC Den Bosch",
    image: {
      id: 1916,
      url: "https://crests.football-data.org/1916.png",
    },
  },
  {
    id: 2096,
    name: "Almere City FC",
    image: {
      id: 1911,
      url: "https://crests.football-data.org/1911.png",
    },
  },
  {
    id: 2098,
    name: "Jong FC Utrecht",
    image: {
      id: 1924,
      url: "https://crests.football-data.org/1924.png",
    },
  },
  {
    id: 2099,
    name: "NAC Breda",
    image: {
      id: 681,
      url: "https://crests.football-data.org/681.png",
    },
  },
  {
    id: 2100,
    name: "FC Volendam",
    image: {
      id: 1919,
      url: "https://crests.football-data.org/1919.png",
    },
  },
  {
    id: 2114,
    name: "MVV Maastricht",
    image: {
      id: 1910,
      url: "https://crests.football-data.org/1910.png",
    },
  },
  {
    id: 2116,
    name: "SC Verl",
    image: {
      id: 5994,
      url: "https://crests.football-data.org/5994.png",
    },
  },
  {
    id: 2117,
    name: "KFC Uerdingen 05",
    image: {
      id: 5990,
      url: "https://crests.football-data.org/5990.svg",
    },
  },
  {
    id: 2147,
    name: "SC Weiche Flensburg 08",
    image: {
      id: 1994,
      url: "https://crests.football-data.org/1994.png",
    },
  },
  {
    id: 2151,
    name: "Hamburger SV II",
    image: {
      id: 5988,
      url: "https://crests.football-data.org/5988.png",
    },
  },
  {
    id: 2152,
    name: "SV Drochtersen/Assel",
    image: {
      id: 1089,
      url: "https://crests.football-data.org/1089.png",
    },
  },
  {
    id: 2153,
    name: "Lüneburger SK Hansa",
    image: {
      id: 2005,
      url: null,
    },
  },
  {
    id: 2155,
    name: "Holstein Kiel II",
    image: {
      id: 7301,
      url: "https://crests.football-data.org/7301.png",
    },
  },
  {
    id: 2158,
    name: "TSV Havelse",
    image: {
      id: 6011,
      url: "https://crests.football-data.org/6011.png",
    },
  },
  {
    id: 2159,
    name: "BSV Schwarz-Weiß Rehden",
    image: {
      id: 5970,
      url: "https://crests.football-data.org/5970.png",
    },
  },
  {
    id: 2160,
    name: "SV Werder Bremen II",
    image: {
      id: 6309,
      url: "https://crests.football-data.org/6309.png",
    },
  },
  {
    id: 2161,
    name: "Hannover 96 II",
    image: {
      id: 7289,
      url: "https://crests.football-data.org/7289.png",
    },
  },
  {
    id: 2162,
    name: "SSV Jeddeloh II",
    image: {
      id: 1995,
      url: "https://crests.football-data.org/1995.png",
    },
  },
  {
    id: 2164,
    name: "FC Oberneuland",
    image: {
      id: 8097,
      url: "https://crests.football-data.org/8097.png",
    },
  },
  {
    id: 2167,
    name: "SV Atlas Delmenhorst",
    image: {
      id: 8098,
      url: "https://crests.football-data.org/8098.png",
    },
  },
  {
    id: 2172,
    name: "KV Kortrijk",
    image: {
      id: 1859,
      url: "https://crests.football-data.org/1859.png",
    },
  },
  {
    id: 2173,
    name: "KV Oostende",
    image: {
      id: 1862,
      url: "https://crests.football-data.org/1862.png",
    },
  },
  {
    id: 2176,
    name: "Royal Excel Mouscron",
    image: {
      id: 1865,
      url: "https://crests.football-data.org/1865.png",
    },
  },
  {
    id: 2323,
    name: "Koninklijke HFC",
    image: {
      id: 6974,
      url: "https://crests.football-data.org/6974.png",
    },
  },
  {
    id: 2343,
    name: "Red Star FC",
    image: {
      id: 567,
      url: "https://crests.football-data.org/567.png",
    },
  },
  {
    id: 2440,
    name: "SKU Ertl Glas Amstetten",
    image: {
      id: 3548,
      url: "https://crests.football-data.org/3548.png",
    },
  },
  {
    id: 2444,
    name: "AFC Sudbury",
    image: {
      id: 1269,
      url: "",
    },
  },
  {
    id: 2540,
    name: "First Vienna FC 1894",
    image: {
      id: 2572,
      url: "https://crests.football-data.org/2572.png",
    },
  },
  {
    id: 2545,
    name: "FC Juniors OÖ",
    image: {
      id: 7126,
      url: null,
    },
  },
  {
    id: 2568,
    name: "ZFC Meuselwitz",
    image: {
      id: 6021,
      url: "https://crests.football-data.org/6021.png",
    },
  },
  {
    id: 2577,
    name: "Kawasaki Frontale",
    image: {
      id: 5867,
      url: "https://crests.football-data.org/5867.png",
    },
  },
  {
    id: 2588,
    name: "KVC Westerlo",
    image: {
      id: 3803,
      url: "https://crests.football-data.org/3803.png",
    },
  },
  {
    id: 2590,
    name: "SK Vorwärts Steyr",
    image: {
      id: 3547,
      url: null,
    },
  },
  {
    id: 2661,
    name: "FC Vaduz",
    image: {
      id: 7513,
      url: "https://crests.football-data.org/7513.png",
    },
  },
  {
    id: 2800,
    name: "Enfield FC",
    image: {
      id: 6442,
      url: null,
    },
  },
  {
    id: 2826,
    name: "Casa Pia AC",
    image: {
      id: 6618,
      url: "https://crests.football-data.org/6618.png",
    },
  },
  {
    id: 2837,
    name: "SpVgg Unterhaching",
    image: {
      id: 48,
      url: "https://crests.football-data.org/48.png",
    },
  },
  {
    id: 5125,
    name: "SK Austria Klagenfurt",
    image: {
      id: 3546,
      url: "https://crests.football-data.org/3546.png",
    },
  },
  {
    id: 5126,
    name: "Union Raiffeisen Gurten",
    image: {
      id: 2653,
      url: null,
    },
  },
  {
    id: 5739,
    name: "1. FFC Turbine Potsdam",
    image: {
      id: 6150,
      url: null,
    },
  },
  {
    id: 5823,
    name: "1. FFC Frankfurt",
    image: {
      id: 7519,
      url: null,
    },
  },
  {
    id: 6059,
    name: "SK Brann",
    image: {
      id: 5730,
      url: "https://crests.football-data.org/5730.png",
    },
  },
  {
    id: 13322,
    name: "El Salvador",
    image: {
      id: 830,
      url: "https://crests.football-data.org/el_salvador.svg",
    },
  },
  {
    id: 14025,
    name: "SV 07 Elversberg",
    image: {
      id: 719,
      url: "https://crests.football-data.org/719.png",
    },
  },
  {
    id: 16388,
    name: "FC Augsburg II",
    image: {
      id: 5973,
      url: "https://crests.football-data.org/5973.png",
    },
  },
  {
    id: 16560,
    name: "FC Pinzgau Saalfelden",
    image: {
      id: 2619,
      url: null,
    },
  },
  {
    id: 3,
    name: "Blackburn Rovers",
    image: {
      id: 59,
      url: "https://crests.football-data.org/59.png",
    },
  },
  {
    id: 11,
    name: "Manchester City",
    image: {
      id: 65,
      url: "https://crests.football-data.org/65.png",
    },
  },
  {
    id: 12,
    name: "Manchester United",
    image: {
      id: 66,
      url: "https://crests.football-data.org/66.png",
    },
  },
  {
    id: 14,
    name: "Norwich City",
    image: {
      id: 68,
      url: "https://crests.football-data.org/68.png",
    },
  },
  {
    id: 15,
    name: "Nottingham Forest",
    image: {
      id: 351,
      url: "https://crests.football-data.org/351.png",
    },
  },
  {
    id: 16,
    name: "Oldham Athletic",
    image: {
      id: 1075,
      url: "https://crests.football-data.org/1075.png",
    },
  },
  {
    id: 17,
    name: "Queens Park Rangers",
    image: {
      id: 69,
      url: "https://crests.football-data.org/69.png",
    },
  },
  {
    id: 18,
    name: "Sheffield United",
    image: {
      id: 356,
      url: "https://crests.football-data.org/356.svg",
    },
  },
  {
    id: 19,
    name: "Sheffield Wednesday",
    image: {
      id: 345,
      url: "https://crests.football-data.org/345.png",
    },
  },
  {
    id: 21,
    name: "Tottenham Hotspur",
    image: {
      id: 73,
      url: "https://crests.football-data.org/73.svg",
    },
  },
  {
    id: 22,
    name: "Wimbledon",
    image: {
      id: 347,
      url: "https://crests.football-data.org/347.png",
    },
  },
  {
    id: 23,
    name: "Newcastle United",
    image: {
      id: 67,
      url: "https://crests.football-data.org/67.png",
    },
  },
  {
    id: 25,
    name: "West Ham United",
    image: {
      id: 563,
      url: "https://crests.football-data.org/563.png",
    },
  },
  {
    id: 27,
    name: "Bolton Wanderers",
    image: {
      id: 60,
      url: "https://crests.football-data.org/60.png",
    },
  },
  {
    id: 31,
    name: "Charlton Athletic",
    image: {
      id: 348,
      url: "https://crests.football-data.org/348.png",
    },
  },
  {
    id: 35,
    name: "Birmingham City",
    image: {
      id: 332,
      url: "https://crests.football-data.org/332.png",
    },
  },
  {
    id: 36,
    name: "West Bromwich Albion",
    image: {
      id: 74,
      url: "https://crests.football-data.org/74.png",
    },
  },
  {
    id: 38,
    name: "Wolverhampton Wanderers",
    image: {
      id: 76,
      url: "https://crests.football-data.org/76.svg",
    },
  },
  {
    id: 42,
    name: "Stoke City",
    image: {
      id: 70,
      url: "https://crests.football-data.org/70.png",
    },
  },
  {
    id: 45,
    name: "Swansea City",
    image: {
      id: 72,
      url: "https://crests.football-data.org/72.png",
    },
  },
  {
    id: 46,
    name: "Cardiff City",
    image: {
      id: 715,
      url: "https://crests.football-data.org/715.png",
    },
  },
  {
    id: 51,
    name: "Benfica",
    image: {
      id: 1903,
      url: "https://crests.football-data.org/1903.png",
    },
  },
  {
    id: 55,
    name: "FC Basel",
    image: {
      id: 729,
      url: "http://upload.wikimedia.org/wikipedia/commons/c/c5/FC_Basel.png",
    },
  },
  {
    id: 71,
    name: "Shakhtar Donetsk",
    image: {
      id: 1887,
      url: "https://crests.football-data.org/1887.png",
    },
  },
  {
    id: 75,
    name: "Anzhi Makhachkala",
    image: {
      id: 5424,
      url: null,
    },
  },
  {
    id: 94,
    name: "Kuban Krasnodar",
    image: {
      id: 5410,
      url: null,
    },
  },
  {
    id: 98,
    name: "Lyon",
    image: {
      id: 523,
      url: "https://crests.football-data.org/523.svg",
    },
  },
  {
    id: 100,
    name: "Maccabi Tel Aviv",
    image: {
      id: 5929,
      url: "https://crests.football-data.org/5929.png",
    },
  },
  {
    id: 102,
    name: "Paços de Ferreira",
    image: {
      id: 507,
      url: "https://crests.football-data.org/507.png",
    },
  },
  {
    id: 108,
    name: "Sevilla",
    image: {
      id: 559,
      url: "https://crests.football-data.org/559.svg",
    },
  },
  {
    id: 110,
    name: "Sheriff Tiraspol",
    image: {
      id: 1880,
      url: "https://crests.football-data.org/1880.png",
    },
  },
  {
    id: 120,
    name: "Accrington Stanley",
    image: {
      id: 1145,
      url: "https://crests.football-data.org/1145.png",
    },
  },
  {
    id: 124,
    name: "Biggleswade Town",
    image: {
      id: 4569,
      url: null,
    },
  },
  {
    id: 125,
    name: "Bishop's Stortford",
    image: {
      id: 4574,
      url: null,
    },
  },
  {
    id: 131,
    name: "Brighton & Hove Albion",
    image: {
      id: 397,
      url: "https://crests.football-data.org/397.svg",
    },
  },
  {
    id: 136,
    name: "Cambridge United",
    image: {
      id: 1147,
      url: "https://crests.football-data.org/1147.png",
    },
  },
  {
    id: 137,
    name: "Carlisle United",
    image: {
      id: 1136,
      url: "https://crests.football-data.org/1136.png",
    },
  },
  {
    id: 138,
    name: "Cheltenham Town",
    image: {
      id: 411,
      url: "https://crests.football-data.org/411.png",
    },
  },
  {
    id: 140,
    name: "Colchester United",
    image: {
      id: 365,
      url: "https://crests.football-data.org/365.png",
    },
  },
  {
    id: 143,
    name: "Crewe Alexandra",
    image: {
      id: 1074,
      url: "https://crests.football-data.org/1074.png",
    },
  },
  {
    id: 147,
    name: "Doncaster Rovers",
    image: {
      id: 1071,
      url: "https://crests.football-data.org/1071.png",
    },
  },
  {
    id: 154,
    name: "Gloucester City",
    image: {
      id: 4630,
      url: null,
    },
  },
  {
    id: 156,
    name: "Hartlepool United",
    image: {
      id: 4532,
      url: "https://crests.football-data.org/4532.png",
    },
  },
  {
    id: 157,
    name: "Hednesford Town",
    image: {
      id: 4839,
      url: null,
    },
  },
  {
    id: 159,
    name: "Huddersfield Town",
    image: {
      id: 394,
      url: "https://crests.football-data.org/394.png",
    },
  },
  {
    id: 160,
    name: "Kidderminster Harriers",
    image: {
      id: 4879,
      url: "https://crests.football-data.org/4879.png",
    },
  },
  {
    id: 164,
    name: "Macclesfield Town",
    image: {
      id: 4533,
      url: "https://crests.football-data.org/4533.png",
    },
  },
  {
    id: 170,
    name: "Northampton Town",
    image: {
      id: 376,
      url: "https://crests.football-data.org/376.png",
    },
  },
  {
    id: 173,
    name: "Peterborough United",
    image: {
      id: 1077,
      url: "https://crests.football-data.org/1077.png",
    },
  },
  {
    id: 174,
    name: "Plymouth Argyle",
    image: {
      id: 1138,
      url: "https://crests.football-data.org/1138.png",
    },
  },
  {
    id: 176,
    name: "Preston North End",
    image: {
      id: 1081,
      url: "https://crests.football-data.org/1081.png",
    },
  },
  {
    id: 178,
    name: "Rotherham United",
    image: {
      id: 385,
      url: "https://crests.football-data.org/385.png",
    },
  },
  {
    id: 180,
    name: "Scunthorpe United",
    image: {
      id: 1078,
      url: "https://crests.football-data.org/1078.png",
    },
  },
  {
    id: 181,
    name: "Shortwood United",
    image: {
      id: 6582,
      url: null,
    },
  },
  {
    id: 182,
    name: "Shrewsbury Town",
    image: {
      id: 1080,
      url: "https://crests.football-data.org/1080.png",
    },
  },
  {
    id: 183,
    name: "Southend United",
    image: {
      id: 1069,
      url: "https://crests.football-data.org/1069.png",
    },
  },
  {
    id: 191,
    name: "Torquay United",
    image: {
      id: 366,
      url: "https://crests.football-data.org/366.png",
    },
  },
  {
    id: 192,
    name: "Tranmere Rovers",
    image: {
      id: 4536,
      url: "https://crests.football-data.org/4536.png",
    },
  },
  {
    id: 196,
    name: "Wycombe Wanderers",
    image: {
      id: 1146,
      url: "https://crests.football-data.org/1146.png",
    },
  },
  {
    id: 209,
    name: "Basingstoke Town",
    image: {
      id: 4566,
      url: null,
    },
  },
  {
    id: 213,
    name: "Concord Rangers",
    image: {
      id: 4607,
      url: null,
    },
  },
  {
    id: 214,
    name: "East Thurrock United",
    image: {
      id: 4617,
      url: null,
    },
  },
  {
    id: 216,
    name: "Forest Green Rovers",
    image: {
      id: 1130,
      url: "https://crests.football-data.org/1130.png",
    },
  },
  {
    id: 217,
    name: "Gosport Borough",
    image: {
      id: 4632,
      url: null,
    },
  },
  {
    id: 218,
    name: "Havant & Waterlooville",
    image: {
      id: 4821,
      url: null,
    },
  },
  {
    id: 219,
    name: "Hemel Hempstead Town",
    image: {
      id: 4842,
      url: null,
    },
  },
  {
    id: 220,
    name: "Maidstone United",
    image: {
      id: 2142,
      url: "https://crests.football-data.org/2142.png",
    },
  },
  {
    id: 222,
    name: "Warrington Town",
    image: {
      id: 5083,
      url: null,
    },
  },
  {
    id: 227,
    name: "Asteras Tripolis",
    image: {
      id: 6139,
      url: "https://crests.football-data.org/6139.png",
    },
  },
  {
    id: 239,
    name: "Guingamp",
    image: {
      id: 538,
      url: "https://crests.football-data.org/538.svg",
    },
  },
  {
    id: 241,
    name: "Internazionale",
    image: {
      id: 108,
      url: "https://crests.football-data.org/108.png",
    },
  },
  {
    id: 242,
    name: "KSC Lokeren",
    image: {
      id: 1861,
      url: null,
    },
  },
  {
    id: 244,
    name: "Metalist Kharkiv",
    image: {
      id: 7428,
      url: "https://crests.football-data.org/7428.png",
    },
  },
  {
    id: 248,
    name: "Slovan Bratislava",
    image: {
      id: 7509,
      url: "https://crests.football-data.org/7509.png",
    },
  },
  {
    id: 258,
    name: "Gainsborough Trinity",
    image: {
      id: 4627,
      url: null,
    },
  },
  {
    id: 259,
    name: "Maidenhead United",
    image: {
      id: 4534,
      url: "https://crests.football-data.org/4534.png",
    },
  },
  {
    id: 260,
    name: "Northwich Victoria",
    image: {
      id: 5030,
      url: null,
    },
  },
  {
    id: 262,
    name: "Stalybridge Celtic",
    image: {
      id: 5067,
      url: null,
    },
  },
  {
    id: 264,
    name: "Whitehawk",
    image: {
      id: 1155,
      url: "",
    },
  },
  {
    id: 375,
    name: "Benfica B",
    image: {
      id: 5537,
      url: null,
    },
  },
  {
    id: 398,
    name: "Carshalton Athletic",
    image: {
      id: 4592,
      url: null,
    },
  },
  {
    id: 399,
    name: "Chelmsford City",
    image: {
      id: 4597,
      url: "https://crests.football-data.org/4597.png",
    },
  },
  {
    id: 402,
    name: "Eastbourne Borough",
    image: {
      id: 4618,
      url: null,
    },
  },
  {
    id: 404,
    name: "Ebbsfleet United",
    image: {
      id: 4531,
      url: "https://crests.football-data.org/4531.png",
    },
  },
  {
    id: 408,
    name: "Hayes & Yeading",
    image: {
      id: 4829,
      url: null,
    },
  },
  {
    id: 411,
    name: "Hythe Town",
    image: {
      id: 4871,
      url: null,
    },
  },
  {
    id: 414,
    name: "Lewes",
    image: {
      id: 5018,
      url: null,
    },
  },
  {
    id: 415,
    name: "Metropolitan Police",
    image: {
      id: 5025,
      url: null,
    },
  },
  {
    id: 419,
    name: "Poole Town",
    image: {
      id: 5037,
      url: null,
    },
  },
  {
    id: 420,
    name: "Redditch United",
    image: {
      id: 5043,
      url: null,
    },
  },
  {
    id: 421,
    name: "Rushden & Diamonds",
    image: {
      id: 4549,
      url: null,
    },
  },
  {
    id: 423,
    name: "Stockport County",
    image: {
      id: 396,
      url: "https://crests.football-data.org/396.png",
    },
  },
  {
    id: 424,
    name: "Swindon Supermarine",
    image: {
      id: 6563,
      url: null,
    },
  },
  {
    id: 442,
    name: "Hapoel Be'er Sheva",
    image: {
      id: 1891,
      url: "https://crests.football-data.org/1891.png",
    },
  },
  {
    id: 443,
    name: "Celta de Vigo",
    image: {
      id: 558,
      url: "https://crests.football-data.org/558.svg",
    },
  },
  {
    id: 447,
    name: "Solihull Moors",
    image: {
      id: 4535,
      url: "https://crests.football-data.org/4535.png",
    },
  },
  {
    id: 448,
    name: "Spennymoor Town",
    image: {
      id: 5062,
      url: null,
    },
  },
  {
    id: 455,
    name: "Hapoel Tel Aviv",
    image: {
      id: 7353,
      url: "https://crests.football-data.org/7353.png",
    },
  },
  {
    id: 459,
    name: "AIK",
    image: {
      id: 5277,
      url: "https://crests.football-data.org/5277.png",
    },
  },
  {
    id: 462,
    name: "Hapoel Ironi Kiryat Shmona",
    image: {
      id: 5924,
      url: "https://crests.football-data.org/5924.png",
    },
  },
  {
    id: 466,
    name: "FC Twente",
    image: {
      id: 666,
      url: "https://crests.football-data.org/666.png",
    },
  },
  {
    id: 477,
    name: "Lens",
    image: {
      id: 546,
      url: "https://crests.football-data.org/546.png",
    },
  },
  {
    id: 494,
    name: "Crvena Zvezda",
    image: {
      id: 7283,
      url: "https://crests.football-data.org/7283.png",
    },
  },
  {
    id: 496,
    name: "Iraklis",
    image: {
      id: 6134,
      url: null,
    },
  },
  {
    id: 503,
    name: "Heart of Midlothian",
    image: {
      id: 5371,
      url: "https://crests.football-data.org/5371.svg",
    },
  },
  {
    id: 509,
    name: "Xanthi",
    image: {
      id: 6144,
      url: null,
    },
  },
  {
    id: 516,
    name: "Dorchester Town",
    image: {
      id: 4613,
      url: null,
    },
  },
  {
    id: 517,
    name: "Harrogate Town",
    image: {
      id: 4809,
      url: "https://crests.football-data.org/4809.png",
    },
  },
  {
    id: 518,
    name: "Hastings United",
    image: {
      id: 4816,
      url: null,
    },
  },
  {
    id: 519,
    name: "Cambridge City",
    image: {
      id: 4590,
      url: null,
    },
  },
  {
    id: 524,
    name: "Tigres",
    image: {
      id: 5799,
      url: "https://crests.football-data.org/5799.png",
    },
  },
  {
    id: 547,
    name: "Cincinnati",
    image: {
      id: 7869,
      url: "https://crests.football-data.org/7869.png",
    },
  },
  {
    id: 550,
    name: "Reims",
    image: {
      id: 547,
      url: "https://crests.football-data.org/547.png",
    },
  },
  {
    id: 562,
    name: "Melbourne Victory",
    image: {
      id: 1827,
      url: "https://crests.football-data.org/1827.png",
    },
  },
  {
    id: 574,
    name: "Montreal Impact",
    image: {
      id: 7121,
      url: "https://crests.football-data.org/7121.png",
    },
  },
  {
    id: 584,
    name: "Emelec",
    image: {
      id: 4523,
      url: "https://crests.football-data.org/4523.png",
    },
  },
  {
    id: 589,
    name: "Ferro Carril Oeste",
    image: {
      id: 2049,
      url: null,
    },
  },
  {
    id: 616,
    name: "Bridlington Town",
    image: {
      id: 6385,
      url: null,
    },
  },
  {
    id: 637,
    name: "Zlín",
    image: {
      id: 4471,
      url: null,
    },
  },
  {
    id: 638,
    name: "FC St. Pauli",
    image: {
      id: 20,
      url: "https://crests.football-data.org/20.png",
    },
  },
  {
    id: 643,
    name: "Gimnàstic de Tarragona",
    image: {
      id: 5313,
      url: "https://crests.football-data.org/5313.png",
    },
  },
  {
    id: 678,
    name: "Vardar",
    image: {
      id: 1889,
      url: null,
    },
  },
  {
    id: 679,
    name: "Atlético Nacional",
    image: {
      id: 4438,
      url: "https://crests.football-data.org/4438.png",
    },
  },
  {
    id: 686,
    name: "Avranches",
    image: {
      id: 6282,
      url: null,
    },
  },
  {
    id: 687,
    name: "Bradford Park Avenue",
    image: {
      id: 4578,
      url: "https://crests.football-data.org/4578.png",
    },
  },
  {
    id: 690,
    name: "Arlesey Town",
    image: {
      id: 4553,
      url: null,
    },
  },
  {
    id: 693,
    name: "Slough Town",
    image: {
      id: 5056,
      url: null,
    },
  },
  {
    id: 698,
    name: "Harlow Town",
    image: {
      id: 4806,
      url: null,
    },
  },
  {
    id: 699,
    name: "Grays Athletic",
    image: {
      id: 4633,
      url: null,
    },
  },
  {
    id: 701,
    name: "Evesham United",
    image: {
      id: 6544,
      url: null,
    },
  },
  {
    id: 703,
    name: "Paulton Rovers",
    image: {
      id: 6575,
      url: null,
    },
  },
  {
    id: 704,
    name: "Tooting & Mitcham United",
    image: {
      id: 5078,
      url: null,
    },
  },
  {
    id: 705,
    name: "Lowestoft Town",
    image: {
      id: 5022,
      url: null,
    },
  },
  {
    id: 712,
    name: "Heybridge Swifts",
    image: {
      id: 4846,
      url: null,
    },
  },
  {
    id: 713,
    name: "Billericay Town",
    image: {
      id: 4570,
      url: null,
    },
  },
  {
    id: 731,
    name: "Luftëtari Gjirokastër",
    image: {
      id: 7499,
      url: null,
    },
  },
  {
    id: 738,
    name: "Aylesbury United",
    image: {
      id: 4559,
      url: null,
    },
  },
  {
    id: 739,
    name: "Bedworth United",
    image: {
      id: 6548,
      url: null,
    },
  },
  {
    id: 740,
    name: "Chippenham Town",
    image: {
      id: 4600,
      url: "https://crests.football-data.org/4600.png",
    },
  },
  {
    id: 741,
    name: "Hampton & Richmond",
    image: {
      id: 4796,
      url: null,
    },
  },
  {
    id: 743,
    name: "Lincoln United",
    image: {
      id: 5019,
      url: null,
    },
  },
  {
    id: 744,
    name: "Mangotsfield United",
    image: {
      id: 5024,
      url: null,
    },
  },
  {
    id: 762,
    name: "Sporting de Gijón",
    image: {
      id: 96,
      url: "https://crests.football-data.org/96.png",
    },
  },
  {
    id: 766,
    name: "Alcorcón",
    image: {
      id: 304,
      url: "https://crests.football-data.org/304.png",
    },
  },
  {
    id: 776,
    name: "Real Valladolid",
    image: {
      id: 250,
      url: "https://crests.football-data.org/250.png",
    },
  },
  {
    id: 778,
    name: "Salamanca",
    image: {
      id: 7451,
      url: "https://crests.football-data.org/7451.png",
    },
  },
  {
    id: 779,
    name: "Tenerife",
    image: {
      id: 254,
      url: "https://crests.football-data.org/254.png",
    },
  },
  {
    id: 780,
    name: "Xerez",
    image: {
      id: 268,
      url: "https://crests.football-data.org/268.png",
    },
  },
  {
    id: 786,
    name: "Mirandés",
    image: {
      id: 595,
      url: "https://crests.football-data.org/595.png",
    },
  },
  {
    id: 794,
    name: "Cádiz",
    image: {
      id: 264,
      url: "https://crests.football-data.org/264.png",
    },
  },
  {
    id: 795,
    name: "Reus Deportiu",
    image: {
      id: 1099,
      url: "https://upload.wikimedia.org/wikipedia/en/0/0f/Cf_reus_deportiu_200.png",
    },
  },
  {
    id: 800,
    name: "Atlético Baleares",
    image: {
      id: 5323,
      url: "https://crests.football-data.org/5323.png",
    },
  },
  {
    id: 809,
    name: "Ceuta",
    image: {
      id: 7445,
      url: "https://crests.football-data.org/7445.png",
    },
  },
  {
    id: 838,
    name: "Écija",
    image: {
      id: 314,
      url: "https://crests.football-data.org/314.png",
    },
  },
  {
    id: 844,
    name: "Linense",
    image: {
      id: 4349,
      url: null,
    },
  },
  {
    id: 845,
    name: "Lleida Esportiu",
    image: {
      id: 280,
      url: "https://crests.football-data.org/280.png",
    },
  },
  {
    id: 846,
    name: "Lorca",
    image: {
      id: 5310,
      url: null,
    },
  },
  {
    id: 848,
    name: "Olímpic de Xàtiva",
    image: {
      id: 6852,
      url: null,
    },
  },
  {
    id: 864,
    name: "Formentera",
    image: {
      id: 5338,
      url: null,
    },
  },
  {
    id: 872,
    name: "Rayo Majadahonda",
    image: {
      id: 5327,
      url: "https://crests.football-data.org/5327.png",
    },
  },
  {
    id: 873,
    name: "Talavera de la Reina",
    image: {
      id: 5328,
      url: "https://crests.football-data.org/5328.png",
    },
  },
  {
    id: 892,
    name: "Guangzhou Evergrande",
    image: {
      id: 4416,
      url: null,
    },
  },
  {
    id: 900,
    name: "Mamelodi Sundowns",
    image: {
      id: 5362,
      url: null,
    },
  },
  {
    id: 921,
    name: "Orlando Pirates",
    image: {
      id: 5364,
      url: null,
    },
  },
  {
    id: 924,
    name: "AmaZulu",
    image: {
      id: 5353,
      url: null,
    },
  },
  {
    id: 943,
    name: "SC Cambuur",
    image: {
      id: 1909,
      url: "https://crests.football-data.org/1909.png",
    },
  },
  {
    id: 945,
    name: "Shamrock Rovers",
    image: {
      id: 2921,
      url: "https://crests.football-data.org/2921.png",
    },
  },
  {
    id: 962,
    name: "Leioa",
    image: {
      id: 5339,
      url: null,
    },
  },
  {
    id: 980,
    name: "Lorca Deportiva",
    image: {
      id: 5326,
      url: null,
    },
  },
  {
    id: 986,
    name: "Arenas Club",
    image: {
      id: 5322,
      url: "https://crests.football-data.org/5322.png",
    },
  },
  {
    id: 992,
    name: "Olimpija Ljubljana",
    image: {
      id: 7287,
      url: "https://crests.football-data.org/7287.png",
    },
  },
  {
    id: 994,
    name: "Dundee",
    image: {
      id: 5369,
      url: "https://crests.football-data.org/5369.png",
    },
  },
  {
    id: 996,
    name: "Nacional",
    image: {
      id: 501,
      url: "http://upload.wikimedia.org/wikipedia/de/e/ee/Nacional_Funchal.svg",
    },
  },
  {
    id: 997,
    name: "Vélez Sarsfield",
    image: {
      id: 2078,
      url: "https://crests.football-data.org/2078.png",
    },
  },
  {
    id: 998,
    name: "León",
    image: {
      id: 5784,
      url: "https://crests.football-data.org/5784.png",
    },
  },
  {
    id: 1004,
    name: "Universitario de Deportes",
    image: {
      id: 4268,
      url: "https://crests.football-data.org/4268.png",
    },
  },
  {
    id: 1059,
    name: "Antequera",
    image: {
      id: 6855,
      url: "https://crests.football-data.org/6855.png",
    },
  },
  {
    id: 1060,
    name: "Arcos",
    image: {
      id: 5559,
      url: "https://crests.football-data.org/5559.png",
    },
  },
  {
    id: 1065,
    name: "Gimnástica Segoviana",
    image: {
      id: 6317,
      url: "https://crests.football-data.org/6317.png",
    },
  },
  {
    id: 1126,
    name: "Adelaide United",
    image: {
      id: 1833,
      url: "https://crests.football-data.org/1833.png",
    },
  },
  {
    id: 1131,
    name: "Djurgårdens IF",
    image: {
      id: 5280,
      url: "https://crests.football-data.org/5280.png",
    },
  },
  {
    id: 1149,
    name: "SpVgg Greuther Fürth",
    image: {
      id: 21,
      url: "https://crests.football-data.org/21.svg",
    },
  },
  {
    id: 1158,
    name: "Újpest",
    image: {
      id: 5959,
      url: "https://crests.football-data.org/5959.png",
    },
  },
  {
    id: 1171,
    name: "Vorskla Poltava",
    image: {
      id: 5198,
      url: "https://crests.football-data.org/5198.png",
    },
  },
  {
    id: 1173,
    name: "Lokomotiva Zagreb",
    image: {
      id: 4450,
      url: null,
    },
  },
  {
    id: 1174,
    name: "Lausanne",
    image: {
      id: 5263,
      url: "https://crests.football-data.org/5263.png",
    },
  },
  {
    id: 1176,
    name: "Neuchâtel Xamax",
    image: {
      id: 5255,
      url: null,
    },
  },
  {
    id: 1178,
    name: "Sainte-Geneviève",
    image: {
      id: 7710,
      url: null,
    },
  },
  {
    id: 1180,
    name: "Chambly",
    image: {
      id: 6211,
      url: "https://crests.football-data.org/6211.svg",
    },
  },
  {
    id: 1192,
    name: "Internacional de Madrid",
    image: {
      id: 7442,
      url: null,
    },
  },
  {
    id: 1194,
    name: "Gernika",
    image: {
      id: 7430,
      url: "https://crests.football-data.org/7430.png",
    },
  },
  {
    id: 1195,
    name: "Unionistas",
    image: {
      id: 7451,
      url: "https://crests.football-data.org/7451.png",
    },
  },
  {
    id: 67,
    name: "Paris Saint Germain",
    image: {
      id: 524,
      url: "https://crests.football-data.org/524.png",
    },
  },
  {
    id: 1228,
    name: "ASPTT Caen",
    image: {
      id: 6184,
      url: null,
    },
  },
  {
    id: 1235,
    name: "Central Coast Mariners",
    image: {
      id: 1830,
      url: "https://crests.football-data.org/1830.png",
    },
  },
  {
    id: 1265,
    name: "Haringey Borough",
    image: {
      id: 4802,
      url: null,
    },
  },
  {
    id: 1266,
    name: "Hitchin Town",
    image: {
      id: 4851,
      url: null,
    },
  },
  {
    id: 1267,
    name: "Sportfreunde Lotte",
    image: {
      id: 6310,
      url: "https://crests.football-data.org/6310.png",
    },
  },
  {
    id: 1311,
    name: "Alania Vladikavkaz",
    image: {
      id: 5472,
      url: null,
    },
  },
  {
    id: 1314,
    name: "Eendracht Aalst",
    image: {
      id: 4203,
      url: null,
    },
  },
  {
    id: 1319,
    name: "MyPa",
    image: {
      id: 7922,
      url: null,
    },
  },
  {
    id: 1323,
    name: "Rotor Volgograd",
    image: {
      id: 5414,
      url: "https://crests.football-data.org/5414.svg",
    },
  },
  {
    id: 1346,
    name: "Metz",
    image: {
      id: 545,
      url: "https://crests.football-data.org/545.svg",
    },
  },
  {
    id: 1347,
    name: "Pirin Blagoevgrad",
    image: {
      id: 4392,
      url: null,
    },
  },
  {
    id: 1372,
    name: "Progrès Niederkorn",
    image: {
      id: 7487,
      url: "https://crests.football-data.org/7487.png",
    },
  },
  {
    id: 1381,
    name: "Aris",
    image: {
      id: 644,
      url: "https://crests.football-data.org/644.png",
    },
  },
  {
    id: 1382,
    name: "Ballymena United",
    image: {
      id: 5737,
      url: "https://crests.football-data.org/5737.png",
    },
  },
  {
    id: 1383,
    name: "Beroe Stara Zagora",
    image: {
      id: 4394,
      url: "https://crests.football-data.org/4394.png",
    },
  },
  {
    id: 1392,
    name: "Sliema Wanderers",
    image: {
      id: 5811,
      url: "https://crests.football-data.org/5811.png",
    },
  },
  {
    id: 1395,
    name: "Zbrojovka Brno",
    image: {
      id: 4474,
      url: null,
    },
  },
  {
    id: 1401,
    name: "Budapest Honvéd",
    image: {
      id: 1872,
      url: "https://crests.football-data.org/1872.png",
    },
  },
  {
    id: 1409,
    name: "Holbæk",
    image: {
      id: 4505,
      url: null,
    },
  },
  {
    id: 1420,
    name: "Royal Antwerp",
    image: {
      id: 1864,
      url: "https://crests.football-data.org/1864.png",
    },
  },
  {
    id: 1423,
    name: "Angers",
    image: {
      id: 532,
      url: "https://crests.football-data.org/532.svg",
    },
  },
  {
    id: 1431,
    name: "Lyn",
    image: {
      id: 2169,
      url: null,
    },
  },
  {
    id: 1432,
    name: "Nîmes",
    image: {
      id: 556,
      url: "https://crests.football-data.org/556.svg",
    },
  },
  {
    id: 1434,
    name: "Partick Thistle",
    image: {
      id: 5375,
      url: null,
    },
  },
  {
    id: 1436,
    name: "Salgótarján",
    image: {
      id: 6102,
      url: null,
    },
  },
  {
    id: 1439,
    name: "UTA Arad",
    image: {
      id: 5500,
      url: "https://crests.football-data.org/5500.png",
    },
  },
  {
    id: 1478,
    name: "Stirling Albion",
    image: {
      id: 6898,
      url: null,
    },
  },
  {
    id: 1483,
    name: "Berwick Rangers",
    image: {
      id: 6903,
      url: null,
    },
  },
  {
    id: 1485,
    name: "Inverness Caledonian Thistle",
    image: {
      id: 5384,
      url: null,
    },
  },
  {
    id: 1487,
    name: "Dunfermline Athletic",
    image: {
      id: 5379,
      url: null,
    },
  },
  {
    id: 1488,
    name: "Morton",
    image: {
      id: 5383,
      url: null,
    },
  },
  {
    id: 1489,
    name: "Queen of the South",
    image: {
      id: 5386,
      url: null,
    },
  },
  {
    id: 1502,
    name: "Hamilton Academical",
    image: {
      id: 5370,
      url: "https://crests.football-data.org/5370.svg",
    },
  },
  {
    id: 1511,
    name: "Forfar Athletic",
    image: {
      id: 6912,
      url: null,
    },
  },
  {
    id: 1520,
    name: "Beitar Jerusalem",
    image: {
      id: 5918,
      url: "https://crests.football-data.org/5918.png",
    },
  },
  {
    id: 1708,
    name: "Adelaide Raiders",
    image: {
      id: 2393,
      url: null,
    },
  },
  {
    id: 1819,
    name: "Triestina",
    image: {
      id: 5892,
      url: "https://crests.football-data.org/5892.png",
    },
  },
  {
    id: 1887,
    name: "Spartak Subotica",
    image: {
      id: 7496,
      url: null,
    },
  },
  {
    id: 1891,
    name: "Minsk",
    image: {
      id: 7488,
      url: "https://crests.football-data.org/7488.png",
    },
  },
  {
    id: 1892,
    name: "Göteborg",
    image: {
      id: 5285,
      url: "https://crests.football-data.org/5285.png",
    },
  },
  {
    id: 1902,
    name: "Atlético de Madrid",
    image: {
      id: 78,
      url: "https://crests.football-data.org/78.svg",
    },
  },
  {
    id: 1988,
    name: "Maldon & Tiptree",
    image: {
      id: 5023,
      url: null,
    },
  },
  {
    id: 1991,
    name: "Chichester City",
    image: {
      id: 6527,
      url: null,
    },
  },
  {
    id: 2015,
    name: "Altay",
    image: {
      id: 7313,
      url: "https://crests.football-data.org/7313.png",
    },
  },
  {
    id: 2020,
    name: "Cherno More Varna",
    image: {
      id: 4395,
      url: null,
    },
  },
  {
    id: 2029,
    name: "Godalming Town",
    image: {
      id: 6354,
      url: null,
    },
  },
  {
    id: 2030,
    name: "Hanworth Villa",
    image: {
      id: 6485,
      url: null,
    },
  },
  {
    id: 2031,
    name: "Hebburn Town",
    image: {
      id: 7370,
      url: null,
    },
  },
  {
    id: 2032,
    name: "Kidsgrove Athletic",
    image: {
      id: 6553,
      url: null,
    },
  },
  {
    id: 2034,
    name: "Rushall Olympic",
    image: {
      id: 6596,
      url: null,
    },
  },
  {
    id: 2036,
    name: "Witton Albion",
    image: {
      id: 6612,
      url: null,
    },
  },
  {
    id: 2044,
    name: "Delfín",
    image: {
      id: 4526,
      url: null,
    },
  },
  {
    id: 2047,
    name: "Karpaty Lviv",
    image: {
      id: 5194,
      url: null,
    },
  },
  {
    id: 2093,
    name: "Dorking Wanderers",
    image: {
      id: 4614,
      url: "https://crests.football-data.org/4614.png",
    },
  },
  {
    id: 2127,
    name: "Gaziantep",
    image: {
      id: 606,
      url: "",
    },
  },
  {
    id: 2136,
    name: "FC Viktoria Köln",
    image: {
      id: 1097,
      url: "https://crests.football-data.org/1097.png",
    },
  },
  {
    id: 2143,
    name: "Pisa",
    image: {
      id: 487,
      url: "https://crests.football-data.org/487.png",
    },
  },
  {
    id: 2146,
    name: "East Stirlingshire",
    image: {
      id: 5398,
      url: null,
    },
  },
  {
    id: 2149,
    name: "FC Eintracht Norderstedt",
    image: {
      id: 2011,
      url: "https://crests.football-data.org/2011.png",
    },
  },
  {
    id: 2169,
    name: "Beerschot",
    image: {
      id: 3611,
      url: "https://crests.football-data.org/3611.png",
    },
  },
  {
    id: 2174,
    name: "Mechelen",
    image: {
      id: 1869,
      url: "https://crests.football-data.org/1869.png",
    },
  },
  {
    id: 2175,
    name: "Sint-Truidense VV",
    image: {
      id: 1860,
      url: "https://crests.football-data.org/1860.png",
    },
  },
  {
    id: 2178,
    name: "Canvey Island",
    image: {
      id: 4591,
      url: null,
    },
  },
  {
    id: 2179,
    name: "Cray Wanderers",
    image: {
      id: 4609,
      url: null,
    },
  },
  {
    id: 2180,
    name: "Skelmersdale United",
    image: {
      id: 6576,
      url: null,
    },
  },
  {
    id: 2181,
    name: "Tonbridge Angels",
    image: {
      id: 5077,
      url: null,
    },
  },
  {
    id: 2182,
    name: "South Shields",
    image: {
      id: 5059,
      url: "https://crests.football-data.org/5059.png",
    },
  },
  {
    id: 2183,
    name: "Banbury United",
    image: {
      id: 4563,
      url: null,
    },
  },
  {
    id: 2184,
    name: "Cray Valley Paper Mills",
    image: {
      id: 6369,
      url: "https://crests.football-data.org/6369.png",
    },
  },
  {
    id: 2237,
    name: "Independiente del Valle",
    image: {
      id: 6989,
      url: "https://crests.football-data.org/6989.png",
    },
  },
  {
    id: 2315,
    name: "Union Saint-Gilloise",
    image: {
      id: 3929,
      url: "https://crests.football-data.org/3929.png",
    },
  },
  {
    id: 2341,
    name: "Clermont",
    image: {
      id: 541,
      url: "https://crests.football-data.org/541.svg",
    },
  },
  {
    id: 2405,
    name: "AEM",
    image: {
      id: 5795,
      url: null,
    },
  },
  {
    id: 2445,
    name: "Bowers & Pitsea",
    image: {
      id: 4577,
      url: null,
    },
  },
  {
    id: 2447,
    name: "Stratford Town",
    image: {
      id: 2525,
      url: null,
    },
  },
  {
    id: 2467,
    name: "Mora",
    image: {
      id: 5590,
      url: null,
    },
  },
  {
    id: 2518,
    name: "Shkupi",
    image: {
      id: 7485,
      url: "https://crests.football-data.org/7485.png",
    },
  },
  {
    id: 2528,
    name: "Brea",
    image: {
      id: 2820,
      url: null,
    },
  },
  {
    id: 2529,
    name: "Montijo",
    image: {
      id: 5573,
      url: "https://crests.football-data.org/5573.png",
    },
  },
  {
    id: 2530,
    name: "Águilas",
    image: {
      id: 4445,
      url: "https://crests.football-data.org/4445.png",
    },
  },
  {
    id: 2551,
    name: "Lincoln Red Imps",
    image: {
      id: 7281,
      url: "https://crests.football-data.org/7281.png",
    },
  },
  {
    id: 2561,
    name: "Maccabi Netanya",
    image: {
      id: 5927,
      url: "https://crests.football-data.org/5927.png",
    },
  },
  {
    id: 2662,
    name: "Dnipro-1",
    image: {
      id: 5230,
      url: "https://crests.football-data.org/5230.png",
    },
  },
  {
    id: 2721,
    name: "Coalville Town",
    image: {
      id: 6610,
      url: "https://crests.football-data.org/6610.png",
    },
  },
  {
    id: 2723,
    name: "Bracknell Town",
    image: {
      id: 6311,
      url: "https://crests.football-data.org/6311.png",
    },
  },
  {
    id: 2726,
    name: "Needham Market",
    image: {
      id: 5027,
      url: "https://crests.football-data.org/5027.png",
    },
  },
  {
    id: 2802,
    name: "Hungerford Town",
    image: {
      id: 4864,
      url: null,
    },
  },
  {
    id: 2809,
    name: "Stafford Rangers",
    image: {
      id: 6616,
      url: null,
    },
  },
  {
    id: 2810,
    name: "Reggina",
    image: {
      id: 5917,
      url: "https://crests.football-data.org/5917.png",
    },
  },
  {
    id: 2812,
    name: "Dagenham",
    image: {
      id: 4530,
      url: "https://crests.football-data.org/4530.png",
    },
  },
  {
    id: 2816,
    name: "Guildford City",
    image: {
      id: 6511,
      url: null,
    },
  },
  {
    id: 2817,
    name: "Hayes",
    image: {
      id: 1485,
      url: "",
    },
  },
  {
    id: 2823,
    name: "Walton & Hersham",
    image: {
      id: 5081,
      url: null,
    },
  },
  {
    id: 2827,
    name: "Unión La Calera",
    image: {
      id: 4409,
      url: "https://crests.football-data.org/4409.png",
    },
  },
  {
    id: 2831,
    name: "Independiente",
    image: {
      id: 2052,
      url: null,
    },
  },
  {
    id: 2838,
    name: "Aucas",
    image: {
      id: 4529,
      url: "https://crests.football-data.org/4529.png",
    },
  },
  {
    id: 2908,
    name: "Universidad de Chile",
    image: {
      id: 4466,
      url: "https://crests.football-data.org/4466.png",
    },
  },
  {
    id: 2931,
    name: "The Spartans",
    image: {
      id: 6880,
      url: null,
    },
  },
  {
    id: 5123,
    name: "Kisvárda",
    image: {
      id: 6075,
      url: "https://crests.football-data.org/6075.png",
    },
  },
  {
    id: 5124,
    name: "Rot-Weiß Oberhausen",
    image: {
      id: 37,
      url: "https://crests.football-data.org/37.png",
    },
  },
  {
    id: 5711,
    name: "Bastia",
    image: {
      id: 536,
      url: "https://crests.football-data.org/536.png",
    },
  },
  {
    id: 5716,
    name: "Estrela",
    image: {
      id: 5580,
      url: null,
    },
  },
  {
    id: 5789,
    name: "Zrinjski Mostar",
    image: {
      id: 1894,
      url: "https://crests.football-data.org/1894.png",
    },
  },
  {
    id: 5814,
    name: "Universidad Católica",
    image: {
      id: 4463,
      url: null,
    },
  },
  {
    id: 5836,
    name: "Monte",
    image: {
      id: 796,
      url: null,
    },
  },
  {
    id: 5855,
    name: "Worksop Town",
    image: {
      id: 6426,
      url: "https://crests.football-data.org/6426.png",
    },
  },
  {
    id: 5976,
    name: "Sheppey United",
    image: {
      id: 5054,
      url: null,
    },
  },
  {
    id: 5977,
    name: "Scarborough Athletic",
    image: {
      id: 6555,
      url: null,
    },
  },
  {
    id: 6755,
    name: "Staveley",
    image: {
      id: 6416,
      url: null,
    },
  },
  {
    id: 7617,
    name: "Independiente Rivadavia",
    image: {
      id: 2052,
      url: null,
    },
  },
  {
    id: 13323,
    name: "Newell's Old Boys",
    image: {
      id: 2067,
      url: "https://crests.football-data.org/2067.png",
    },
  },
  {
    id: 30646,
    name: "Formartine United",
    image: {
      id: 6873,
      url: null,
    },
  },
  {
    id: 30651,
    name: "Turriff United",
    image: {
      id: 6874,
      url: null,
    },
  },
  {
    id: 30654,
    name: "Edinburgh University",
    image: {
      id: 6870,
      url: null,
    },
  },
  {
    id: 30655,
    name: "Dalbeattie Star",
    image: {
      id: 6881,
      url: null,
    },
  },
  {
    id: 30659,
    name: "Hutchison Vale",
    image: {
      id: 5391,
      url: null,
    },
  },
  {
    id: 30661,
    name: "Civil Service Strollers",
    image: {
      id: 6878,
      url: null,
    },
  },
  {
    id: 30662,
    name: "Cumbernauld Colts",
    image: {
      id: 6868,
      url: null,
    },
  },
  {
    id: 30665,
    name: "Forres Mechanics",
    image: {
      id: 6892,
      url: null,
    },
  },
  {
    id: 30670,
    name: "Inverurie Loco Works",
    image: {
      id: 6888,
      url: null,
    },
  },
  {
    id: 30673,
    name: "Linlithgow Rose",
    image: {
      id: 6864,
      url: null,
    },
  },
  {
    id: 30687,
    name: "Golspie Sutherland",
    image: {
      id: 5400,
      url: null,
    },
  },
  {
    id: 30691,
    name: "Gala Fairydean Rovers",
    image: {
      id: 6872,
      url: null,
    },
  },
  {
    id: 30693,
    name: "Whitehill Welfare",
    image: {
      id: 6882,
      url: null,
    },
  },
  {
    id: 30695,
    name: "Auchinleck Talbot",
    image: {
      id: 7551,
      url: null,
    },
  },
  {
    id: 30696,
    name: "Strathspey Thistle",
    image: {
      id: 6875,
      url: null,
    },
  },
  {
    id: 30723,
    name: "Ankaragücü",
    image: {
      id: 5245,
      url: "https://crests.football-data.org/5245.png",
    },
  },
];