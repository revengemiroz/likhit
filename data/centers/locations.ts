export interface LocationType {
  [key: string]: CiteType[];
}
export interface CiteType {
  name: string;
  coordinates: [number, number];
  link: string;
  location: string;
  number: string;
  hours: [string, string][];
}

export const centerLocations: LocationType = {
  Kathmandu: [
    {
      name: "Ekantakuna",
      coordinates: [27.665311212571552, 85.31123496596034],
      link: "https://maps.app.goo.gl/SvZNNY4UHt9UVvia6",
      location: "M886+4G6, Ring Rd, Lalitpur 44600",
      number: "015001793",
      hours: [
        ["Thursday", "10AM-4AM"],
        ["Friday", "10AM-4AM"],
        ["Saturday", "Closed"],
        ["Sunday", "10AM-4AM"],
        ["Monday", "10AM-4AM"],
        ["Tuesday", "10AM-4AM"],
        ["Wednesday", "10AM-4AM"],
      ],
    },
  ],
  Biratnagar: [
    {
      name: "Ekantakuna",
      coordinates: [27.665311212571552, 85.31123496596034],
      link: "https://maps.app.goo.gl/SvZNNY4UHt9UVvia6",
      location: "M886+4G6, Ring Rd, Lalitpur 44600",
      number: "015001793",
      hours: [
        ["Thursday", "10AM-4AM"],
        ["Friday", "10AM-4AM"],
        ["Saturday", "Closed"],
        ["Sunday", "10AM-4AM"],
        ["Monday", "10AM-4AM"],
        ["Tuesday", "10AM-4AM"],
        ["Wednesday", "10AM-4AM"],
      ],
    },
  ],
  Lalitpur: [
    {
      name: "Ekantakuna",
      coordinates: [27.665311212571552, 85.31123496596034],
      link: "https://maps.app.goo.gl/SvZNNY4UHt9UVvia6",
      location: "M886+4G6, Ring Rd, Lalitpur 44600",
      number: "015001793",

      hours: [
        ["Thursday", "10AM-4AM"],
        ["Friday", "10AM-4AM"],
        ["Saturday", "Closed"],
        ["Sunday", "10AM-4AM"],
        ["Monday", "10AM-4AM"],
        ["Tuesday", "10AM-4AM"],
        ["Wednesday", "10AM-4AM"],
      ],
    },
  ],
  Pokhara: [
    {
      name: "Ekantakuna",
      coordinates: [27.665311212571552, 85.31123496596034],
      link: "https://maps.app.goo.gl/SvZNNY4UHt9UVvia6",
      location: "M886+4G6, Ring Rd, Lalitpur 44600",
      number: "015001793",
      hours: [
        ["Thursday", "10AM-4AM"],
        ["Friday", "10AM-4AM"],
        ["Saturday", "Closed"],
        ["Sunday", "10AM-4AM"],
        ["Monday", "10AM-4AM"],
        ["Tuesday", "10AM-4AM"],
        ["Wednesday", "10AM-4AM"],
      ],
    },
  ],
};
