export interface LocationType {
  [key: string]: CiteType[];
}
export interface CiteType {
  name: string;
  coordinates: [number, number];
  link: string;
}

export const centerLocations: LocationType = {
  Kathmandu: [
    {
      name: "Ekantakuna",
      coordinates: [27.665311212571552, 85.31123496596034],
      link: "https://maps.app.goo.gl/SvZNNY4UHt9UVvia6",
    },
  ],
  Biratnagar: [
    {
      name: "Ekantakuna",
      coordinates: [27.665311212571552, 85.31123496596034],
      link: "https://maps.app.goo.gl/SvZNNY4UHt9UVvia6",
    },
  ],
  Lalitpur: [
    {
      name: "Ekantakuna",
      coordinates: [27.665311212571552, 85.31123496596034],
      link: "https://maps.app.goo.gl/SvZNNY4UHt9UVvia6",
    },
  ],
  Pokhara: [
    {
      name: "Ekantakuna",
      coordinates: [27.665311212571552, 85.31123496596034],
      link: "https://maps.app.goo.gl/SvZNNY4UHt9UVvia6",
    },
  ],
};
