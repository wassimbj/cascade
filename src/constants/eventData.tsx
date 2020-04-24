export interface Event {
  Name: string;
  Venue: string;
  Category: "TOATTEND" | "TOHOST";
  Datetime: string;
  Presenters?: { Name: string; Thumbnail?: string }[];
  Attendees?: string;
  RegisterURL?: string;
  Links?: any[];
}

export const events: Event[] = [
  {
    Name: "LoginRadius IO Launch",
    Venue: "91Springboard, Kondapur, Hyderabad",
    Category: "TOHOST",
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
  },
  {
    Name: "pyconf.hydpy.org 2019",
    Datetime: "12/07/2019",
    Venue: "T-HUB, IIIT-H",
    Category: "TOATTEND",
    Attendees: ""
  },
  {
    Name: "External Hackathon",
    Datetime: "01/04/2020",
    Venue: "Jaipur Office",
    Category: "TOHOST",
    Attendees: ""
  },
  {
    Name: "Full Day .IO Hackathon (Colleges)",
    Datetime: "12/01/2019",
    Venue: "TO BE DECIDED",
    Category: "TOHOST",
    Attendees: ""
  },
  {
    Name: "LoginRadius Developer Event",
    Datetime: "12/15/2019",
    Venue: "Hyderabad Office",
    Category: "TOHOST",
    Attendees: ""
  },
  {
    Name: "LoginRadius Developer Day",
    Datetime: "12/09/2019",
    Venue: "Jaipur Office",
    Category: "TOHOST",
    Attendees: ""
  },
  {
    Name: "JSFoo Pune 2020",
    Datetime: "02/28/2020",
    Venue: "Pune",
    Category: "TOATTEND",
    Attendees: ""
  },
  {
    Name: "ReactFoo Pune 2020",
    Datetime: "02/28/2020",
    Venue: "Pune",
    Category: "TOATTEND",
    Attendees: ""
  },
  {
    Name: "GIDS 2020",
    Datetime: "04/20/2020",
    Venue: "Bangalore",
    Category: "TOATTEND",
    Attendees: ""
  },
  {
    Name: "Kubernetes Forum 2020",
    Datetime: "02/20/2020",
    Venue: "Delhi",
    Category: "TOATTEND",
    Attendees: ""
  },
  {
    Name:
      "Meetup #51 - Kickstart Your 2020 Container Journey with Docker & Kubernetes + Kube101 Workshop Contd",
    Datetime: "02/29/2020",
    Venue: "Bangalore",
    Category: "TOATTEND",
    Attendees: ""
  },
  {
    Name: "NetConf 2020",
    Datetime: "03/27/2020",
    Venue: "Bangalore",
    Category: "TOATTEND",
    Attendees: ""
  },
  {
    Name: "RootConf 2020",
    Datetime: "06/19/2020",
    Venue: "Bangalore",
    Category: "TOATTEND",
    Attendees: ""
  },
  {
    Name: "CSharpCon 2020",
    Datetime: "03/13/2020",
    Venue: "Delhi",
    Category: "TOATTEND",
    Attendees: ""
  },
  {
    Name: "Pune Data Conference 2020",
    Datetime: "05/16/2020",
    Venue: "Pune",
    Category: "TOATTEND",
    Attendees: ""
  }
];