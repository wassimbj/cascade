export interface Event {
  Name: string;
  Venue: string;
  Tags: string[];
  Datetime: string;
  Presenters: { Name: string; Thumbnail?: string }[];
  RegisterURL: string;
  Links: any[];
}

export interface Activities {
  name: string;
  venue: string;
  categories: string[];
  presenters: string[];
  links: { name: string; url: string }[];
  thumbnail: string;
}

export const events: Event[] = [
  {
    Name: "LoginRadius IO Launch",
    Venue: "91Springboard, Kondapur, Hyderabad",
    Tags: ["Engineering", "cIAM"],
    Datetime: "2020-04-01T12:30:00Z",
    Presenters: [
      {
        Name: "ravi.ghanta@loginradius.com",
        Thumbnail: "https://github.com/ravitejag.png?size=460"
      },
      {
        Name: "saikiran.babladi@loginradius.com"
      }
    ],
    RegisterURL: "https://loginradius.com/events/register?id=123",
    Links: [
      {
        name: "PPT",
        url: "https://twitter.com/__grt__"
      },
      {
        name: "Photos",
        url: "https://github.com/ravitejag"
      }
    ]
  }
];

export const talks = [
  {
    name: "Demo Day",
    venue: "91Springboard",
    categories: ["Engineering"],
    presenters: [
      "ravi.ghanta@loginradius.com",
      "saikiran.babladi@loginradius.com"
    ],
    links: [
      {
        name: "PPT",
        url: "https://twitter.com/__grt__"
      },
      {
        name: "Photos",
        url: "https://github.com/ravitejag"
      }
    ],
    thumbnail: "https://github.com/ravitejag.png?size=460"
  }
];

export const hackathons = [
  {
    name: "Demo Day",
    venue: "91Springboard",
    categories: ["All"],
    presenters: [
      "ravi.ghanta@loginradius.com",
      "saikiran.babladi@loginradius.com"
    ],
    links: [
      {
        name: "PPT",
        url: "https://twitter.com/__grt__"
      },
      {
        name: "Photos",
        url: "https://github.com/ravitejag"
      }
    ],
    thumbnail: "https://github.com/ravitejag.png?size=460"
  }
];

export const opensourcerepos = [
  {
    name: "JS SDK",
    description: "lorem ipsum",
    tags: ["All"],
    links: [
      {
        name: "Github",
        url: "https://github.com/ravitejag"
      },
      {
        name: "Live",
        url: "https://github.com/ravitejag"
      }
    ],
    thumbnail: "https://github.com/ravitejag.png?size=460"
  }
];