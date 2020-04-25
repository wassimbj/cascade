export interface HacathonSchema {
  StartDate: string;
  Participants: {
    Name: string;
    Thumbnail?: string;
  }[];
  ProjectName: string;
  Status: "TODO" | "INPROGRESS" | "DONE";
}

export const hackathons: HacathonSchema[] = [
  {
    StartDate: "06/12/2019",
    Participants: [
      {
        Name: "Chinmaya Pati",
        Thumbnail: "https://github.com/cnp96.png?size=460",
      },
      {
        Name: "Mohammed Modi",
        Thumbnail: "https://github.com/mohammed786.png?size=460",
      },
    ],
    ProjectName: "Team portal and portfolio",
    Status: "INPROGRESS",
  },
  {
    StartDate: "06/12/2019",
    Participants: [
      {
        Name: "Piyush Kumar",
        Thumbnail: "https://github.com/kpiyush17.png?size=460",
      },
      {
        Name: "Priyadarshan Mohanty",
        Thumbnail: "https://github.com/priyadarshan1995.png?size=460",
      },
    ],
    ProjectName: "Testing Kafka for Data Loss",
    Status: "INPROGRESS",
  },
  {
    StartDate: "13/12/2019",
    Participants: [
      {
        Name: "Ram Prasad",
      },
    ],
    ProjectName: "Xunit implementation in patner api (POC)",
    Status: "DONE",
  },
];
