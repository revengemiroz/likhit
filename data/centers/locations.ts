export interface LocationType {
  [key: string]: CiteType[];
}
export interface CiteType {
  name: string;
  coordinates: [number, number];
  link: string;
  location: string;
  number: string;
}

export const centerLocations: LocationType = {
  Kathmandu: [
    {
      name: "Ekantakuna",
      coordinates: [27.665311212571552, 85.31123496596034],
      link: "https://maps.app.goo.gl/SvZNNY4UHt9UVvia6",
      location: "M886+4G6, Ring Rd, Lalitpur 44600",
      number: "015001793",
    },
  ],
  Biratnagar: [
    {
      name: "Ekantakuna",
      coordinates: [27.665311212571552, 85.31123496596034],
      link: "https://maps.app.goo.gl/SvZNNY4UHt9UVvia6",
      location: "M886+4G6, Ring Rd, Lalitpur 44600",
      number: "015001793",
    },
  ],
  Lalitpur: [
    {
      name: "Ekantakuna",
      coordinates: [27.665311212571552, 85.31123496596034],
      link: "https://maps.app.goo.gl/SvZNNY4UHt9UVvia6",
      location: "M886+4G6, Ring Rd, Lalitpur 44600",
      number: "015001793",
    },
  ],
  Pokhara: [
    {
      name: "Ekantakuna",
      coordinates: [27.665311212571552, 85.31123496596034],
      link: "https://maps.app.goo.gl/SvZNNY4UHt9UVvia6",
      location: "M886+4G6, Ring Rd, Lalitpur 44600",
      number: "015001793",
    },
  ],
};
