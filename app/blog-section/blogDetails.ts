export type blogProps = {
  title: string;
  image: string;
  date: string;
  url: string;
  available: boolean;
  index: number;
};

export const blogDetails = [
  {
    title: "Campus Connect Newsletter",
    image:
      "/cmps.png",
    date: "LATEST ISSUE",
    url: "https://www.linkedin.com/newsletters/campus-connect-7360318124828581888",
    available: true,
  },
  {
    title: "Beyond the Classroom Newsletter",
    image:
      "/shrr.png",
    date: "LATEST ISSUE",
    url: "https://www.linkedin.com/newsletters/beyond-the-classroom-7368597183362772992",
    available: true,
  },
];
