export interface Event {
  Name: string;
  Location: string;
  Category: "TOATTEND" | "TOHOST";
  StartDate: string;
  Presenters?: { Name: string; Thumbnail?: string }[];
  Attendees?: string;
  RegisterURL?: string;
  Links?: any[];
}

export const events: Event[] = [
  {
    Name: "Root Conf",
    RegisterURL: "https://rootconf.in/",
    StartDate: "11/16/2019",
    Location: "T-HUB, IIIT-H, Gachibowli",
    Category: "TOATTEND",
    Attendees: "Raviteja Ghanta/Chinmaya Pati/Muneer Syed/Piyush Kumar"
  },
  {
    Name: "devfest wingify",
    RegisterURL: "https://devfest.wingify.com/",
    StartDate: "11/16/2019",
    Location: "Delhi",
    Category: "TOATTEND",
    Attendees: ""
  },
  {
    Name: "techtriveni",
    RegisterURL: "https://techtriveni.com/",
    StartDate: "11/24/2019",
    Location: "Delhi",
    Category: "TOATTEND",
    Attendees: ""
  },
  {
    Name: "rootconf 2020 delhi",
    RegisterURL: "https://hasgeek.com/rootconf/2020-delhi/",
    StartDate: "01/18/2019",
    Location: "Delhi",
    Category: "TOATTEND",
    Attendees: ""
  },
  {
    Name: "Internal Hackathon",
    RegisterURL: "Internal Hackathon",
    StartDate: "12/09/2019",
    Location: "Jaipur Office",
    Category: "TOHOST",
    Attendees: ""
  },
  {
    Name: "External Hackathon",
    RegisterURL: "External Hackathon",
    StartDate: "01/04/2020",
    Location: "Jaipur Office",
    Category: "TOHOST",
    Attendees: ""
  },
  {
    Name: "pyconf hyd 2019",
    RegisterURL: "https://pyconf.hydpy.org/2019/",
    StartDate: "12/07/2019",
    Location: "T-HUB, IIIT-H",
    Category: "TOATTEND",
    Attendees: ""
  },
  {
    Name: "Full Day .IO Hackathon (Colleges)",
    RegisterURL: "INPROGRESS",
    StartDate: "12/01/2019",
    Location: "TO BE DECIDED",
    Category: "TOHOST",
    Attendees: ""
  },
  {
    Name: "LoginRadius Developer Event ",
    RegisterURL: "INPROGRESS",
    StartDate: "12/15/2019",
    Location: "Hyderabad Office",
    Category: "TOHOST",
    Attendees: ""
  },
  {
    Name: "LoginRadius Developer Day",
    RegisterURL: "INPROGRESS",
    StartDate: "12/09/2019",
    Location: "Jaipur Office",
    Category: "TOHOST",
    Attendees: ""
  },
  {
    Name: "JSFoo Pune 2020",
    RegisterURL: "https://hasgeek.com/jsfoo/2020-pune/",
    StartDate: "02/28/2020",
    Location: "Pune",
    Category: "TOATTEND",
    Attendees: ""
  },
  {
    Name: "ReactFoo Pune 2020",
    RegisterURL: "https://hasgeek.com/jsfoo/2020-pune/",
    StartDate: "02/28/2020",
    Location: "Pune",
    Category: "TOATTEND",
    Attendees: ""
  },
  {
    Name: "GIDS 2020",
    RegisterURL: "https://developersummit.com/india/conferences.html",
    StartDate: "04/20/2020 - 04/24/2020",
    Location: "Bangalore",
    Category: "TOATTEND",
    Attendees: ""
  },
  {
    Name: "Kubernetes Forum 2020",
    RegisterURL:
      "https://events.linuxfoundation.org/kubernetes-forum-delhi/register/",
    StartDate: "02/20/2020",
    Location: "Delhi",
    Category: "TOATTEND",
    Attendees: ""
  },
  {
    Name:
      "Meetup #51 - Kickstart Your 2020 Container Journey with Docker & Kubernetes + Kube101 Workshop Contd",
    RegisterURL:
      "https://events.docker.com/events/details/docker-bangalore-presents-meetup-51-kickstart-your-2020-container-journey-with-docker-kubernetes-kube101-workshop-contd/#/review/6a66b678baa8465bb203a925feb292ad",
    StartDate: "02/29/2020",
    Location: "Bangalore",
    Category: "TOATTEND",
    Attendees: ""
  },
  {
    Name: "NetConf 2020",
    RegisterURL: "https://hasgeek.com/rootconf/netconf-2020/",
    StartDate: "03/27/2020",
    Location: "Bangalore",
    Category: "TOATTEND",
    Attendees: ""
  },
  {
    Name: "RootConf 2020",
    RegisterURL: "https://hasgeek.com/rootconf/2020/",
    StartDate: "06/19/2020 - 06/20/2020",
    Location: "Bangalore",
    Category: "TOATTEND",
    Attendees: ""
  },
  {
    Name: "CSharpCon 2020",
    RegisterURL: "https://www.csharpcon.com/",
    StartDate: "03/13/2020",
    Location: "Delhi",
    Category: "TOATTEND",
    Attendees: ""
  },
  {
    Name: "Pune Data Conference 2020",
    RegisterURL: "http://punedataconference.com/",
    StartDate: "05/16/2020",
    Location: "Pune",
    Category: "TOATTEND",
    Attendees: ""
  },
  {
    Name: "React Summit - Remote Edition 2020",
    RegisterURL:
      "https://www.eventbrite.com/e/react-summit-remote-edition-2020-tickets-68861704211",
    StartDate: "04/17/2020",
    Location: "Remote",
    Category: "TOATTEND",
    Attendees: ""
  },
  {
    Name: "DevSecCon24 - virtual conference",
    RegisterURL:
      "https://www.eventbrite.com/e/devseccon24-virtual-conference-tickets-94550734793",
    StartDate: "06/15/2020",
    Location: "Remote",
    Category: "TOATTEND",
    Attendees: ""
  },
  {
    Name: "Future Sync",
    RegisterURL:
      "https://www.eventbrite.co.uk/e/future-sync-2020-distributed-tickets-99875694892?aff=ebdssbonlinesearch",
    StartDate: "04/16/2020",
    Location: "Remote",
    Category: "TOATTEND",
    Attendees: ""
  },
  {
    Name: "DevTalks Reimagined 2020",
    RegisterURL:
      "https://www.eventbrite.com/e/devtalks-reimagined-2020-tickets-93924092489?aff=ebdssbonlinesearch",
    StartDate: "06/10/2020",
    Location: "Remote",
    Category: "TOATTEND",
    Attendees: ""
  },
  {
    Name: "AllTheTalks.online",
    RegisterURL: "https://www.allthetalks.org/",
    StartDate: "04/15/2020",
    Location: "Remote",
    Category: "TOATTEND",
    Attendees: ""
  },
  {
    Name: "RedisConf 2020",
    RegisterURL: "https://events.redislabs.com/redisconf20/",
    StartDate: "05/12/2020-05/13/2020",
    Location: "Remote",
    Category: "TOATTEND",
    Attendees: ""
  },
];
