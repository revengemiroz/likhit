export interface LocationType {
  [key: string]: CiteType[];
}

export interface CiteType {
  name: string;
  coordinates: [number, number];
  link: string;
  location: string;
  number: string;
  openingHours: string[];
  image: string;
  description: string;
}

export const centerLocations: LocationType = {
  Kathmandu: [
    {
      name: "Ekantakuna",
      coordinates: [27.665311212571552, 85.31123496596034],
      link: "https://maps.app.goo.gl/SvZNNY4UHt9UVvia6",
      location: "M886+4G6, Ring Rd, Lalitpur 44600",
      number: "015001793",
      openingHours: [
        "Monday: 7:00 AM - 8:00 PM",
        "Tuesday: 7:00 AM - 8:00 PM",
        "Wednesday: 7:00 AM - 8:00 PM",
        "Thursday: 7:00 AM - 8:00 PM",
        "Friday: 7:00 AM - 9:00 PM",
        "Saturday: 8:00 AM - 9:00 PM",
        "Sunday: 8:00 AM - 7:00 PM",
      ],
      image:
        "https://lh3.googleusercontent.com/p/AF1QipNb502q_TaaV5I2KPPpBuZSe2PU51sZpqcKldbM=s1360-w1360-h1020",
      description:
        "Ekantakuna is a comprehensive healthcare center located in Kathmandu, Nepal. It offers a wide range of medical services, including general medicine, surgery, and emergency care. The center is equipped with modern facilities and employs experienced medical professionals to ensure high-quality healthcare services to its patients.",
    },
  ],
  Bhaktapur: [
    {
      name: "Radhe Radhe Driving Center",
      coordinates: [27.67761019657482, 85.39747619547533],
      link: "https://maps.app.goo.gl/xC5tJeFSopicsfCu9",
      location: "M9GW+XXH, Madhyapur Thimi 44800, Nepal",
      number: "+97716615211",
      openingHours: [
        "Monday: 7:00 AM - 8:00 PM",
        "Tuesday: 7:00 AM - 8:00 PM",
        "Wednesday: 7:00 AM - 8:00 PM",
        "Thursday: 7:00 AM - 8:00 PM",
        "Friday: 7:00 AM - 9:00 PM",
        "Saturday: 8:00 AM - 9:00 PM",
        "Sunday: 8:00 AM - 7:00 PM",
      ],
      image:
        "https://lh3.googleusercontent.com/p/AF1QipO2WEaekUPbgCdbSnxLwXYmBNIElN_G75GamdOA=s1360-w1360-h1020",
      description: "Government office in Madhyapur Thimi, Nepal",
    },
  ],
  Lalitpur: [
    {
      name: "Ekantakuna",
      coordinates: [27.665311212571552, 85.31123496596034],
      link: "https://maps.app.goo.gl/SvZNNY4UHt9UVvia6",
      location: "M886+4G6, Ring Rd, Lalitpur 44600",
      number: "015001793",
      openingHours: [
        "Monday: 7:00 AM - 8:00 PM",
        "Tuesday: 7:00 AM - 8:00 PM",
        "Wednesday: 7:00 AM - 8:00 PM",
        "Thursday: 7:00 AM - 8:00 PM",
        "Friday: 7:00 AM - 9:00 PM",
        "Saturday: 8:00 AM - 9:00 PM",
        "Sunday: 8:00 AM - 7:00 PM",
      ],
      image:
        "https://lh3.googleusercontent.com/p/AF1QipNb502q_TaaV5I2KPPpBuZSe2PU51sZpqcKldbM=s1360-w1360-h1020",
      description:
        "Ekantakuna is a comprehensive healthcare center located in Kathmandu, Nepal. It offers a wide range of medical services, including general medicine, surgery, and emergency care. The center is equipped with modern facilities and employs experienced medical professionals to ensure high-quality healthcare services to its patients.",
    },
  ],
  Pokhara: [
    {
      name: "Transportation Management Office, Gandaki",
      coordinates: [28.209912772472904, 83.98942277230155],
      link: "https://maps.app.goo.gl/HhKgQQSK6ZrfxxXw5",
      location: "6X5Q+WQM, Pokhara 33700, Nepal",
      number: "+97761464111",
      openingHours: [
        "Monday: 7:00 AM - 8:00 PM",
        "Tuesday: 7:00 AM - 8:00 PM",
        "Wednesday: 7:00 AM - 8:00 PM",
        "Thursday: 7:00 AM - 8:00 PM",
        "Friday: 7:00 AM - 9:00 PM",
        "Saturday: 8:00 AM - 9:00 PM",
        "Sunday: 8:00 AM - 7:00 PM",
      ],
      image:
        "https://lh5.googleusercontent.com/p/AF1QipM_m_XkPK2MhwJwB2iTq8Ju_7KBIlmIL3BJKJZs=w408-h306-k-no",
      description:
        "Ekantakuna is a comprehensive healthcare center located in Kathmandu, Nepal. It offers a wide range of medical services, including general medicine, surgery, and emergency care. The center is equipped with modern facilities and employs experienced medical professionals to ensure high-quality healthcare services to its patients.",
    },
  ],
};
