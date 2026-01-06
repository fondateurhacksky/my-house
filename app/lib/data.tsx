// app/lib/data.ts

export const servicesByCategory: Record<string, any[]> = {
  services: [
    {
      id: 1,
      firstName: "Awa",
      lastName: "Koné",
      age: 32,
      city: "Abidjan",
      district: "Cocody",
      serviceType: "Aide ménagère",
      experience: 6,
      availability: "Temps plein",
      price: "40 000",
      rateType: "mois",
    },
    {
      id: 2,
      firstName: "Issouf",
      lastName: "Traoré",
      age: 38,
      city: "Abidjan",
      district: "Yopougon",
      serviceType: "Chauffeur privé",
      experience: 10,
      availability: "Jour / Nuit",
      price: "60 000",
      rateType: "mois",
    },
    {
      id: 3,
      firstName: "Mariam",
      lastName: "Coulibaly",
      age: 28,
      city: "Abidjan",
      district: "Riviera",
      serviceType: "Nounou",
      experience: 4,
      availability: "Journée",
      price: "50 000",
      rateType: "mois",
    },
    {
      id: 4,
      firstName: "Adama",
      lastName: "Bamba",
      age: 45,
      city: "Abidjan",
      district: "Anyama",
      serviceType: "Gardien de nuit",
      experience: 12,
      availability: "Nuit",
      price: "55 000",
      rateType: "mois",
    },
    {
      id: 5,
      firstName: "Fatou",
      lastName: "Diallo",
      age: 35,
      city: "Abidjan",
      district: "Marcory",
      serviceType: "Cuisinière",
      experience: 8,
      availability: "Temps plein",
      price: "65 000",
      rateType: "mois",
    },
    {
      id: 6,
      firstName: "Souleymane",
      lastName: "Ouattara",
      age: 41,
      city: "Abidjan",
      district: "Abobo",
      serviceType: "Jardinier",
      experience: 9,
      availability: "Matin",
      price: "45 000",
      rateType: "mois",
    },
  ],
};

/* =======================
   Données (mock)
======================= */
export const CITIES = [
  { value: "Cocody", label: "Cocody" },
  { value: "Yopougon", label: "Yopougon" },
  { value: "Riviera", label: "Riviera" },
  { value: "Marcory", label: "Marcory" },
  { value: "Treichville", label: "Treichville" },
];

export const SERVICES = [
  { value: "Aide ménagère", label: "Aide ménagère" },
  { value: "Chauffeur privé", label: "Chauffeur privé" },
  { value: "Nounou", label: "Nounou" },
  { value: "Gardien", label: "Gardien" },
];

export const AGE_RANGES = [
  { value: "18-25", label: "18 – 25 ans" },
  { value: "26-35", label: "26 – 35 ans" },
  { value: "36-45", label: "36 – 45 ans" },
  { value: "46-60", label: "46 – 60 ans" },
];

export const WORK_TIMES = [
  { value: "jour", label: "Journée" },
  { value: "nuit", label: "Nuit" },
  { value: "jour_nuit", label: "Jour & nuit" },
  { value: "jour_dort", label: "Journée + dort sur place" },
  { value: "nuit_dort", label: "Nuit + dort sur place" },
];