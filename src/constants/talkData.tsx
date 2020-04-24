export const categories: string[] = [
    "Engineering",
    "Product",
    "Culture",
    "DevOps",
    "Company",
    "Sales",
    "Design"
  ];

export interface TalkSchema {
  Date: string;
  Presenter: string;
  Topic: string;
  Place: string;
  Category: string;
  PPTLink?: string;
}

export const talkData: TalkSchema[] = [
  {
    Date: "06-04-2019",
    Presenter: "Abhimanyu Singh Rathore",
    Topic: "BlockChain",
    Place: "Jaipur",
    Category: "Engineering",
    PPTLink:
      "https://drive.google.com/drive/u/0/folders/1X5ZsTa1vX6OiTwfku9NJXZg4UTZ-yNSt",
  },
  {
    Date: "09-12-2019",
    Presenter: "Yash Rathi",
    Topic: "How to make effective presentation",
    Place: "Jaipur",
    Category: "Culture",
    PPTLink:
      "https://docs.google.com/presentation/d/1L2pkFG4f6pxklyUa8bn9TMtetn4Pg2hFujXMKiC4f6M/edit#slide=id.g5e12b81e59_0_0",
  },
  {
    Date: "09-12-2019",
    Presenter: "Yash Rathi",
    Topic: "Perception",
    Place: "Jaipur",
    Category: "Culture",
    PPTLink:
      "https://docs.google.com/presentation/d/14LfK_C3cyZj8wg_qAlXkAZ-dQa3wkYUYljRio9qkk8s/edit#slide=id.g516a2fc568_0_69",
  },
  {
    Date: "09-19-2019",
    Presenter: "Sudhanshu Pandey",
    Topic: "A Curtain raiser on quality",
    Place: "Jaipur",
    Category: "Engineering",
    PPTLink:
      "https://drive.google.com/a/loginradius.com/file/d/1sF9a6nSIBCohNFASViE17rHcMLZQdfDv/view?usp=sharing",
  },
  {
    Date: "10-04-2019",
    Presenter: "Piyush Kumar",
    Topic: "Envoy Service Mesh with Demo",
    Place: "Hyderabad",
    Category: "DevOps",
    PPTLink:
      "https://docs.google.com/presentation/d/1VoarGdkmiXLNehZVt2pfi5fzHMoeeSHP/edit?dls=true",
  },
  {
    Date: "10-10-2019",
    Presenter: "Govind",
    Topic: "Learn Programming and feel the fun of Programming",
    Place: "Jaipur",
    Category: "Engineering",
    PPTLink: " https://scratch.mit.edu/explore/projects/tutorials/",
  },
  {
    Date: "10-11-2019",
    Presenter: "Muneer Syed",
    Topic: "HTTP vs HTTPs and advantages of SSL",
    Place: "Hyderabad",
    Category: "DevOps",
    PPTLink:
      "https://docs.google.com/presentation/d/1ZpMW82Yjq6jUtx_hDLpaOZg_FZe2DzdT/edit#slide=id.p1",
  },
  {
    Date: "10-22-2019",
    Presenter: "Govind",
    Topic: "SSO Protocol",
    Place: "Jaipur",
    Category: "Product",
    PPTLink:
      "https://docs.google.com/presentation/d/1MYguo5vIbE4KVfMvaZ1JrQJP5U7NyowTEiw7t5g8ios/edit",
  },
  {
    Date: "11-01-2019",
    Presenter: "Modi",
    Topic: "Event Driven Architecture Overview",
    Place: "Hyderabad",
    Category: "DevOps",
    PPTLink:
      "https://docs.google.com/presentation/d/1LJGJVnUo9yA4-qSe9QqAMUecTW0oceaB9pZElJGtyUU/edit#slide=id.p",
  },
  {
    Date: "11-01-2019",
    Presenter: "Ravi",
    Topic: "Cycling/Office Commute/Road Cycling",
    Place: "91Springboard",
    Category: "Culture",
    PPTLink:
      "https://docs.google.com/presentation/d/1o4uHNWR8Kk4390XiaSGsjO_2TJIV03pZ/edit#slide=id.p1"
  },
  {
    Date: "11-08-2019",
    Presenter: "Ravi/Sai",
    Topic: "DemoDay - LR",
    Place: "91Springboard",
    Category: "Company",
    PPTLink:
      "https://docs.google.com/presentation/d/1CUn4lmAVA7DEoQ6Ng2gazHwRrbDuXqunpv2GXblnaCw/edit"
  },
  {
    Date: "11-15-2019",
    Presenter: "Priyadarshan",
    Topic: "Hadoop Ecosystem",
    Place: "Hyderabad",
    Category: "Engineering",
    PPTLink:
      "https://docs.google.com/presentation/d/1LQGPbQq8tldSxdTAJGC3JxrFRkMDnMWTqE81QEjzfGw/edit",
  },
  {
    Date: "11-19-2019",
    Presenter: "Chinmaya/Muneer/Piyush/Ravi",
    Topic: "#rootconf Hyd Learnings",
    Place: "Hyderabad",
    Category: "DevOps",
    PPTLink:
      "https://docs.google.com/presentation/d/1hcaisH-1Z7TVBiEC5mmu0rRGKRQnmmR3F_WsWg_QCB8/edit#slide=id.gc6fa3c898_0_0"
  },
  {
    Date: "11-21-2019",
    Presenter: "Ravi",
    Topic: "Cycling/Office Commute/Road Cycling",
    Place: "Jaipur (Remote)",
    Category: "Culture",
    PPTLink:
      "https://docs.google.com/presentation/d/1o4uHNWR8Kk4390XiaSGsjO_2TJIV03pZ/edit#slide=id.p1",
  },
  {
    Date: "11-22-2019",
    Presenter: "Chinmaya",
    Topic: "Blockchain",
    Place: "Hyderabad",
    Category: "Engineering",
    PPTLink:
      "https://drive.google.com/drive/folders/1W4D0ZUuyczzJLaTpIcNr5nHlGGzOW_rN",
  },
  {
    Date: "11-25-2019",
    Presenter: "Vikram",
    Topic: "RPA",
    Place: "Jaipur",
    Category: "Engineering",
    PPTLink: "<ADD>",
  },
  {
    Date: "11-29-2019",
    Presenter: "Piyush Kumar",
    Topic: "Datadog Overview",
    Place: "Jaipur (Remote)",
    Category: "DevOps",
    PPTLink: "<ADD>",
  },
  {
    Date: "11-29-2019",
    Presenter: "Saikiran",
    Topic: "Sales Overview",
    Place: "Hyderabad",
    Category: "Sales",
    PPTLink: "<ADD>",
  },
  {
    Date: "11-29-2019",
    Presenter: "Idrasen Kumar",
    Topic: "OAuth2.0",
    Place: "Jaipur",
    Category: "Engineering",
    PPTLink: "<ADD>",
  },
  {
    Date: "12-06-2019",
    Presenter: "Ravi",
    Topic: "Game Design",
    Place: "Hyderabad",
    Category: "Design",
    PPTLink: "-",
  },
  {
    Date: "12-13-2019",
    Presenter: "Ramprasad",
    Topic: "Unit Testing",
    Place: "Hyderabad",
    Category: "Engineering",
    PPTLink:
      "https://docs.google.com/presentation/d/1NH4DxwMwsZGCi4lPgkOPwUa3bE8ICAXj/edit#slide=id.p1",
  },
  {
    Date: "12-20-2019",
    Presenter: "Piyush Kumar",
    Topic: "GRPC",
    Place: "Hyderabad",
    Category: "Engineering",
    PPTLink:
      "https://docs.google.com/presentation/d/11GECcNbSI-TrJat3ChZ_nKLO23_Ce1ex/edit#slide=id.p1",
  },
  {
    Date: "12-27-2019",
    Presenter: "Ravi",
    Topic: "Data Platform'20",
    Place: "Jaipur",
    Category: "Engineering",
    PPTLink:
      "https://docs.google.com/presentation/d/1muk4W492qrqWHKFVi4a3GkU1au0lFK6l/edit?dls=true",
  },
  {
    Date: "12-23-2019",
    Presenter: "Abhimanyu Singh Rathore",
    Topic: "WebAssembly",
    Place: "Jaipur",
    Category: "Engineering",
    PPTLink:
      "https://docs.google.com/presentation/d/1HdjZttkTJ0GqbvvDkI5M2lhRXRZS3ZLCh7KeoxqadBA/edit",
  },
  {
    Date: "01-10-2020",
    Presenter: "Priyadarshan Mohanty",
    Topic: "Apache Spark",
    Place: "Hyderabad",
    Category: "Engineering",
    PPTLink:
      "https://docs.google.com/presentation/d/1sB2Cfui420XtJHsgcBK6RkCXDyNHHgjFdDChlFuTqds/edit",
  },
  {
    Date: "01-17-2020",
    Presenter: "Modi",
    Topic: "Virtual DOM",
    Place: "Hyderabad",
    Category: "Engineering",
    PPTLink:
      "https://docs.google.com/presentation/d/1DdWnDNK8V7yJVxjuOmbL7-n6f2DuNCYgGaUIH8FLIGw/edit#slide=id.p",
  },
  {
    Date: "2-7-2020",
    Presenter: "Subash",
    Topic: "Recruitment Process",
    Place: "Hyderabad",
    Category: "Company",
    PPTLink: "-",
  },
  {
    Date: "2-20-2020",
    Presenter: "Saikiran",
    Topic: "Brainstorming - CX Framework",
    Place: "Hyderabad",
    Category: "Design",
    PPTLink: "-",
  },
  {
    Date: "02-28-2020",
    Presenter: "Priyadarshan Mohanty",
    Topic: "Intro to Machine Learning",
    Place: "Hyderabad",
    Category: "Engineering",
    PPTLink:
      "https://docs.google.com/presentation/d/1ybUpAG2uK4YHDLaP5ZMKkhxp6sCIFw3UZd9VFl0k7fw/edit#slide=id.g7ec3c45eb9_0_20",
  },
  {
    Date: "03-13-2020",
    Presenter: "Saikiran",
    Topic: "Admin Console Training  - Social/Standard Login",
    Place: "Hyderabad",
    Category: "Product",
    PPTLink: "-",
  },
  {
    Date: "03-27-2020",
    Presenter: "Surendranath Reddy",
    Topic: "Admin Console Training - MFA",
    Place: "Hyderabad (Remote)",
    Category: "Product",
    PPTLink: "-",
  },
  {
    Date: "04-03-2020",
    Presenter: "Surendranath Reddy",
    Topic: "Admin Console Training - Access Restriction & Brute Force Lockout",
    Place: "Hyderabad (Remote)",
    Category: "Product",
    PPTLink: "-",
  },
  {
    Date: "04-17-2020",
    Presenter: "Anupam Tomar",
    Topic: "Katalon Studio",
    Place: "Hyderabad (Remote)",
    Category: "Engineering",
    PPTLink: "-",
  },
];
