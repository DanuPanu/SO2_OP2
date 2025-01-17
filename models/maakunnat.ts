
export interface Maakunnat{
    kuntanro: number,
    nimi_fi: string,
    nimi_sv: string,
    kuntamuoto: string,
    asukkaita: number,
    maakuntanro: number,
    maakuntanimi_fi: string,
    maakuntanimi_sv: string
}

const maakunnat : Maakunnat[] = [
    {
        "kuntanro": 20,
        "nimi_fi": "Akaa",
        "nimi_sv": "Akas",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 16391,
        "maakuntanro": 5,
        "maakuntanimi_fi": "Pirkanmaa",
        "maakuntanimi_sv": "Birkaland"
    },
    {
        "kuntanro": 5,
        "nimi_fi": "Alajärvi",
        "nimi_sv": "Alajärvi",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 9419,
        "maakuntanro": 13,
        "maakuntanimi_fi": "Etelä-Pohjanmaa",
        "maakuntanimi_sv": "Södra Österbotten"
    },
    {
        "kuntanro": 9,
        "nimi_fi": "Alavieska",
        "nimi_sv": "Alavieska",
        "kuntamuoto": "Kunta",
        "asukkaita": 2517,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 10,
        "nimi_fi": "Alavus",
        "nimi_sv": "Alavo",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 11332,
        "maakuntanro": 13,
        "maakuntanimi_fi": "Etelä-Pohjanmaa",
        "maakuntanimi_sv": "Södra Österbotten"
    },
    {
        "kuntanro": 16,
        "nimi_fi": "Asikkala",
        "nimi_sv": "Asikkala",
        "kuntamuoto": "Kunta",
        "asukkaita": 8059,
        "maakuntanro": 6,
        "maakuntanimi_fi": "Päijät-Häme",
        "maakuntanimi_sv": "Päijänne-Tavastland"
    },
    {
        "kuntanro": 18,
        "nimi_fi": "Askola",
        "nimi_sv": "Askola",
        "kuntamuoto": "Kunta",
        "asukkaita": 4878,
        "maakuntanro": 1,
        "maakuntanimi_fi": "Uusimaa",
        "maakuntanimi_sv": "Nyland"
    },
    {
        "kuntanro": 19,
        "nimi_fi": "Aura",
        "nimi_sv": "Aura",
        "kuntamuoto": "Kunta",
        "asukkaita": 3959,
        "maakuntanro": 2,
        "maakuntanimi_fi": "Varsinais-Suomi",
        "maakuntanimi_sv": "Egentliga Finland"
    },
    {
        "kuntanro": 35,
        "nimi_fi": "Brändö",
        "nimi_sv": "Brändö",
        "kuntamuoto": "Kunta",
        "asukkaita": 449,
        "maakuntanro": 19,
        "maakuntanimi_fi": "Ahvenanmaa",
        "maakuntanimi_sv": "Åland"
    },
    {
        "kuntanro": 43,
        "nimi_fi": "Eckerö",
        "nimi_sv": "Eckerö",
        "kuntamuoto": "Kunta",
        "asukkaita": 958,
        "maakuntanro": 19,
        "maakuntanimi_fi": "Ahvenanmaa",
        "maakuntanimi_sv": "Åland"
    },
    {
        "kuntanro": 46,
        "nimi_fi": "Enonkoski",
        "nimi_sv": "Enonkoski",
        "kuntamuoto": "Kunta",
        "asukkaita": 1369,
        "maakuntanro": 9,
        "maakuntanimi_fi": "Etelä-Savo",
        "maakuntanimi_sv": "Södra Savolax"
    },
    {
        "kuntanro": 47,
        "nimi_fi": "Enontekiö",
        "nimi_sv": "Enontekis",
        "kuntamuoto": "Kunta",
        "asukkaita": 1808,
        "maakuntanro": 18,
        "maakuntanimi_fi": "Lappi",
        "maakuntanimi_sv": "Lappland"
    },
    {
        "kuntanro": 49,
        "nimi_fi": "Espoo",
        "nimi_sv": "Esbo",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 292796,
        "maakuntanro": 1,
        "maakuntanimi_fi": "Uusimaa",
        "maakuntanimi_sv": "Nyland"
    },
    {
        "kuntanro": 50,
        "nimi_fi": "Eura",
        "nimi_sv": "Eura",
        "kuntamuoto": "Kunta",
        "asukkaita": 11483,
        "maakuntanro": 3,
        "maakuntanimi_fi": "Satakunta",
        "maakuntanimi_sv": "Satakunta"
    },
    {
        "kuntanro": 51,
        "nimi_fi": "Eurajoki",
        "nimi_sv": "Euraåminne",
        "kuntamuoto": "Kunta",
        "asukkaita": 9452,
        "maakuntanro": 3,
        "maakuntanimi_fi": "Satakunta",
        "maakuntanimi_sv": "Satakunta"
    },
    {
        "kuntanro": 52,
        "nimi_fi": "Evijärvi",
        "nimi_sv": "Evijärvi",
        "kuntamuoto": "Kunta",
        "asukkaita": 2408,
        "maakuntanro": 13,
        "maakuntanimi_fi": "Etelä-Pohjanmaa",
        "maakuntanimi_sv": "Södra Österbotten"
    },
    {
        "kuntanro": 60,
        "nimi_fi": "Finström",
        "nimi_sv": "Finström",
        "kuntamuoto": "Kunta",
        "asukkaita": 2603,
        "maakuntanro": 19,
        "maakuntanimi_fi": "Ahvenanmaa",
        "maakuntanimi_sv": "Åland"
    },
    {
        "kuntanro": 61,
        "nimi_fi": "Forssa",
        "nimi_sv": "Forssa",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 16800,
        "maakuntanro": 4,
        "maakuntanimi_fi": "Kanta-Häme",
        "maakuntanimi_sv": "Egentliga Tavastland"
    },
    {
        "kuntanro": 62,
        "nimi_fi": "Föglö",
        "nimi_sv": "Föglö",
        "kuntamuoto": "Kunta",
        "asukkaita": 526,
        "maakuntanro": 19,
        "maakuntanimi_fi": "Ahvenanmaa",
        "maakuntanimi_sv": "Åland"
    },
    {
        "kuntanro": 65,
        "nimi_fi": "Geta",
        "nimi_sv": "Geta",
        "kuntamuoto": "Kunta",
        "asukkaita": 511,
        "maakuntanro": 19,
        "maakuntanimi_fi": "Ahvenanmaa",
        "maakuntanimi_sv": "Åland"
    },
    {
        "kuntanro": 69,
        "nimi_fi": "Haapajärvi",
        "nimi_sv": "Haapajärvi",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 6896,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 71,
        "nimi_fi": "Haapavesi",
        "nimi_sv": "Haapavesi",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 6667,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 72,
        "nimi_fi": "Hailuoto",
        "nimi_sv": "Karlö",
        "kuntamuoto": "Kunta",
        "asukkaita": 949,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 74,
        "nimi_fi": "Halsua",
        "nimi_sv": "Halso",
        "kuntamuoto": "Kunta",
        "asukkaita": 1103,
        "maakuntanro": 15,
        "maakuntanimi_fi": "Keski-Pohjanmaa",
        "maakuntanimi_sv": "Mellersta Österbotten"
    },
    {
        "kuntanro": 75,
        "nimi_fi": "Hamina",
        "nimi_sv": "Fredrikshamn",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 19877,
        "maakuntanro": 7,
        "maakuntanimi_fi": "Kymenlaakso",
        "maakuntanimi_sv": "Kymmenedalen"
    },
    {
        "kuntanro": 76,
        "nimi_fi": "Hammarland",
        "nimi_sv": "Hammarland",
        "kuntamuoto": "Kunta",
        "asukkaita": 1599,
        "maakuntanro": 19,
        "maakuntanimi_fi": "Ahvenanmaa",
        "maakuntanimi_sv": "Åland"
    },
    {
        "kuntanro": 77,
        "nimi_fi": "Hankasalmi",
        "nimi_sv": "Hankasalmi",
        "kuntamuoto": "Kunta",
        "asukkaita": 4782,
        "maakuntanro": 12,
        "maakuntanimi_fi": "Keski-Suomi",
        "maakuntanimi_sv": "Mellersta Finland"
    },
    {
        "kuntanro": 78,
        "nimi_fi": "Hanko",
        "nimi_sv": "Hangö",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 8042,
        "maakuntanro": 1,
        "maakuntanimi_fi": "Uusimaa",
        "maakuntanimi_sv": "Nyland"
    },
    {
        "kuntanro": 79,
        "nimi_fi": "Harjavalta",
        "nimi_sv": "Harjavalta",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 6869,
        "maakuntanro": 3,
        "maakuntanimi_fi": "Satakunta",
        "maakuntanimi_sv": "Satakunta"
    },
    {
        "kuntanro": 81,
        "nimi_fi": "Hartola",
        "nimi_sv": "Gustav Adolfs",
        "kuntamuoto": "Kunta",
        "asukkaita": 2655,
        "maakuntanro": 6,
        "maakuntanimi_fi": "Päijät-Häme",
        "maakuntanimi_sv": "Päijänne-Tavastland"
    },
    {
        "kuntanro": 82,
        "nimi_fi": "Hattula",
        "nimi_sv": "Hattula",
        "kuntamuoto": "Kunta",
        "asukkaita": 9389,
        "maakuntanro": 4,
        "maakuntanimi_fi": "Kanta-Häme",
        "maakuntanimi_sv": "Egentliga Tavastland"
    },
    {
        "kuntanro": 86,
        "nimi_fi": "Hausjärvi",
        "nimi_sv": "Hausjärvi",
        "kuntamuoto": "Kunta",
        "asukkaita": 8175,
        "maakuntanro": 4,
        "maakuntanimi_fi": "Kanta-Häme",
        "maakuntanimi_sv": "Egentliga Tavastland"
    },
    {
        "kuntanro": 111,
        "nimi_fi": "Heinola",
        "nimi_sv": "Heinola",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 18497,
        "maakuntanro": 6,
        "maakuntanimi_fi": "Päijät-Häme",
        "maakuntanimi_sv": "Päijänne-Tavastland"
    },
    {
        "kuntanro": 90,
        "nimi_fi": "Heinävesi",
        "nimi_sv": "Heinävesi",
        "kuntamuoto": "Kunta",
        "asukkaita": 3196,
        "maakuntanro": 11,
        "maakuntanimi_fi": "Pohjois-Karjala",
        "maakuntanimi_sv": "Norra Karelen"
    },
    {
        "kuntanro": 91,
        "nimi_fi": "Helsinki",
        "nimi_sv": "Helsingfors",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 656920,
        "maakuntanro": 1,
        "maakuntanimi_fi": "Uusimaa",
        "maakuntanimi_sv": "Nyland"
    },
    {
        "kuntanro": 97,
        "nimi_fi": "Hirvensalmi",
        "nimi_sv": "Hirvensalmi",
        "kuntamuoto": "Kunta",
        "asukkaita": 2156,
        "maakuntanro": 9,
        "maakuntanimi_fi": "Etelä-Savo",
        "maakuntanimi_sv": "Södra Savolax"
    },
    {
        "kuntanro": 98,
        "nimi_fi": "Hollola",
        "nimi_sv": "Hollola",
        "kuntamuoto": "Kunta",
        "asukkaita": 23251,
        "maakuntanro": 6,
        "maakuntanimi_fi": "Päijät-Häme",
        "maakuntanimi_sv": "Päijänne-Tavastland"
    },
    {
        "kuntanro": 102,
        "nimi_fi": "Huittinen",
        "nimi_sv": "Vittis",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 9937,
        "maakuntanro": 3,
        "maakuntanimi_fi": "Satakunta",
        "maakuntanimi_sv": "Satakunta"
    },
    {
        "kuntanro": 103,
        "nimi_fi": "Humppila",
        "nimi_sv": "Humppila",
        "kuntamuoto": "Kunta",
        "asukkaita": 2174,
        "maakuntanro": 4,
        "maakuntanimi_fi": "Kanta-Häme",
        "maakuntanimi_sv": "Egentliga Tavastland"
    },
    {
        "kuntanro": 105,
        "nimi_fi": "Hyrynsalmi",
        "nimi_sv": "Hyrynsalmi",
        "kuntamuoto": "Kunta",
        "asukkaita": 2199,
        "maakuntanro": 17,
        "maakuntanimi_fi": "Kainuu",
        "maakuntanimi_sv": "Kajanaland"
    },
    {
        "kuntanro": 106,
        "nimi_fi": "Hyvinkää",
        "nimi_sv": "Hyvinge",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 46576,
        "maakuntanro": 1,
        "maakuntanimi_fi": "Uusimaa",
        "maakuntanimi_sv": "Nyland"
    },
    {
        "kuntanro": 108,
        "nimi_fi": "Hämeenkyrö",
        "nimi_sv": "Tavastkyro",
        "kuntamuoto": "Kunta",
        "asukkaita": 10344,
        "maakuntanro": 5,
        "maakuntanimi_fi": "Pirkanmaa",
        "maakuntanimi_sv": "Birkaland"
    },
    {
        "kuntanro": 109,
        "nimi_fi": "Hämeenlinna",
        "nimi_sv": "Tavastehus",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 67848,
        "maakuntanro": 4,
        "maakuntanimi_fi": "Kanta-Häme",
        "maakuntanimi_sv": "Egentliga Tavastland"
    },
    {
        "kuntanro": 139,
        "nimi_fi": "Ii",
        "nimi_sv": "Ijo",
        "kuntamuoto": "Kunta",
        "asukkaita": 9848,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 140,
        "nimi_fi": "Iisalmi",
        "nimi_sv": "Idensalmi",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 21124,
        "maakuntanro": 10,
        "maakuntanimi_fi": "Pohjois-Savo",
        "maakuntanimi_sv": "Norra Savolax"
    },
    {
        "kuntanro": 142,
        "nimi_fi": "Iitti",
        "nimi_sv": "Itis",
        "kuntamuoto": "Kunta",
        "asukkaita": 6625,
        "maakuntanro": 6,
        "maakuntanimi_fi": "Päijät-Häme",
        "maakuntanimi_sv": "Päijänne-Tavastland"
    },
    {
        "kuntanro": 143,
        "nimi_fi": "Ikaalinen",
        "nimi_sv": "Ikalis",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 6866,
        "maakuntanro": 5,
        "maakuntanimi_fi": "Pirkanmaa",
        "maakuntanimi_sv": "Birkaland"
    },
    {
        "kuntanro": 145,
        "nimi_fi": "Ilmajoki",
        "nimi_sv": "Ilmola",
        "kuntamuoto": "Kunta",
        "asukkaita": 12294,
        "maakuntanro": 13,
        "maakuntanimi_fi": "Etelä-Pohjanmaa",
        "maakuntanimi_sv": "Södra Österbotten"
    },
    {
        "kuntanro": 146,
        "nimi_fi": "Ilomantsi",
        "nimi_sv": "Ilomants",
        "kuntamuoto": "Kunta",
        "asukkaita": 4749,
        "maakuntanro": 11,
        "maakuntanimi_fi": "Pohjois-Karjala",
        "maakuntanimi_sv": "Norra Karelen"
    },
    {
        "kuntanro": 153,
        "nimi_fi": "Imatra",
        "nimi_sv": "Imatra",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 26075,
        "maakuntanro": 8,
        "maakuntanimi_fi": "Etelä-Karjala",
        "maakuntanimi_sv": "Södra Karelen"
    },
    {
        "kuntanro": 148,
        "nimi_fi": "Inari",
        "nimi_sv": "Enare",
        "kuntamuoto": "Kunta",
        "asukkaita": 6862,
        "maakuntanro": 18,
        "maakuntanimi_fi": "Lappi",
        "maakuntanimi_sv": "Lappland"
    },
    {
        "kuntanro": 149,
        "nimi_fi": "Inkoo",
        "nimi_sv": "Ingå",
        "kuntamuoto": "Kunta",
        "asukkaita": 5321,
        "maakuntanro": 1,
        "maakuntanimi_fi": "Uusimaa",
        "maakuntanimi_sv": "Nyland"
    },
    {
        "kuntanro": 151,
        "nimi_fi": "Isojoki",
        "nimi_sv": "Storå",
        "kuntamuoto": "Kunta",
        "asukkaita": 1925,
        "maakuntanro": 13,
        "maakuntanimi_fi": "Etelä-Pohjanmaa",
        "maakuntanimi_sv": "Södra Österbotten"
    },
    {
        "kuntanro": 152,
        "nimi_fi": "Isokyrö",
        "nimi_sv": "Storkyro",
        "kuntamuoto": "Kunta",
        "asukkaita": 4471,
        "maakuntanro": 13,
        "maakuntanimi_fi": "Etelä-Pohjanmaa",
        "maakuntanimi_sv": "Södra Österbotten"
    },
    {
        "kuntanro": 165,
        "nimi_fi": "Janakkala",
        "nimi_sv": "Janakkala",
        "kuntamuoto": "Kunta",
        "asukkaita": 16237,
        "maakuntanro": 4,
        "maakuntanimi_fi": "Kanta-Häme",
        "maakuntanimi_sv": "Egentliga Tavastland"
    },
    {
        "kuntanro": 167,
        "nimi_fi": "Joensuu",
        "nimi_sv": "Joensuu",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 76935,
        "maakuntanro": 11,
        "maakuntanimi_fi": "Pohjois-Karjala",
        "maakuntanimi_sv": "Norra Karelen"
    },
    {
        "kuntanro": 169,
        "nimi_fi": "Jokioinen",
        "nimi_sv": "Jockis",
        "kuntamuoto": "Kunta",
        "asukkaita": 5061,
        "maakuntanro": 4,
        "maakuntanimi_fi": "Kanta-Häme",
        "maakuntanimi_sv": "Egentliga Tavastland"
    },
    {
        "kuntanro": 170,
        "nimi_fi": "Jomala",
        "nimi_sv": "Jomala",
        "kuntamuoto": "Kunta",
        "asukkaita": 5386,
        "maakuntanro": 19,
        "maakuntanimi_fi": "Ahvenanmaa",
        "maakuntanimi_sv": "Åland"
    },
    {
        "kuntanro": 171,
        "nimi_fi": "Joroinen",
        "nimi_sv": "Jorois",
        "kuntamuoto": "Kunta",
        "asukkaita": 4689,
        "maakuntanro": 10,
        "maakuntanimi_fi": "Pohjois-Savo",
        "maakuntanimi_sv": "Norra Savolax"
    },
    {
        "kuntanro": 172,
        "nimi_fi": "Joutsa",
        "nimi_sv": "Joutsa",
        "kuntamuoto": "Kunta",
        "asukkaita": 4297,
        "maakuntanro": 12,
        "maakuntanimi_fi": "Keski-Suomi",
        "maakuntanimi_sv": "Mellersta Finland"
    },
    {
        "kuntanro": 176,
        "nimi_fi": "Juuka",
        "nimi_sv": "Juga",
        "kuntamuoto": "Kunta",
        "asukkaita": 4527,
        "maakuntanro": 11,
        "maakuntanimi_fi": "Pohjois-Karjala",
        "maakuntanimi_sv": "Norra Karelen"
    },
    {
        "kuntanro": 177,
        "nimi_fi": "Juupajoki",
        "nimi_sv": "Juupajoki",
        "kuntamuoto": "Kunta",
        "asukkaita": 1800,
        "maakuntanro": 5,
        "maakuntanimi_fi": "Pirkanmaa",
        "maakuntanimi_sv": "Birkaland"
    },
    {
        "kuntanro": 178,
        "nimi_fi": "Juva",
        "nimi_sv": "Juva",
        "kuntamuoto": "Kunta",
        "asukkaita": 5932,
        "maakuntanro": 9,
        "maakuntanimi_fi": "Etelä-Savo",
        "maakuntanimi_sv": "Södra Savolax"
    },
    {
        "kuntanro": 179,
        "nimi_fi": "Jyväskylä",
        "nimi_sv": "Jyväskylä",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 143420,
        "maakuntanro": 12,
        "maakuntanimi_fi": "Keski-Suomi",
        "maakuntanimi_sv": "Mellersta Finland"
    },
    {
        "kuntanro": 181,
        "nimi_fi": "Jämijärvi",
        "nimi_sv": "Jämijärvi",
        "kuntamuoto": "Kunta",
        "asukkaita": 1707,
        "maakuntanro": 3,
        "maakuntanimi_fi": "Satakunta",
        "maakuntanimi_sv": "Satakunta"
    },
    {
        "kuntanro": 182,
        "nimi_fi": "Jämsä",
        "nimi_sv": "Jämsä",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 19887,
        "maakuntanro": 12,
        "maakuntanimi_fi": "Keski-Suomi",
        "maakuntanimi_sv": "Mellersta Finland"
    },
    {
        "kuntanro": 186,
        "nimi_fi": "Järvenpää",
        "nimi_sv": "Träskända",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 44455,
        "maakuntanro": 1,
        "maakuntanimi_fi": "Uusimaa",
        "maakuntanimi_sv": "Nyland"
    },
    {
        "kuntanro": 202,
        "nimi_fi": "Kaarina",
        "nimi_sv": "S:t Karins",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 34667,
        "maakuntanro": 2,
        "maakuntanimi_fi": "Varsinais-Suomi",
        "maakuntanimi_sv": "Egentliga Finland"
    },
    {
        "kuntanro": 204,
        "nimi_fi": "Kaavi",
        "nimi_sv": "Kaavi",
        "kuntamuoto": "Kunta",
        "asukkaita": 2807,
        "maakuntanro": 10,
        "maakuntanimi_fi": "Pohjois-Savo",
        "maakuntanimi_sv": "Norra Savolax"
    },
    {
        "kuntanro": 205,
        "nimi_fi": "Kajaani",
        "nimi_sv": "Kajana",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 36567,
        "maakuntanro": 17,
        "maakuntanimi_fi": "Kainuu",
        "maakuntanimi_sv": "Kajanaland"
    },
    {
        "kuntanro": 208,
        "nimi_fi": "Kalajoki",
        "nimi_sv": "Kalajoki",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 12400,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 211,
        "nimi_fi": "Kangasala",
        "nimi_sv": "Kangasala",
        "kuntamuoto": "Kunta",
        "asukkaita": 32214,
        "maakuntanro": 5,
        "maakuntanimi_fi": "Pirkanmaa",
        "maakuntanimi_sv": "Birkaland"
    },
    {
        "kuntanro": 213,
        "nimi_fi": "Kangasniemi",
        "nimi_sv": "Kangasniemi",
        "kuntamuoto": "Kunta",
        "asukkaita": 5312,
        "maakuntanro": 9,
        "maakuntanimi_fi": "Etelä-Savo",
        "maakuntanimi_sv": "Södra Savolax"
    },
    {
        "kuntanro": 214,
        "nimi_fi": "Kankaanpää",
        "nimi_sv": "Kankaanpää",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 12758,
        "maakuntanro": 3,
        "maakuntanimi_fi": "Satakunta",
        "maakuntanimi_sv": "Satakunta"
    },
    {
        "kuntanro": 216,
        "nimi_fi": "Kannonkoski",
        "nimi_sv": "Kannonkoski",
        "kuntamuoto": "Kunta",
        "asukkaita": 1323,
        "maakuntanro": 12,
        "maakuntanimi_fi": "Keski-Suomi",
        "maakuntanimi_sv": "Mellersta Finland"
    },
    {
        "kuntanro": 217,
        "nimi_fi": "Kannus",
        "nimi_sv": "Kannus",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 5426,
        "maakuntanro": 15,
        "maakuntanimi_fi": "Keski-Pohjanmaa",
        "maakuntanimi_sv": "Mellersta Österbotten"
    },
    {
        "kuntanro": 218,
        "nimi_fi": "Karijoki",
        "nimi_sv": "Bötom",
        "kuntamuoto": "Kunta",
        "asukkaita": 1207,
        "maakuntanro": 13,
        "maakuntanimi_fi": "Etelä-Pohjanmaa",
        "maakuntanimi_sv": "Södra Österbotten"
    },
    {
        "kuntanro": 224,
        "nimi_fi": "Karkkila",
        "nimi_sv": "Högfors",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 8696,
        "maakuntanro": 1,
        "maakuntanimi_fi": "Uusimaa",
        "maakuntanimi_sv": "Nyland"
    },
    {
        "kuntanro": 226,
        "nimi_fi": "Karstula",
        "nimi_sv": "Karstula",
        "kuntamuoto": "Kunta",
        "asukkaita": 3858,
        "maakuntanro": 12,
        "maakuntanimi_fi": "Keski-Suomi",
        "maakuntanimi_sv": "Mellersta Finland"
    },
    {
        "kuntanro": 230,
        "nimi_fi": "Karvia",
        "nimi_sv": "Karvia",
        "kuntamuoto": "Kunta",
        "asukkaita": 2322,
        "maakuntanro": 3,
        "maakuntanimi_fi": "Satakunta",
        "maakuntanimi_sv": "Satakunta"
    },
    {
        "kuntanro": 231,
        "nimi_fi": "Kaskinen",
        "nimi_sv": "Kaskö",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 1278,
        "maakuntanro": 14,
        "maakuntanimi_fi": "Pohjanmaa",
        "maakuntanimi_sv": "Österbotten"
    },
    {
        "kuntanro": 232,
        "nimi_fi": "Kauhajoki",
        "nimi_sv": "Kauhajoki",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 13007,
        "maakuntanro": 13,
        "maakuntanimi_fi": "Etelä-Pohjanmaa",
        "maakuntanimi_sv": "Södra Österbotten"
    },
    {
        "kuntanro": 233,
        "nimi_fi": "Kauhava",
        "nimi_sv": "Kauhava",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 15514,
        "maakuntanro": 13,
        "maakuntanimi_fi": "Etelä-Pohjanmaa",
        "maakuntanimi_sv": "Södra Österbotten"
    },
    {
        "kuntanro": 235,
        "nimi_fi": "Kauniainen",
        "nimi_sv": "Grankulla",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 10178,
        "maakuntanro": 1,
        "maakuntanimi_fi": "Uusimaa",
        "maakuntanimi_sv": "Nyland"
    },
    {
        "kuntanro": 236,
        "nimi_fi": "Kaustinen",
        "nimi_sv": "Kaustby",
        "kuntamuoto": "Kunta",
        "asukkaita": 4228,
        "maakuntanro": 15,
        "maakuntanimi_fi": "Keski-Pohjanmaa",
        "maakuntanimi_sv": "Mellersta Österbotten"
    },
    {
        "kuntanro": 239,
        "nimi_fi": "Keitele",
        "nimi_sv": "Keitele",
        "kuntamuoto": "Kunta",
        "asukkaita": 2155,
        "maakuntanro": 10,
        "maakuntanimi_fi": "Pohjois-Savo",
        "maakuntanimi_sv": "Norra Savolax"
    },
    {
        "kuntanro": 240,
        "nimi_fi": "Kemi",
        "nimi_sv": "Kemi",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 20437,
        "maakuntanro": 18,
        "maakuntanimi_fi": "Lappi",
        "maakuntanimi_sv": "Lappland"
    },
    {
        "kuntanro": 320,
        "nimi_fi": "Kemijärvi",
        "nimi_sv": "Kemijärvi",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 7191,
        "maakuntanro": 18,
        "maakuntanimi_fi": "Lappi",
        "maakuntanimi_sv": "Lappland"
    },
    {
        "kuntanro": 241,
        "nimi_fi": "Keminmaa",
        "nimi_sv": "Keminmaa",
        "kuntamuoto": "Kunta",
        "asukkaita": 7984,
        "maakuntanro": 18,
        "maakuntanimi_fi": "Lappi",
        "maakuntanimi_sv": "Lappland"
    },
    {
        "kuntanro": 322,
        "nimi_fi": "Kemiönsaari",
        "nimi_sv": "Kimitoön",
        "kuntamuoto": "Kunta",
        "asukkaita": 6609,
        "maakuntanro": 2,
        "maakuntanimi_fi": "Varsinais-Suomi",
        "maakuntanimi_sv": "Egentliga Finland"
    },
    {
        "kuntanro": 244,
        "nimi_fi": "Kempele",
        "nimi_sv": "Kempele",
        "kuntamuoto": "Kunta",
        "asukkaita": 18796,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 245,
        "nimi_fi": "Kerava",
        "nimi_sv": "Kervo",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 37105,
        "maakuntanro": 1,
        "maakuntanimi_fi": "Uusimaa",
        "maakuntanimi_sv": "Nyland"
    },
    {
        "kuntanro": 249,
        "nimi_fi": "Keuruu",
        "nimi_sv": "Keuru",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 9486,
        "maakuntanro": 12,
        "maakuntanimi_fi": "Keski-Suomi",
        "maakuntanimi_sv": "Mellersta Finland"
    },
    {
        "kuntanro": 250,
        "nimi_fi": "Kihniö",
        "nimi_sv": "Kihniö",
        "kuntamuoto": "Kunta",
        "asukkaita": 1822,
        "maakuntanro": 5,
        "maakuntanimi_fi": "Pirkanmaa",
        "maakuntanimi_sv": "Birkaland"
    },
    {
        "kuntanro": 256,
        "nimi_fi": "Kinnula",
        "nimi_sv": "Kinnula",
        "kuntamuoto": "Kunta",
        "asukkaita": 1597,
        "maakuntanro": 12,
        "maakuntanimi_fi": "Keski-Suomi",
        "maakuntanimi_sv": "Mellersta Finland"
    },
    {
        "kuntanro": 257,
        "nimi_fi": "Kirkkonummi",
        "nimi_sv": "Kyrkslätt",
        "kuntamuoto": "Kunta",
        "asukkaita": 40082,
        "maakuntanro": 1,
        "maakuntanimi_fi": "Uusimaa",
        "maakuntanimi_sv": "Nyland"
    },
    {
        "kuntanro": 260,
        "nimi_fi": "Kitee",
        "nimi_sv": "Kides",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 9933,
        "maakuntanro": 11,
        "maakuntanimi_fi": "Pohjois-Karjala",
        "maakuntanimi_sv": "Norra Karelen"
    },
    {
        "kuntanro": 261,
        "nimi_fi": "Kittilä",
        "nimi_sv": "Kittilä",
        "kuntamuoto": "Kunta",
        "asukkaita": 6436,
        "maakuntanro": 18,
        "maakuntanimi_fi": "Lappi",
        "maakuntanimi_sv": "Lappland"
    },
    {
        "kuntanro": 263,
        "nimi_fi": "Kiuruvesi",
        "nimi_sv": "Kiuruvesi",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 7854,
        "maakuntanro": 10,
        "maakuntanimi_fi": "Pohjois-Savo",
        "maakuntanimi_sv": "Norra Savolax"
    },
    {
        "kuntanro": 265,
        "nimi_fi": "Kivijärvi",
        "nimi_sv": "Kivijärvi",
        "kuntamuoto": "Kunta",
        "asukkaita": 1107,
        "maakuntanro": 12,
        "maakuntanimi_fi": "Keski-Suomi",
        "maakuntanimi_sv": "Mellersta Finland"
    },
    {
        "kuntanro": 271,
        "nimi_fi": "Kokemäki",
        "nimi_sv": "Kumo",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 7013,
        "maakuntanro": 3,
        "maakuntanimi_fi": "Satakunta",
        "maakuntanimi_sv": "Satakunta"
    },
    {
        "kuntanro": 272,
        "nimi_fi": "Kokkola",
        "nimi_sv": "Karleby",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 47772,
        "maakuntanro": 15,
        "maakuntanimi_fi": "Keski-Pohjanmaa",
        "maakuntanimi_sv": "Mellersta Österbotten"
    },
    {
        "kuntanro": 273,
        "nimi_fi": "Kolari",
        "nimi_sv": "Kolari",
        "kuntamuoto": "Kunta",
        "asukkaita": 3925,
        "maakuntanro": 18,
        "maakuntanimi_fi": "Lappi",
        "maakuntanimi_sv": "Lappland"
    },
    {
        "kuntanro": 275,
        "nimi_fi": "Konnevesi",
        "nimi_sv": "Konnevesi",
        "kuntamuoto": "Kunta",
        "asukkaita": 2593,
        "maakuntanro": 12,
        "maakuntanimi_fi": "Keski-Suomi",
        "maakuntanimi_sv": "Mellersta Finland"
    },
    {
        "kuntanro": 276,
        "nimi_fi": "Kontiolahti",
        "nimi_sv": "Kontiolax",
        "kuntamuoto": "Kunta",
        "asukkaita": 14857,
        "maakuntanro": 11,
        "maakuntanimi_fi": "Pohjois-Karjala",
        "maakuntanimi_sv": "Norra Karelen"
    },
    {
        "kuntanro": 280,
        "nimi_fi": "Korsnäs",
        "nimi_sv": "Korsnäs",
        "kuntamuoto": "Kunta",
        "asukkaita": 2068,
        "maakuntanro": 14,
        "maakuntanimi_fi": "Pohjanmaa",
        "maakuntanimi_sv": "Österbotten"
    },
    {
        "kuntanro": 284,
        "nimi_fi": "Koski Tl",
        "nimi_sv": "Koskis",
        "kuntamuoto": "Kunta",
        "asukkaita": 2292,
        "maakuntanro": 2,
        "maakuntanimi_fi": "Varsinais-Suomi",
        "maakuntanimi_sv": "Egentliga Finland"
    },
    {
        "kuntanro": 285,
        "nimi_fi": "Kotka",
        "nimi_sv": "Kotka",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 51668,
        "maakuntanro": 7,
        "maakuntanimi_fi": "Kymenlaakso",
        "maakuntanimi_sv": "Kymmenedalen"
    },
    {
        "kuntanro": 286,
        "nimi_fi": "Kouvola",
        "nimi_sv": "Kouvola",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 81187,
        "maakuntanro": 7,
        "maakuntanimi_fi": "Kymenlaakso",
        "maakuntanimi_sv": "Kymmenedalen"
    },
    {
        "kuntanro": 287,
        "nimi_fi": "Kristiinankaupunki",
        "nimi_sv": "Kristinestad",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 6404,
        "maakuntanro": 14,
        "maakuntanimi_fi": "Pohjanmaa",
        "maakuntanimi_sv": "Österbotten"
    },
    {
        "kuntanro": 288,
        "nimi_fi": "Kruunupyy",
        "nimi_sv": "Kronoby",
        "kuntamuoto": "Kunta",
        "asukkaita": 6416,
        "maakuntanro": 14,
        "maakuntanimi_fi": "Pohjanmaa",
        "maakuntanimi_sv": "Österbotten"
    },
    {
        "kuntanro": 290,
        "nimi_fi": "Kuhmo",
        "nimi_sv": "Kuhmo",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 8042,
        "maakuntanro": 17,
        "maakuntanimi_fi": "Kainuu",
        "maakuntanimi_sv": "Kajanaland"
    },
    {
        "kuntanro": 291,
        "nimi_fi": "Kuhmoinen",
        "nimi_sv": "Kuhmois",
        "kuntamuoto": "Kunta",
        "asukkaita": 2161,
        "maakuntanro": 5,
        "maakuntanimi_fi": "Pirkanmaa",
        "maakuntanimi_sv": "Birkaland"
    },
    {
        "kuntanro": 295,
        "nimi_fi": "Kumlinge",
        "nimi_sv": "Kumlinge",
        "kuntamuoto": "Kunta",
        "asukkaita": 307,
        "maakuntanro": 19,
        "maakuntanimi_fi": "Ahvenanmaa",
        "maakuntanimi_sv": "Åland"
    },
    {
        "kuntanro": 297,
        "nimi_fi": "Kuopio",
        "nimi_sv": "Kuopio",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 120210,
        "maakuntanro": 10,
        "maakuntanimi_fi": "Pohjois-Savo",
        "maakuntanimi_sv": "Norra Savolax"
    },
    {
        "kuntanro": 300,
        "nimi_fi": "Kuortane",
        "nimi_sv": "Kuortane",
        "kuntamuoto": "Kunta",
        "asukkaita": 3534,
        "maakuntanro": 13,
        "maakuntanimi_fi": "Etelä-Pohjanmaa",
        "maakuntanimi_sv": "Södra Österbotten"
    },
    {
        "kuntanro": 301,
        "nimi_fi": "Kurikka",
        "nimi_sv": "Kurikka",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 20456,
        "maakuntanro": 13,
        "maakuntanimi_fi": "Etelä-Pohjanmaa",
        "maakuntanimi_sv": "Södra Österbotten"
    },
    {
        "kuntanro": 304,
        "nimi_fi": "Kustavi",
        "nimi_sv": "Gustavs",
        "kuntamuoto": "Kunta",
        "asukkaita": 962,
        "maakuntanro": 2,
        "maakuntanimi_fi": "Varsinais-Suomi",
        "maakuntanimi_sv": "Egentliga Finland"
    },
    {
        "kuntanro": 305,
        "nimi_fi": "Kuusamo",
        "nimi_sv": "Kuusamo",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 15213,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 312,
        "nimi_fi": "Kyyjärvi",
        "nimi_sv": "Kyyjärvi",
        "kuntamuoto": "Kunta",
        "asukkaita": 1288,
        "maakuntanro": 12,
        "maakuntanimi_fi": "Keski-Suomi",
        "maakuntanimi_sv": "Mellersta Finland"
    },
    {
        "kuntanro": 316,
        "nimi_fi": "Kärkölä",
        "nimi_sv": "Kärkölä",
        "kuntamuoto": "Kunta",
        "asukkaita": 4326,
        "maakuntanro": 6,
        "maakuntanimi_fi": "Päijät-Häme",
        "maakuntanimi_sv": "Päijänne-Tavastland"
    },
    {
        "kuntanro": 317,
        "nimi_fi": "Kärsämäki",
        "nimi_sv": "Kärsämäki",
        "kuntamuoto": "Kunta",
        "asukkaita": 2538,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 318,
        "nimi_fi": "Kökar",
        "nimi_sv": "Kökar",
        "kuntamuoto": "Kunta",
        "asukkaita": 225,
        "maakuntanro": 19,
        "maakuntanimi_fi": "Ahvenanmaa",
        "maakuntanimi_sv": "Åland"
    },
    {
        "kuntanro": 398,
        "nimi_fi": "Lahti",
        "nimi_sv": "Lahtis",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 119984,
        "maakuntanro": 6,
        "maakuntanimi_fi": "Päijät-Häme",
        "maakuntanimi_sv": "Päijänne-Tavastland"
    },
    {
        "kuntanro": 399,
        "nimi_fi": "Laihia",
        "nimi_sv": "Laihela",
        "kuntamuoto": "Kunta",
        "asukkaita": 7996,
        "maakuntanro": 14,
        "maakuntanimi_fi": "Pohjanmaa",
        "maakuntanimi_sv": "Österbotten"
    },
    {
        "kuntanro": 400,
        "nimi_fi": "Laitila",
        "nimi_sv": "Letala",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 8468,
        "maakuntanro": 2,
        "maakuntanimi_fi": "Varsinais-Suomi",
        "maakuntanimi_sv": "Egentliga Finland"
    },
    {
        "kuntanro": 407,
        "nimi_fi": "Lapinjärvi",
        "nimi_sv": "Lappträsk",
        "kuntamuoto": "Kunta",
        "asukkaita": 2621,
        "maakuntanro": 1,
        "maakuntanimi_fi": "Uusimaa",
        "maakuntanimi_sv": "Nyland"
    },
    {
        "kuntanro": 402,
        "nimi_fi": "Lapinlahti",
        "nimi_sv": "Lapinlahti",
        "kuntamuoto": "Kunta",
        "asukkaita": 9358,
        "maakuntanro": 10,
        "maakuntanimi_fi": "Pohjois-Savo",
        "maakuntanimi_sv": "Norra Savolax"
    },
    {
        "kuntanro": 403,
        "nimi_fi": "Lappajärvi",
        "nimi_sv": "Lappajärvi",
        "kuntamuoto": "Kunta",
        "asukkaita": 2925,
        "maakuntanro": 13,
        "maakuntanimi_fi": "Etelä-Pohjanmaa",
        "maakuntanimi_sv": "Södra Österbotten"
    },
    {
        "kuntanro": 405,
        "nimi_fi": "Lappeenranta",
        "nimi_sv": "Villmanstrand",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 72662,
        "maakuntanro": 8,
        "maakuntanimi_fi": "Etelä-Karjala",
        "maakuntanimi_sv": "Södra Karelen"
    },
    {
        "kuntanro": 408,
        "nimi_fi": "Lapua",
        "nimi_sv": "Lappo",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 14221,
        "maakuntanro": 13,
        "maakuntanimi_fi": "Etelä-Pohjanmaa",
        "maakuntanimi_sv": "Södra Österbotten"
    },
    {
        "kuntanro": 410,
        "nimi_fi": "Laukaa",
        "nimi_sv": "Laukas",
        "kuntamuoto": "Kunta",
        "asukkaita": 18823,
        "maakuntanro": 12,
        "maakuntanimi_fi": "Keski-Suomi",
        "maakuntanimi_sv": "Mellersta Finland"
    },
    {
        "kuntanro": 416,
        "nimi_fi": "Lemi",
        "nimi_sv": "Lemi",
        "kuntamuoto": "Kunta",
        "asukkaita": 2964,
        "maakuntanro": 8,
        "maakuntanimi_fi": "Etelä-Karjala",
        "maakuntanimi_sv": "Södra Karelen"
    },
    {
        "kuntanro": 417,
        "nimi_fi": "Lemland",
        "nimi_sv": "Lemland",
        "kuntamuoto": "Kunta",
        "asukkaita": 2114,
        "maakuntanro": 19,
        "maakuntanimi_fi": "Ahvenanmaa",
        "maakuntanimi_sv": "Åland"
    },
    {
        "kuntanro": 418,
        "nimi_fi": "Lempäälä",
        "nimi_sv": "Lempäälä",
        "kuntamuoto": "Kunta",
        "asukkaita": 23828,
        "maakuntanro": 5,
        "maakuntanimi_fi": "Pirkanmaa",
        "maakuntanimi_sv": "Birkaland"
    },
    {
        "kuntanro": 420,
        "nimi_fi": "Leppävirta",
        "nimi_sv": "Leppävirta",
        "kuntamuoto": "Kunta",
        "asukkaita": 9402,
        "maakuntanro": 10,
        "maakuntanimi_fi": "Pohjois-Savo",
        "maakuntanimi_sv": "Norra Savolax"
    },
    {
        "kuntanro": 421,
        "nimi_fi": "Lestijärvi",
        "nimi_sv": "Lestijärvi",
        "kuntamuoto": "Kunta",
        "asukkaita": 722,
        "maakuntanro": 15,
        "maakuntanimi_fi": "Keski-Pohjanmaa",
        "maakuntanimi_sv": "Mellersta Österbotten"
    },
    {
        "kuntanro": 422,
        "nimi_fi": "Lieksa",
        "nimi_sv": "Lieksa",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 10719,
        "maakuntanro": 11,
        "maakuntanimi_fi": "Pohjois-Karjala",
        "maakuntanimi_sv": "Norra Karelen"
    },
    {
        "kuntanro": 423,
        "nimi_fi": "Lieto",
        "nimi_sv": "Lundo",
        "kuntamuoto": "Kunta",
        "asukkaita": 20146,
        "maakuntanro": 2,
        "maakuntanimi_fi": "Varsinais-Suomi",
        "maakuntanimi_sv": "Egentliga Finland"
    },
    {
        "kuntanro": 425,
        "nimi_fi": "Liminka",
        "nimi_sv": "Limingo",
        "kuntamuoto": "Kunta",
        "asukkaita": 10238,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 426,
        "nimi_fi": "Liperi",
        "nimi_sv": "Libelits",
        "kuntamuoto": "Kunta",
        "asukkaita": 11994,
        "maakuntanro": 11,
        "maakuntanimi_fi": "Pohjois-Karjala",
        "maakuntanimi_sv": "Norra Karelen"
    },
    {
        "kuntanro": 444,
        "nimi_fi": "Lohja",
        "nimi_sv": "Lojo",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 45886,
        "maakuntanro": 1,
        "maakuntanimi_fi": "Uusimaa",
        "maakuntanimi_sv": "Nyland"
    },
    {
        "kuntanro": 430,
        "nimi_fi": "Loimaa",
        "nimi_sv": "Loimaa",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 15770,
        "maakuntanro": 2,
        "maakuntanimi_fi": "Varsinais-Suomi",
        "maakuntanimi_sv": "Egentliga Finland"
    },
    {
        "kuntanro": 433,
        "nimi_fi": "Loppi",
        "nimi_sv": "Loppi",
        "kuntamuoto": "Kunta",
        "asukkaita": 7853,
        "maakuntanro": 4,
        "maakuntanimi_fi": "Kanta-Häme",
        "maakuntanimi_sv": "Egentliga Tavastland"
    },
    {
        "kuntanro": 434,
        "nimi_fi": "Loviisa",
        "nimi_sv": "Lovisa",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 14745,
        "maakuntanro": 1,
        "maakuntanimi_fi": "Uusimaa",
        "maakuntanimi_sv": "Nyland"
    },
    {
        "kuntanro": 435,
        "nimi_fi": "Luhanka",
        "nimi_sv": "Luhanka",
        "kuntamuoto": "Kunta",
        "asukkaita": 699,
        "maakuntanro": 12,
        "maakuntanimi_fi": "Keski-Suomi",
        "maakuntanimi_sv": "Mellersta Finland"
    },
    {
        "kuntanro": 436,
        "nimi_fi": "Lumijoki",
        "nimi_sv": "Lumijoki",
        "kuntamuoto": "Kunta",
        "asukkaita": 2036,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 438,
        "nimi_fi": "Lumparland",
        "nimi_sv": "Lumparland",
        "kuntamuoto": "Kunta",
        "asukkaita": 372,
        "maakuntanro": 19,
        "maakuntanimi_fi": "Ahvenanmaa",
        "maakuntanimi_sv": "Åland"
    },
    {
        "kuntanro": 440,
        "nimi_fi": "Luoto",
        "nimi_sv": "Larsmo",
        "kuntamuoto": "Kunta",
        "asukkaita": 5534,
        "maakuntanro": 14,
        "maakuntanimi_fi": "Pohjanmaa",
        "maakuntanimi_sv": "Österbotten"
    },
    {
        "kuntanro": 441,
        "nimi_fi": "Luumäki",
        "nimi_sv": "Luumäki",
        "kuntamuoto": "Kunta",
        "asukkaita": 4543,
        "maakuntanro": 8,
        "maakuntanimi_fi": "Etelä-Karjala",
        "maakuntanimi_sv": "Södra Karelen"
    },
    {
        "kuntanro": 475,
        "nimi_fi": "Maalahti",
        "nimi_sv": "Malax",
        "kuntamuoto": "Kunta",
        "asukkaita": 5451,
        "maakuntanro": 14,
        "maakuntanimi_fi": "Pohjanmaa",
        "maakuntanimi_sv": "Österbotten"
    },
    {
        "kuntanro": 478,
        "nimi_fi": "Maarianhamina",
        "nimi_sv": "Mariehamn",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 11705,
        "maakuntanro": 19,
        "maakuntanimi_fi": "Ahvenanmaa",
        "maakuntanimi_sv": "Åland"
    },
    {
        "kuntanro": 480,
        "nimi_fi": "Marttila",
        "nimi_sv": "S:t Mårtens",
        "kuntamuoto": "Kunta",
        "asukkaita": 1999,
        "maakuntanro": 2,
        "maakuntanimi_fi": "Varsinais-Suomi",
        "maakuntanimi_sv": "Egentliga Finland"
    },
    {
        "kuntanro": 481,
        "nimi_fi": "Masku",
        "nimi_sv": "Masku",
        "kuntamuoto": "Kunta",
        "asukkaita": 9543,
        "maakuntanro": 2,
        "maakuntanimi_fi": "Varsinais-Suomi",
        "maakuntanimi_sv": "Egentliga Finland"
    },
    {
        "kuntanro": 483,
        "nimi_fi": "Merijärvi",
        "nimi_sv": "Merijärvi",
        "kuntamuoto": "Kunta",
        "asukkaita": 1078,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 484,
        "nimi_fi": "Merikarvia",
        "nimi_sv": "Sastmola",
        "kuntamuoto": "Kunta",
        "asukkaita": 3066,
        "maakuntanro": 3,
        "maakuntanimi_fi": "Satakunta",
        "maakuntanimi_sv": "Satakunta"
    },
    {
        "kuntanro": 489,
        "nimi_fi": "Miehikkälä",
        "nimi_sv": "Miehikkälä",
        "kuntamuoto": "Kunta",
        "asukkaita": 1868,
        "maakuntanro": 7,
        "maakuntanimi_fi": "Kymenlaakso",
        "maakuntanimi_sv": "Kymmenedalen"
    },
    {
        "kuntanro": 491,
        "nimi_fi": "Mikkeli",
        "nimi_sv": "S:t Michel",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 52583,
        "maakuntanro": 9,
        "maakuntanimi_fi": "Etelä-Savo",
        "maakuntanimi_sv": "Södra Savolax"
    },
    {
        "kuntanro": 494,
        "nimi_fi": "Muhos",
        "nimi_sv": "Muhos",
        "kuntamuoto": "Kunta",
        "asukkaita": 8903,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 495,
        "nimi_fi": "Multia",
        "nimi_sv": "Multia",
        "kuntamuoto": "Kunta",
        "asukkaita": 1558,
        "maakuntanro": 12,
        "maakuntanimi_fi": "Keski-Suomi",
        "maakuntanimi_sv": "Mellersta Finland"
    },
    {
        "kuntanro": 498,
        "nimi_fi": "Muonio",
        "nimi_sv": "Muonio",
        "kuntamuoto": "Kunta",
        "asukkaita": 2297,
        "maakuntanro": 18,
        "maakuntanimi_fi": "Lappi",
        "maakuntanimi_sv": "Lappland"
    },
    {
        "kuntanro": 499,
        "nimi_fi": "Mustasaari",
        "nimi_sv": "Korsholm",
        "kuntamuoto": "Kunta",
        "asukkaita": 19453,
        "maakuntanro": 14,
        "maakuntanimi_fi": "Pohjanmaa",
        "maakuntanimi_sv": "Österbotten"
    },
    {
        "kuntanro": 500,
        "nimi_fi": "Muurame",
        "nimi_sv": "Muurame",
        "kuntamuoto": "Kunta",
        "asukkaita": 10267,
        "maakuntanro": 12,
        "maakuntanimi_fi": "Keski-Suomi",
        "maakuntanimi_sv": "Mellersta Finland"
    },
    {
        "kuntanro": 503,
        "nimi_fi": "Mynämäki",
        "nimi_sv": "Virmo",
        "kuntamuoto": "Kunta",
        "asukkaita": 7645,
        "maakuntanro": 2,
        "maakuntanimi_fi": "Varsinais-Suomi",
        "maakuntanimi_sv": "Egentliga Finland"
    },
    {
        "kuntanro": 504,
        "nimi_fi": "Myrskylä",
        "nimi_sv": "Mörskom",
        "kuntamuoto": "Kunta",
        "asukkaita": 1871,
        "maakuntanro": 1,
        "maakuntanimi_fi": "Uusimaa",
        "maakuntanimi_sv": "Nyland"
    },
    {
        "kuntanro": 505,
        "nimi_fi": "Mäntsälä",
        "nimi_sv": "Mäntsälä",
        "kuntamuoto": "Kunta",
        "asukkaita": 20783,
        "maakuntanro": 1,
        "maakuntanimi_fi": "Uusimaa",
        "maakuntanimi_sv": "Nyland"
    },
    {
        "kuntanro": 508,
        "nimi_fi": "Mänttä-Vilppula",
        "nimi_sv": "Mänttä-Vilppula",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 9673,
        "maakuntanro": 5,
        "maakuntanimi_fi": "Pirkanmaa",
        "maakuntanimi_sv": "Birkaland"
    },
    {
        "kuntanro": 507,
        "nimi_fi": "Mäntyharju",
        "nimi_sv": "Mäntyharju",
        "kuntamuoto": "Kunta",
        "asukkaita": 5676,
        "maakuntanro": 9,
        "maakuntanimi_fi": "Etelä-Savo",
        "maakuntanimi_sv": "Södra Savolax"
    },
    {
        "kuntanro": 529,
        "nimi_fi": "Naantali",
        "nimi_sv": "Nådendal",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 19427,
        "maakuntanro": 2,
        "maakuntanimi_fi": "Varsinais-Suomi",
        "maakuntanimi_sv": "Egentliga Finland"
    },
    {
        "kuntanro": 531,
        "nimi_fi": "Nakkila",
        "nimi_sv": "Nakkila",
        "kuntamuoto": "Kunta",
        "asukkaita": 5256,
        "maakuntanro": 3,
        "maakuntanimi_fi": "Satakunta",
        "maakuntanimi_sv": "Satakunta"
    },
    {
        "kuntanro": 535,
        "nimi_fi": "Nivala",
        "nimi_sv": "Nivala",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 10500,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 536,
        "nimi_fi": "Nokia",
        "nimi_sv": "Nokia",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 34476,
        "maakuntanro": 5,
        "maakuntanimi_fi": "Pirkanmaa",
        "maakuntanimi_sv": "Birkaland"
    },
    {
        "kuntanro": 538,
        "nimi_fi": "Nousiainen",
        "nimi_sv": "Nousis",
        "kuntamuoto": "Kunta",
        "asukkaita": 4693,
        "maakuntanro": 2,
        "maakuntanimi_fi": "Varsinais-Suomi",
        "maakuntanimi_sv": "Egentliga Finland"
    },
    {
        "kuntanro": 541,
        "nimi_fi": "Nurmes",
        "nimi_sv": "Nurmes",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 9501,
        "maakuntanro": 11,
        "maakuntanimi_fi": "Pohjois-Karjala",
        "maakuntanimi_sv": "Norra Karelen"
    },
    {
        "kuntanro": 543,
        "nimi_fi": "Nurmijärvi",
        "nimi_sv": "Nurmijärvi",
        "kuntamuoto": "Kunta",
        "asukkaita": 43663,
        "maakuntanro": 1,
        "maakuntanimi_fi": "Uusimaa",
        "maakuntanimi_sv": "Nyland"
    },
    {
        "kuntanro": 545,
        "nimi_fi": "Närpiö",
        "nimi_sv": "Närpes",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 9558,
        "maakuntanro": 14,
        "maakuntanimi_fi": "Pohjanmaa",
        "maakuntanimi_sv": "Österbotten"
    },
    {
        "kuntanro": 560,
        "nimi_fi": "Orimattila",
        "nimi_sv": "Orimattila",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 15882,
        "maakuntanro": 6,
        "maakuntanimi_fi": "Päijät-Häme",
        "maakuntanimi_sv": "Päijänne-Tavastland"
    },
    {
        "kuntanro": 561,
        "nimi_fi": "Oripää",
        "nimi_sv": "Oripää",
        "kuntamuoto": "Kunta",
        "asukkaita": 1334,
        "maakuntanro": 2,
        "maakuntanimi_fi": "Varsinais-Suomi",
        "maakuntanimi_sv": "Egentliga Finland"
    },
    {
        "kuntanro": 562,
        "nimi_fi": "Orivesi",
        "nimi_sv": "Orivesi",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 9008,
        "maakuntanro": 5,
        "maakuntanimi_fi": "Pirkanmaa",
        "maakuntanimi_sv": "Birkaland"
    },
    {
        "kuntanro": 563,
        "nimi_fi": "Oulainen",
        "nimi_sv": "Oulainen",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 7155,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 564,
        "nimi_fi": "Oulu",
        "nimi_sv": "Uleåborg",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 207327,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 309,
        "nimi_fi": "Outokumpu",
        "nimi_sv": "Outokumpu",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 6552,
        "maakuntanro": 11,
        "maakuntanimi_fi": "Pohjois-Karjala",
        "maakuntanimi_sv": "Norra Karelen"
    },
    {
        "kuntanro": 576,
        "nimi_fi": "Padasjoki",
        "nimi_sv": "Padasjoki",
        "kuntamuoto": "Kunta",
        "asukkaita": 2861,
        "maakuntanro": 6,
        "maakuntanimi_fi": "Päijät-Häme",
        "maakuntanimi_sv": "Päijänne-Tavastland"
    },
    {
        "kuntanro": 577,
        "nimi_fi": "Paimio",
        "nimi_sv": "Pemar",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 10922,
        "maakuntanro": 2,
        "maakuntanimi_fi": "Varsinais-Suomi",
        "maakuntanimi_sv": "Egentliga Finland"
    },
    {
        "kuntanro": 578,
        "nimi_fi": "Paltamo",
        "nimi_sv": "Paltamo",
        "kuntamuoto": "Kunta",
        "asukkaita": 3235,
        "maakuntanro": 17,
        "maakuntanimi_fi": "Kainuu",
        "maakuntanimi_sv": "Kajanaland"
    },
    {
        "kuntanro": 445,
        "nimi_fi": "Parainen",
        "nimi_sv": "Pargas",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 15105,
        "maakuntanro": 2,
        "maakuntanimi_fi": "Varsinais-Suomi",
        "maakuntanimi_sv": "Egentliga Finland"
    },
    {
        "kuntanro": 580,
        "nimi_fi": "Parikkala",
        "nimi_sv": "Parikkala",
        "kuntamuoto": "Kunta",
        "asukkaita": 4655,
        "maakuntanro": 8,
        "maakuntanimi_fi": "Etelä-Karjala",
        "maakuntanimi_sv": "Södra Karelen"
    },
    {
        "kuntanro": 581,
        "nimi_fi": "Parkano",
        "nimi_sv": "Parkano",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 6352,
        "maakuntanro": 5,
        "maakuntanimi_fi": "Pirkanmaa",
        "maakuntanimi_sv": "Birkaland"
    },
    {
        "kuntanro": 599,
        "nimi_fi": "Pedersören kunta",
        "nimi_sv": "Pedersöre",
        "kuntamuoto": "Kunta",
        "asukkaita": 11174,
        "maakuntanro": 14,
        "maakuntanimi_fi": "Pohjanmaa",
        "maakuntanimi_sv": "Österbotten"
    },
    {
        "kuntanro": 583,
        "nimi_fi": "Pelkosenniemi",
        "nimi_sv": "Pelkosenniemi",
        "kuntamuoto": "Kunta",
        "asukkaita": 931,
        "maakuntanro": 18,
        "maakuntanimi_fi": "Lappi",
        "maakuntanimi_sv": "Lappland"
    },
    {
        "kuntanro": 854,
        "nimi_fi": "Pello",
        "nimi_sv": "Pello",
        "kuntamuoto": "Kunta",
        "asukkaita": 3304,
        "maakuntanro": 18,
        "maakuntanimi_fi": "Lappi",
        "maakuntanimi_sv": "Lappland"
    },
    {
        "kuntanro": 584,
        "nimi_fi": "Perho",
        "nimi_sv": "Perho",
        "kuntamuoto": "Kunta",
        "asukkaita": 2706,
        "maakuntanro": 15,
        "maakuntanimi_fi": "Keski-Pohjanmaa",
        "maakuntanimi_sv": "Mellersta Österbotten"
    },
    {
        "kuntanro": 588,
        "nimi_fi": "Pertunmaa",
        "nimi_sv": "Pertunmaa",
        "kuntamuoto": "Kunta",
        "asukkaita": 1654,
        "maakuntanro": 9,
        "maakuntanimi_fi": "Etelä-Savo",
        "maakuntanimi_sv": "Södra Savolax"
    },
    {
        "kuntanro": 592,
        "nimi_fi": "Petäjävesi",
        "nimi_sv": "Petäjävesi",
        "kuntamuoto": "Kunta",
        "asukkaita": 3772,
        "maakuntanro": 12,
        "maakuntanimi_fi": "Keski-Suomi",
        "maakuntanimi_sv": "Mellersta Finland"
    },
    {
        "kuntanro": 593,
        "nimi_fi": "Pieksämäki",
        "nimi_sv": "Pieksämäki",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 17375,
        "maakuntanro": 9,
        "maakuntanimi_fi": "Etelä-Savo",
        "maakuntanimi_sv": "Södra Savolax"
    },
    {
        "kuntanro": 595,
        "nimi_fi": "Pielavesi",
        "nimi_sv": "Pielavesi",
        "kuntamuoto": "Kunta",
        "asukkaita": 4321,
        "maakuntanro": 10,
        "maakuntanimi_fi": "Pohjois-Savo",
        "maakuntanimi_sv": "Norra Savolax"
    },
    {
        "kuntanro": 598,
        "nimi_fi": "Pietarsaari",
        "nimi_sv": "Jakobstad",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 19066,
        "maakuntanro": 14,
        "maakuntanimi_fi": "Pohjanmaa",
        "maakuntanimi_sv": "Österbotten"
    },
    {
        "kuntanro": 601,
        "nimi_fi": "Pihtipudas",
        "nimi_sv": "Pihtipudas",
        "kuntamuoto": "Kunta",
        "asukkaita": 3931,
        "maakuntanro": 12,
        "maakuntanimi_fi": "Keski-Suomi",
        "maakuntanimi_sv": "Mellersta Finland"
    },
    {
        "kuntanro": 604,
        "nimi_fi": "Pirkkala",
        "nimi_sv": "Birkala",
        "kuntamuoto": "Kunta",
        "asukkaita": 19803,
        "maakuntanro": 5,
        "maakuntanimi_fi": "Pirkanmaa",
        "maakuntanimi_sv": "Birkaland"
    },
    {
        "kuntanro": 607,
        "nimi_fi": "Polvijärvi",
        "nimi_sv": "Polvijärvi",
        "kuntamuoto": "Kunta",
        "asukkaita": 4201,
        "maakuntanro": 11,
        "maakuntanimi_fi": "Pohjois-Karjala",
        "maakuntanimi_sv": "Norra Karelen"
    },
    {
        "kuntanro": 608,
        "nimi_fi": "Pomarkku",
        "nimi_sv": "Påmark",
        "kuntamuoto": "Kunta",
        "asukkaita": 2063,
        "maakuntanro": 3,
        "maakuntanimi_fi": "Satakunta",
        "maakuntanimi_sv": "Satakunta"
    },
    {
        "kuntanro": 609,
        "nimi_fi": "Pori",
        "nimi_sv": "Björneborg",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 83684,
        "maakuntanro": 3,
        "maakuntanimi_fi": "Satakunta",
        "maakuntanimi_sv": "Satakunta"
    },
    {
        "kuntanro": 611,
        "nimi_fi": "Pornainen",
        "nimi_sv": "Borgnäs",
        "kuntamuoto": "Kunta",
        "asukkaita": 5070,
        "maakuntanro": 1,
        "maakuntanimi_fi": "Uusimaa",
        "maakuntanimi_sv": "Nyland"
    },
    {
        "kuntanro": 638,
        "nimi_fi": "Porvoo",
        "nimi_sv": "Borgå",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 50619,
        "maakuntanro": 1,
        "maakuntanimi_fi": "Uusimaa",
        "maakuntanimi_sv": "Nyland"
    },
    {
        "kuntanro": 614,
        "nimi_fi": "Posio",
        "nimi_sv": "Posio",
        "kuntamuoto": "Kunta",
        "asukkaita": 3117,
        "maakuntanro": 18,
        "maakuntanimi_fi": "Lappi",
        "maakuntanimi_sv": "Lappland"
    },
    {
        "kuntanro": 615,
        "nimi_fi": "Pudasjärvi",
        "nimi_sv": "Pudasjärvi",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 7779,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 616,
        "nimi_fi": "Pukkila",
        "nimi_sv": "Pukkila",
        "kuntamuoto": "Kunta",
        "asukkaita": 1833,
        "maakuntanro": 1,
        "maakuntanimi_fi": "Uusimaa",
        "maakuntanimi_sv": "Nyland"
    },
    {
        "kuntanro": 619,
        "nimi_fi": "Punkalaidun",
        "nimi_sv": "Punkalaidun",
        "kuntamuoto": "Kunta",
        "asukkaita": 2785,
        "maakuntanro": 5,
        "maakuntanimi_fi": "Pirkanmaa",
        "maakuntanimi_sv": "Birkaland"
    },
    {
        "kuntanro": 620,
        "nimi_fi": "Puolanka",
        "nimi_sv": "Puolanka",
        "kuntamuoto": "Kunta",
        "asukkaita": 2491,
        "maakuntanro": 17,
        "maakuntanimi_fi": "Kainuu",
        "maakuntanimi_sv": "Kajanaland"
    },
    {
        "kuntanro": 623,
        "nimi_fi": "Puumala",
        "nimi_sv": "Puumala",
        "kuntamuoto": "Kunta",
        "asukkaita": 2137,
        "maakuntanro": 9,
        "maakuntanimi_fi": "Etelä-Savo",
        "maakuntanimi_sv": "Södra Savolax"
    },
    {
        "kuntanro": 624,
        "nimi_fi": "Pyhtää",
        "nimi_sv": "Pyttis",
        "kuntamuoto": "Kunta",
        "asukkaita": 5125,
        "maakuntanro": 7,
        "maakuntanimi_fi": "Kymenlaakso",
        "maakuntanimi_sv": "Kymmenedalen"
    },
    {
        "kuntanro": 625,
        "nimi_fi": "Pyhäjoki",
        "nimi_sv": "Pyhäjoki",
        "kuntamuoto": "Kunta",
        "asukkaita": 3051,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 626,
        "nimi_fi": "Pyhäjärvi",
        "nimi_sv": "Pyhäjärvi",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 5033,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 630,
        "nimi_fi": "Pyhäntä",
        "nimi_sv": "Pyhäntä",
        "kuntamuoto": "Kunta",
        "asukkaita": 1593,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 631,
        "nimi_fi": "Pyhäranta",
        "nimi_sv": "Pyhäranta",
        "kuntamuoto": "Kunta",
        "asukkaita": 1994,
        "maakuntanro": 2,
        "maakuntanimi_fi": "Varsinais-Suomi",
        "maakuntanimi_sv": "Egentliga Finland"
    },
    {
        "kuntanro": 635,
        "nimi_fi": "Pälkäne",
        "nimi_sv": "Pälkäne",
        "kuntamuoto": "Kunta",
        "asukkaita": 6415,
        "maakuntanro": 5,
        "maakuntanimi_fi": "Pirkanmaa",
        "maakuntanimi_sv": "Birkaland"
    },
    {
        "kuntanro": 636,
        "nimi_fi": "Pöytyä",
        "nimi_sv": "Pöytyä",
        "kuntamuoto": "Kunta",
        "asukkaita": 8229,
        "maakuntanro": 2,
        "maakuntanimi_fi": "Varsinais-Suomi",
        "maakuntanimi_sv": "Egentliga Finland"
    },
    {
        "kuntanro": 678,
        "nimi_fi": "Raahe",
        "nimi_sv": "Brahestad",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 24353,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 710,
        "nimi_fi": "Raasepori",
        "nimi_sv": "Raseborg",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 27528,
        "maakuntanro": 1,
        "maakuntanimi_fi": "Uusimaa",
        "maakuntanimi_sv": "Nyland"
    },
    {
        "kuntanro": 680,
        "nimi_fi": "Raisio",
        "nimi_sv": "Reso",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 24407,
        "maakuntanro": 2,
        "maakuntanimi_fi": "Varsinais-Suomi",
        "maakuntanimi_sv": "Egentliga Finland"
    },
    {
        "kuntanro": 681,
        "nimi_fi": "Rantasalmi",
        "nimi_sv": "Rantasalmi",
        "kuntamuoto": "Kunta",
        "asukkaita": 3364,
        "maakuntanro": 9,
        "maakuntanimi_fi": "Etelä-Savo",
        "maakuntanimi_sv": "Södra Savolax"
    },
    {
        "kuntanro": 683,
        "nimi_fi": "Ranua",
        "nimi_sv": "Ranua",
        "kuntamuoto": "Kunta",
        "asukkaita": 3712,
        "maakuntanro": 18,
        "maakuntanimi_fi": "Lappi",
        "maakuntanimi_sv": "Lappland"
    },
    {
        "kuntanro": 684,
        "nimi_fi": "Rauma",
        "nimi_sv": "Raumo",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 39040,
        "maakuntanro": 3,
        "maakuntanimi_fi": "Satakunta",
        "maakuntanimi_sv": "Satakunta"
    },
    {
        "kuntanro": 686,
        "nimi_fi": "Rautalampi",
        "nimi_sv": "Rautalampi",
        "kuntamuoto": "Kunta",
        "asukkaita": 3053,
        "maakuntanro": 10,
        "maakuntanimi_fi": "Pohjois-Savo",
        "maakuntanimi_sv": "Norra Savolax"
    },
    {
        "kuntanro": 687,
        "nimi_fi": "Rautavaara",
        "nimi_sv": "Rautavaara",
        "kuntamuoto": "Kunta",
        "asukkaita": 1561,
        "maakuntanro": 10,
        "maakuntanimi_fi": "Pohjois-Savo",
        "maakuntanimi_sv": "Norra Savolax"
    },
    {
        "kuntanro": 689,
        "nimi_fi": "Rautjärvi",
        "nimi_sv": "Rautjärvi",
        "kuntamuoto": "Kunta",
        "asukkaita": 3146,
        "maakuntanro": 8,
        "maakuntanimi_fi": "Etelä-Karjala",
        "maakuntanimi_sv": "Södra Karelen"
    },
    {
        "kuntanro": 691,
        "nimi_fi": "Reisjärvi",
        "nimi_sv": "Reisjärvi",
        "kuntamuoto": "Kunta",
        "asukkaita": 2710,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 694,
        "nimi_fi": "Riihimäki",
        "nimi_sv": "Riihimäki",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 28710,
        "maakuntanro": 4,
        "maakuntanimi_fi": "Kanta-Häme",
        "maakuntanimi_sv": "Egentliga Tavastland"
    },
    {
        "kuntanro": 697,
        "nimi_fi": "Ristijärvi",
        "nimi_sv": "Ristijärvi",
        "kuntamuoto": "Kunta",
        "asukkaita": 1235,
        "maakuntanro": 17,
        "maakuntanimi_fi": "Kainuu",
        "maakuntanimi_sv": "Kajanaland"
    },
    {
        "kuntanro": 698,
        "nimi_fi": "Rovaniemi",
        "nimi_sv": "Rovaniemi",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 63528,
        "maakuntanro": 18,
        "maakuntanimi_fi": "Lappi",
        "maakuntanimi_sv": "Lappland"
    },
    {
        "kuntanro": 700,
        "nimi_fi": "Ruokolahti",
        "nimi_sv": "Ruokolax",
        "kuntamuoto": "Kunta",
        "asukkaita": 4922,
        "maakuntanro": 8,
        "maakuntanimi_fi": "Etelä-Karjala",
        "maakuntanimi_sv": "Södra Karelen"
    },
    {
        "kuntanro": 702,
        "nimi_fi": "Ruovesi",
        "nimi_sv": "Ruovesi",
        "kuntamuoto": "Kunta",
        "asukkaita": 4215,
        "maakuntanro": 5,
        "maakuntanimi_fi": "Pirkanmaa",
        "maakuntanimi_sv": "Birkaland"
    },
    {
        "kuntanro": 704,
        "nimi_fi": "Rusko",
        "nimi_sv": "Rusko",
        "kuntamuoto": "Kunta",
        "asukkaita": 6354,
        "maakuntanro": 2,
        "maakuntanimi_fi": "Varsinais-Suomi",
        "maakuntanimi_sv": "Egentliga Finland"
    },
    {
        "kuntanro": 707,
        "nimi_fi": "Rääkkylä",
        "nimi_sv": "Rääkkylä",
        "kuntamuoto": "Kunta",
        "asukkaita": 2066,
        "maakuntanro": 11,
        "maakuntanimi_fi": "Pohjois-Karjala",
        "maakuntanimi_sv": "Norra Karelen"
    },
    {
        "kuntanro": 729,
        "nimi_fi": "Saarijärvi",
        "nimi_sv": "Saarijärvi",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 9208,
        "maakuntanro": 12,
        "maakuntanimi_fi": "Keski-Suomi",
        "maakuntanimi_sv": "Mellersta Finland"
    },
    {
        "kuntanro": 732,
        "nimi_fi": "Salla",
        "nimi_sv": "Salla",
        "kuntamuoto": "Kunta",
        "asukkaita": 3407,
        "maakuntanro": 18,
        "maakuntanimi_fi": "Lappi",
        "maakuntanimi_sv": "Lappland"
    },
    {
        "kuntanro": 734,
        "nimi_fi": "Salo",
        "nimi_sv": "Salo",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 51562,
        "maakuntanro": 2,
        "maakuntanimi_fi": "Varsinais-Suomi",
        "maakuntanimi_sv": "Egentliga Finland"
    },
    {
        "kuntanro": 736,
        "nimi_fi": "Saltvik",
        "nimi_sv": "Saltvik",
        "kuntamuoto": "Kunta",
        "asukkaita": 1806,
        "maakuntanro": 19,
        "maakuntanimi_fi": "Ahvenanmaa",
        "maakuntanimi_sv": "Åland"
    },
    {
        "kuntanro": 790,
        "nimi_fi": "Sastamala",
        "nimi_sv": "Sastamala",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 24052,
        "maakuntanro": 5,
        "maakuntanimi_fi": "Pirkanmaa",
        "maakuntanimi_sv": "Birkaland"
    },
    {
        "kuntanro": 738,
        "nimi_fi": "Sauvo",
        "nimi_sv": "Sagu",
        "kuntamuoto": "Kunta",
        "asukkaita": 2950,
        "maakuntanro": 2,
        "maakuntanimi_fi": "Varsinais-Suomi",
        "maakuntanimi_sv": "Egentliga Finland"
    },
    {
        "kuntanro": 739,
        "nimi_fi": "Savitaipale",
        "nimi_sv": "Savitaipale",
        "kuntamuoto": "Kunta",
        "asukkaita": 3326,
        "maakuntanro": 8,
        "maakuntanimi_fi": "Etelä-Karjala",
        "maakuntanimi_sv": "Södra Karelen"
    },
    {
        "kuntanro": 740,
        "nimi_fi": "Savonlinna",
        "nimi_sv": "Nyslott",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 32662,
        "maakuntanro": 9,
        "maakuntanimi_fi": "Etelä-Savo",
        "maakuntanimi_sv": "Södra Savolax"
    },
    {
        "kuntanro": 742,
        "nimi_fi": "Savukoski",
        "nimi_sv": "Savukoski",
        "kuntamuoto": "Kunta",
        "asukkaita": 1009,
        "maakuntanro": 18,
        "maakuntanimi_fi": "Lappi",
        "maakuntanimi_sv": "Lappland"
    },
    {
        "kuntanro": 743,
        "nimi_fi": "Seinäjoki",
        "nimi_sv": "Seinäjoki",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 64130,
        "maakuntanro": 13,
        "maakuntanimi_fi": "Etelä-Pohjanmaa",
        "maakuntanimi_sv": "Södra Österbotten"
    },
    {
        "kuntanro": 746,
        "nimi_fi": "Sievi",
        "nimi_sv": "Sievi",
        "kuntamuoto": "Kunta",
        "asukkaita": 4834,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 747,
        "nimi_fi": "Siikainen",
        "nimi_sv": "Siikais",
        "kuntamuoto": "Kunta",
        "asukkaita": 1385,
        "maakuntanro": 3,
        "maakuntanimi_fi": "Satakunta",
        "maakuntanimi_sv": "Satakunta"
    },
    {
        "kuntanro": 748,
        "nimi_fi": "Siikajoki",
        "nimi_sv": "Siikajoki",
        "kuntamuoto": "Kunta",
        "asukkaita": 5034,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 791,
        "nimi_fi": "Siikalatva",
        "nimi_sv": "Siikalatva",
        "kuntamuoto": "Kunta",
        "asukkaita": 5203,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 749,
        "nimi_fi": "Siilinjärvi",
        "nimi_sv": "Siilinjärvi",
        "kuntamuoto": "Kunta",
        "asukkaita": 21251,
        "maakuntanro": 10,
        "maakuntanimi_fi": "Pohjois-Savo",
        "maakuntanimi_sv": "Norra Savolax"
    },
    {
        "kuntanro": 751,
        "nimi_fi": "Simo",
        "nimi_sv": "Simo",
        "kuntamuoto": "Kunta",
        "asukkaita": 2950,
        "maakuntanro": 18,
        "maakuntanimi_fi": "Lappi",
        "maakuntanimi_sv": "Lappland"
    },
    {
        "kuntanro": 753,
        "nimi_fi": "Sipoo",
        "nimi_sv": "Sibbo",
        "kuntamuoto": "Kunta",
        "asukkaita": 21687,
        "maakuntanro": 1,
        "maakuntanimi_fi": "Uusimaa",
        "maakuntanimi_sv": "Nyland"
    },
    {
        "kuntanro": 755,
        "nimi_fi": "Siuntio",
        "nimi_sv": "Sjundeå",
        "kuntamuoto": "Kunta",
        "asukkaita": 6149,
        "maakuntanro": 1,
        "maakuntanimi_fi": "Uusimaa",
        "maakuntanimi_sv": "Nyland"
    },
    {
        "kuntanro": 758,
        "nimi_fi": "Sodankylä",
        "nimi_sv": "Sodankylä",
        "kuntamuoto": "Kunta",
        "asukkaita": 8266,
        "maakuntanro": 18,
        "maakuntanimi_fi": "Lappi",
        "maakuntanimi_sv": "Lappland"
    },
    {
        "kuntanro": 759,
        "nimi_fi": "Soini",
        "nimi_sv": "Soini",
        "kuntamuoto": "Kunta",
        "asukkaita": 2007,
        "maakuntanro": 13,
        "maakuntanimi_fi": "Etelä-Pohjanmaa",
        "maakuntanimi_sv": "Södra Österbotten"
    },
    {
        "kuntanro": 761,
        "nimi_fi": "Somero",
        "nimi_sv": "Somero",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 8646,
        "maakuntanro": 2,
        "maakuntanimi_fi": "Varsinais-Suomi",
        "maakuntanimi_sv": "Egentliga Finland"
    },
    {
        "kuntanro": 762,
        "nimi_fi": "Sonkajärvi",
        "nimi_sv": "Sonkajärvi",
        "kuntamuoto": "Kunta",
        "asukkaita": 3841,
        "maakuntanro": 10,
        "maakuntanimi_fi": "Pohjois-Savo",
        "maakuntanimi_sv": "Norra Savolax"
    },
    {
        "kuntanro": 765,
        "nimi_fi": "Sotkamo",
        "nimi_sv": "Sotkamo",
        "kuntamuoto": "Kunta",
        "asukkaita": 10301,
        "maakuntanro": 17,
        "maakuntanimi_fi": "Kainuu",
        "maakuntanimi_sv": "Kajanaland"
    },
    {
        "kuntanro": 766,
        "nimi_fi": "Sottunga",
        "nimi_sv": "Sottunga",
        "kuntamuoto": "Kunta",
        "asukkaita": 101,
        "maakuntanro": 19,
        "maakuntanimi_fi": "Ahvenanmaa",
        "maakuntanimi_sv": "Åland"
    },
    {
        "kuntanro": 768,
        "nimi_fi": "Sulkava",
        "nimi_sv": "Sulkava",
        "kuntamuoto": "Kunta",
        "asukkaita": 2482,
        "maakuntanro": 9,
        "maakuntanimi_fi": "Etelä-Savo",
        "maakuntanimi_sv": "Södra Savolax"
    },
    {
        "kuntanro": 771,
        "nimi_fi": "Sund",
        "nimi_sv": "Sund",
        "kuntamuoto": "Kunta",
        "asukkaita": 1007,
        "maakuntanro": 19,
        "maakuntanimi_fi": "Ahvenanmaa",
        "maakuntanimi_sv": "Åland"
    },
    {
        "kuntanro": 777,
        "nimi_fi": "Suomussalmi",
        "nimi_sv": "Suomussalmi",
        "kuntamuoto": "Kunta",
        "asukkaita": 7594,
        "maakuntanro": 17,
        "maakuntanimi_fi": "Kainuu",
        "maakuntanimi_sv": "Kajanaland"
    },
    {
        "kuntanro": 778,
        "nimi_fi": "Suonenjoki",
        "nimi_sv": "Suonenjoki",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 6931,
        "maakuntanro": 10,
        "maakuntanimi_fi": "Pohjois-Savo",
        "maakuntanimi_sv": "Norra Savolax"
    },
    {
        "kuntanro": 781,
        "nimi_fi": "Sysmä",
        "nimi_sv": "Sysmä",
        "kuntamuoto": "Kunta",
        "asukkaita": 3631,
        "maakuntanro": 6,
        "maakuntanimi_fi": "Päijät-Häme",
        "maakuntanimi_sv": "Päijänne-Tavastland"
    },
    {
        "kuntanro": 783,
        "nimi_fi": "Säkylä",
        "nimi_sv": "Säkylä",
        "kuntamuoto": "Kunta",
        "asukkaita": 6646,
        "maakuntanro": 3,
        "maakuntanimi_fi": "Satakunta",
        "maakuntanimi_sv": "Satakunta"
    },
    {
        "kuntanro": 831,
        "nimi_fi": "Taipalsaari",
        "nimi_sv": "Taipalsaari",
        "kuntamuoto": "Kunta",
        "asukkaita": 4628,
        "maakuntanro": 8,
        "maakuntanimi_fi": "Etelä-Karjala",
        "maakuntanimi_sv": "Södra Karelen"
    },
    {
        "kuntanro": 832,
        "nimi_fi": "Taivalkoski",
        "nimi_sv": "Taivalkoski",
        "kuntamuoto": "Kunta",
        "asukkaita": 3916,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 833,
        "nimi_fi": "Taivassalo",
        "nimi_sv": "Tövsala",
        "kuntamuoto": "Kunta",
        "asukkaita": 1659,
        "maakuntanro": 2,
        "maakuntanimi_fi": "Varsinais-Suomi",
        "maakuntanimi_sv": "Egentliga Finland"
    },
    {
        "kuntanro": 834,
        "nimi_fi": "Tammela",
        "nimi_sv": "Tammela",
        "kuntamuoto": "Kunta",
        "asukkaita": 6016,
        "maakuntanro": 4,
        "maakuntanimi_fi": "Kanta-Häme",
        "maakuntanimi_sv": "Egentliga Tavastland"
    },
    {
        "kuntanro": 837,
        "nimi_fi": "Tampere",
        "nimi_sv": "Tammerfors",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 241009,
        "maakuntanro": 5,
        "maakuntanimi_fi": "Pirkanmaa",
        "maakuntanimi_sv": "Birkaland"
    },
    {
        "kuntanro": 844,
        "nimi_fi": "Tervo",
        "nimi_sv": "Tervo",
        "kuntamuoto": "Kunta",
        "asukkaita": 1503,
        "maakuntanro": 10,
        "maakuntanimi_fi": "Pohjois-Savo",
        "maakuntanimi_sv": "Norra Savolax"
    },
    {
        "kuntanro": 845,
        "nimi_fi": "Tervola",
        "nimi_sv": "Tervola",
        "kuntamuoto": "Kunta",
        "asukkaita": 2925,
        "maakuntanro": 18,
        "maakuntanimi_fi": "Lappi",
        "maakuntanimi_sv": "Lappland"
    },
    {
        "kuntanro": 846,
        "nimi_fi": "Teuva",
        "nimi_sv": "Östermark",
        "kuntamuoto": "Kunta",
        "asukkaita": 4994,
        "maakuntanro": 13,
        "maakuntanimi_fi": "Etelä-Pohjanmaa",
        "maakuntanimi_sv": "Södra Österbotten"
    },
    {
        "kuntanro": 848,
        "nimi_fi": "Tohmajärvi",
        "nimi_sv": "Tohmajärvi",
        "kuntamuoto": "Kunta",
        "asukkaita": 4307,
        "maakuntanro": 11,
        "maakuntanimi_fi": "Pohjois-Karjala",
        "maakuntanimi_sv": "Norra Karelen"
    },
    {
        "kuntanro": 849,
        "nimi_fi": "Toholampi",
        "nimi_sv": "Toholampi",
        "kuntamuoto": "Kunta",
        "asukkaita": 2966,
        "maakuntanro": 15,
        "maakuntanimi_fi": "Keski-Pohjanmaa",
        "maakuntanimi_sv": "Mellersta Österbotten"
    },
    {
        "kuntanro": 850,
        "nimi_fi": "Toivakka",
        "nimi_sv": "Toivakka",
        "kuntamuoto": "Kunta",
        "asukkaita": 2401,
        "maakuntanro": 12,
        "maakuntanimi_fi": "Keski-Suomi",
        "maakuntanimi_sv": "Mellersta Finland"
    },
    {
        "kuntanro": 851,
        "nimi_fi": "Tornio",
        "nimi_sv": "Torneå",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 21467,
        "maakuntanro": 18,
        "maakuntanimi_fi": "Lappi",
        "maakuntanimi_sv": "Lappland"
    },
    {
        "kuntanro": 853,
        "nimi_fi": "Turku",
        "nimi_sv": "Åbo",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 194391,
        "maakuntanro": 2,
        "maakuntanimi_fi": "Varsinais-Suomi",
        "maakuntanimi_sv": "Egentliga Finland"
    },
    {
        "kuntanro": 857,
        "nimi_fi": "Tuusniemi",
        "nimi_sv": "Tuusniemi",
        "kuntamuoto": "Kunta",
        "asukkaita": 2433,
        "maakuntanro": 10,
        "maakuntanimi_fi": "Pohjois-Savo",
        "maakuntanimi_sv": "Norra Savolax"
    },
    {
        "kuntanro": 858,
        "nimi_fi": "Tuusula",
        "nimi_sv": "Tusby",
        "kuntamuoto": "Kunta",
        "asukkaita": 38783,
        "maakuntanro": 1,
        "maakuntanimi_fi": "Uusimaa",
        "maakuntanimi_sv": "Nyland"
    },
    {
        "kuntanro": 859,
        "nimi_fi": "Tyrnävä",
        "nimi_sv": "Tyrnävä",
        "kuntamuoto": "Kunta",
        "asukkaita": 6603,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 886,
        "nimi_fi": "Ulvila",
        "nimi_sv": "Ulvsby",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 12735,
        "maakuntanro": 3,
        "maakuntanimi_fi": "Satakunta",
        "maakuntanimi_sv": "Satakunta"
    },
    {
        "kuntanro": 887,
        "nimi_fi": "Urjala",
        "nimi_sv": "Urjala",
        "kuntamuoto": "Kunta",
        "asukkaita": 4644,
        "maakuntanro": 5,
        "maakuntanimi_fi": "Pirkanmaa",
        "maakuntanimi_sv": "Birkaland"
    },
    {
        "kuntanro": 889,
        "nimi_fi": "Utajärvi",
        "nimi_sv": "Utajärvi",
        "kuntamuoto": "Kunta",
        "asukkaita": 2619,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 890,
        "nimi_fi": "Utsjoki",
        "nimi_sv": "Utsjoki",
        "kuntamuoto": "Kunta",
        "asukkaita": 1219,
        "maakuntanro": 18,
        "maakuntanimi_fi": "Lappi",
        "maakuntanimi_sv": "Lappland"
    },
    {
        "kuntanro": 892,
        "nimi_fi": "Uurainen",
        "nimi_sv": "Uurainen",
        "kuntamuoto": "Kunta",
        "asukkaita": 3646,
        "maakuntanro": 12,
        "maakuntanimi_fi": "Keski-Suomi",
        "maakuntanimi_sv": "Mellersta Finland"
    },
    {
        "kuntanro": 893,
        "nimi_fi": "Uusikaarlepyy",
        "nimi_sv": "Nykarleby",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 7479,
        "maakuntanro": 14,
        "maakuntanimi_fi": "Pohjanmaa",
        "maakuntanimi_sv": "Österbotten"
    },
    {
        "kuntanro": 895,
        "nimi_fi": "Uusikaupunki",
        "nimi_sv": "Nystad",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 15378,
        "maakuntanro": 2,
        "maakuntanimi_fi": "Varsinais-Suomi",
        "maakuntanimi_sv": "Egentliga Finland"
    },
    {
        "kuntanro": 785,
        "nimi_fi": "Vaala",
        "nimi_sv": "Vaala",
        "kuntamuoto": "Kunta",
        "asukkaita": 2737,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 905,
        "nimi_fi": "Vaasa",
        "nimi_sv": "Vasa",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 67551,
        "maakuntanro": 14,
        "maakuntanimi_fi": "Pohjanmaa",
        "maakuntanimi_sv": "Österbotten"
    },
    {
        "kuntanro": 908,
        "nimi_fi": "Valkeakoski",
        "nimi_sv": "Valkeakoski",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 20765,
        "maakuntanro": 5,
        "maakuntanimi_fi": "Pirkanmaa",
        "maakuntanimi_sv": "Birkaland"
    },
    {
        "kuntanro": 92,
        "nimi_fi": "Vantaa",
        "nimi_sv": "Vanda",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 237231,
        "maakuntanro": 1,
        "maakuntanimi_fi": "Uusimaa",
        "maakuntanimi_sv": "Nyland"
    },
    {
        "kuntanro": 915,
        "nimi_fi": "Varkaus",
        "nimi_sv": "Varkaus",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 20278,
        "maakuntanro": 10,
        "maakuntanimi_fi": "Pohjois-Savo",
        "maakuntanimi_sv": "Norra Savolax"
    },
    {
        "kuntanro": 918,
        "nimi_fi": "Vehmaa",
        "nimi_sv": "Vemo",
        "kuntamuoto": "Kunta",
        "asukkaita": 2292,
        "maakuntanro": 2,
        "maakuntanimi_fi": "Varsinais-Suomi",
        "maakuntanimi_sv": "Egentliga Finland"
    },
    {
        "kuntanro": 921,
        "nimi_fi": "Vesanto",
        "nimi_sv": "Vesanto",
        "kuntamuoto": "Kunta",
        "asukkaita": 1972,
        "maakuntanro": 10,
        "maakuntanimi_fi": "Pohjois-Savo",
        "maakuntanimi_sv": "Norra Savolax"
    },
    {
        "kuntanro": 922,
        "nimi_fi": "Vesilahti",
        "nimi_sv": "Vesilahti",
        "kuntamuoto": "Kunta",
        "asukkaita": 4367,
        "maakuntanro": 5,
        "maakuntanimi_fi": "Pirkanmaa",
        "maakuntanimi_sv": "Birkaland"
    },
    {
        "kuntanro": 924,
        "nimi_fi": "Veteli",
        "nimi_sv": "Vetil",
        "kuntamuoto": "Kunta",
        "asukkaita": 3065,
        "maakuntanro": 15,
        "maakuntanimi_fi": "Keski-Pohjanmaa",
        "maakuntanimi_sv": "Mellersta Österbotten"
    },
    {
        "kuntanro": 925,
        "nimi_fi": "Vieremä",
        "nimi_sv": "Vieremä",
        "kuntamuoto": "Kunta",
        "asukkaita": 3522,
        "maakuntanro": 10,
        "maakuntanimi_fi": "Pohjois-Savo",
        "maakuntanimi_sv": "Norra Savolax"
    },
    {
        "kuntanro": 927,
        "nimi_fi": "Vihti",
        "nimi_sv": "Vichtis",
        "kuntamuoto": "Kunta",
        "asukkaita": 29160,
        "maakuntanro": 1,
        "maakuntanimi_fi": "Uusimaa",
        "maakuntanimi_sv": "Nyland"
    },
    {
        "kuntanro": 931,
        "nimi_fi": "Viitasaari",
        "nimi_sv": "Viitasaari",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 6097,
        "maakuntanro": 12,
        "maakuntanimi_fi": "Keski-Suomi",
        "maakuntanimi_sv": "Mellersta Finland"
    },
    {
        "kuntanro": 934,
        "nimi_fi": "Vimpeli",
        "nimi_sv": "Vindala",
        "kuntamuoto": "Kunta",
        "asukkaita": 2784,
        "maakuntanro": 13,
        "maakuntanimi_fi": "Etelä-Pohjanmaa",
        "maakuntanimi_sv": "Södra Österbotten"
    },
    {
        "kuntanro": 935,
        "nimi_fi": "Virolahti",
        "nimi_sv": "Vederlax",
        "kuntamuoto": "Kunta",
        "asukkaita": 3087,
        "maakuntanro": 7,
        "maakuntanimi_fi": "Kymenlaakso",
        "maakuntanimi_sv": "Kymmenedalen"
    },
    {
        "kuntanro": 936,
        "nimi_fi": "Virrat",
        "nimi_sv": "Virdois",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 6510,
        "maakuntanro": 5,
        "maakuntanimi_fi": "Pirkanmaa",
        "maakuntanimi_sv": "Birkaland"
    },
    {
        "kuntanro": 941,
        "nimi_fi": "Vårdö",
        "nimi_sv": "Vårdö",
        "kuntamuoto": "Kunta",
        "asukkaita": 460,
        "maakuntanro": 19,
        "maakuntanimi_fi": "Ahvenanmaa",
        "maakuntanimi_sv": "Åland"
    },
    {
        "kuntanro": 946,
        "nimi_fi": "Vöyri",
        "nimi_sv": "Vörå",
        "kuntamuoto": "Kunta",
        "asukkaita": 6388,
        "maakuntanro": 14,
        "maakuntanimi_fi": "Pohjanmaa",
        "maakuntanimi_sv": "Österbotten"
    },
    {
        "kuntanro": 976,
        "nimi_fi": "Ylitornio",
        "nimi_sv": "Övertorneå",
        "kuntamuoto": "Kunta",
        "asukkaita": 3890,
        "maakuntanro": 18,
        "maakuntanimi_fi": "Lappi",
        "maakuntanimi_sv": "Lappland"
    },
    {
        "kuntanro": 977,
        "nimi_fi": "Ylivieska",
        "nimi_sv": "Ylivieska",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 15304,
        "maakuntanro": 16,
        "maakuntanimi_fi": "Pohjois-Pohjanmaa",
        "maakuntanimi_sv": "Norra Österbotten"
    },
    {
        "kuntanro": 980,
        "nimi_fi": "Ylöjärvi",
        "nimi_sv": "Ylöjärvi",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 33352,
        "maakuntanro": 5,
        "maakuntanimi_fi": "Pirkanmaa",
        "maakuntanimi_sv": "Birkaland"
    },
    {
        "kuntanro": 981,
        "nimi_fi": "Ypäjä",
        "nimi_sv": "Ypäjä",
        "kuntamuoto": "Kunta",
        "asukkaita": 2314,
        "maakuntanro": 4,
        "maakuntanimi_fi": "Kanta-Häme",
        "maakuntanimi_sv": "Egentliga Tavastland"
    },
    {
        "kuntanro": 989,
        "nimi_fi": "Ähtäri",
        "nimi_sv": "Etseri",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 5522,
        "maakuntanro": 13,
        "maakuntanimi_fi": "Etelä-Pohjanmaa",
        "maakuntanimi_sv": "Södra Österbotten"
    },
    {
        "kuntanro": 992,
        "nimi_fi": "Äänekoski",
        "nimi_sv": "Äänekoski",
        "kuntamuoto": "Kaupunki",
        "asukkaita": 18577,
        "maakuntanro": 12,
        "maakuntanimi_fi": "Keski-Suomi",
        "maakuntanimi_sv": "Mellersta Finland"
    }
]

export default maakunnat;