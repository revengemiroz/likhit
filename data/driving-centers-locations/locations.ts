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
  Biratnagar: [
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
};
