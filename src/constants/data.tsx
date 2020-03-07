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

// People
export const categories: string[] = [
  "All",
  "Software Engineer",
  "DevOps Engineer",
  "Director",
  "QA Engineer",
  "Support Engineer",
  "Customer Success",
  "Marketing",
  "Solution Engineer"
];

export interface PeopleSchema {
  Name: string;
  Location: string;
  Category: string;
  Email: string;
  Expertat: string;
  CanWorkOn: string;
  Projects: string;
  Hobbies: string;
  PersonalBlogURL: string;
  GithubURL: string;
  GithubAvatar: string;
  StackOverFlow: string;
  Medium: string;
  PersonalWebsite: string;
  Thumbnail: string;
}

export const people: PeopleSchema[] = [
  {
    Name: "Abhimanyu Rathore",
    Location: "Jaipur",
    Category: "Software Engineer",
    Email: "abhimanyu.rathore@loginradius.com",
    Expertat: "Java, NodeJS, React, Angular, MySQL, MongoDB",
    CanWorkOn:
      "Ionic,Linux,AWS, Azure,Docker,Nginx, PhoneGap,Cordova,PHP, other JS framework,HTML , CSS,\n\napart fromt tech  , training,architecture, planning,",
    Projects: "PAC",
    Hobbies: "Cooking , photography, sketching, Free hand excercise // fitness",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/abhir9",
    GithubAvatar: "YES",
    StackOverFlow: "https://stackoverflow.com/users/4822703/abhimanyu-rathore",
    Medium: "https://medium.com/@abhir95",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/abhir9.png?size=460"
  },
  {
    Name: "Aman Agrawal",
    Location: "Jaipur",
    Category: "Software Engineer",
    Email: "aman.agrawal@loginradius.com",
    Expertat: "JavaScript, Angular, React",
    CanWorkOn: "UI/UX, NodeJS, MongoDB, Python,  C++, Ionic",
    Projects: "PJSF",
    Hobbies: "",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/alark553",
    GithubAvatar: "YES",
    StackOverFlow: "https://stackoverflow.com/users/2765985/aman",
    Medium: "https://medium.com/@amanagrawal.am",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/alark553.png?size=460"
  },
  {
    Name: "Amrit Sharma",
    Location: "Jaipur",
    Category: "Software Engineer",
    Email: "amrit.sharma@loginradius.com",
    Expertat: "NodeJS, MongoDB, Hyperledger Composer",
    CanWorkOn: "GoLang, ElasticSearch, Hyperledger Fabric",
    Projects: "PBDP",
    Hobbies: "Swimming, Sketching, Cosmos Enthusiast",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/shrma-amrit",
    GithubAvatar: "YES",
    StackOverFlow: "https://stackoverflow.com/users/8837757/amrit-sharma",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/shrma-amrit.png?size=460"
  },
  {
    Name: "Anil Gupta",
    Location: "Jaipur",
    Category: "Software Engineer",
    Email: "anil.gupta@loginradius.com",
    Expertat: "C#",
    CanWorkOn: "ASP.NET, C#, JavaScript, MS-SQL, MongoDB",
    Projects: "PCA",
    Hobbies: "",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/anilswm",
    GithubAvatar: "NO",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/anilswm.png?size=460"
  },
  {
    Name: "Chinmaya Pati",
    Location: "Hyderabad",
    Category: "Software Engineer",
    Email: "chinmaya.pati@loginradius.com",
    Expertat:
      "NodeJS, React/Angular /w Redux, Mobile App Development, Databases, Project Architecture",
    CanWorkOn:
      "JS Frameworks & Libs, UI/UX, PHP, Python, Go, AWS, Docker, Nginx",
    Projects: "PAC",
    Hobbies:
      "Badminton, Chess, Competitve Programming, Playstation & PC Gaming",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/cnp96",
    GithubAvatar: "YES",
    StackOverFlow: "https://stackoverflow.com/users/5790355/chinmaya-pati",
    Medium: "https://medium.com/@chinmaya.cp",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/cnp96.png?size=460"
  },
  {
    Name: "Gopal Agarwal",
    Location: "Jaipur",
    Category: "DevOps Engineer",
    Email: "gopal.agarwal@loginradius.com",
    Expertat:
      "Kubernetes, Ansible, Linux, Docker, Azure DevOps, AWS, Azure, MEAN Stack",
    CanWorkOn: "Kubernetes, Ansible, Linux, Docker, Azure DevOps, AWS, Azure",
    Projects: "PCA",
    Hobbies: "Badminton, Table Tennis, Travelling, Online Games",
    PersonalBlogURL: "-",
    GithubURL: "https://github.com/gopalagarwal",
    GithubAvatar: "YES",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/gopalagarwal.png?size=460"
  },
  {
    Name: "Govind Malviya",
    Location: "Jaipur",
    Category: "Director",
    Email: "govind.malviya@loginradius.com",
    Expertat: ".NET, NodeJS, MongoDB, MS SQL, JavaScript",
    CanWorkOn: "Azure, AWS, Angular 1 and 2+, ionic, phonegap, Java,",
    Projects: "PJSF, PCDA",
    Hobbies: "Reading and Writing, Cooking",
    PersonalBlogURL:
      "https://govindkamalaprakashlohar.gitbooks.io/ianswerable/",
    GithubURL: "https://github.com/GovindMalviya",
    GithubAvatar: "YES",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/GovindMalviya.png?size=460"
  },
  {
    Name: "Hemant Manwani",
    Location: "Jaipur",
    Category: "Software Engineer",
    Email: "hemant.manwani@loginradius.com",
    Expertat: ".NET,C#,MS SQL, JavaScript,",
    CanWorkOn: "Angular4+,MySQL,JQuery,Java,NodeJS,Python,GO",
    Projects: "PCA",
    Hobbies: "Cricket, Badminton",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/hemant404",
    GithubAvatar: "YES",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/hemant404.png?size=460"
  },
  {
    Name: "Hridayesh Sharma",
    Location: "Jaipur",
    Category: "Software Engineer",
    Email: "hridayesh.sharma@loginradius.com",
    Expertat: "JavaScript, Linux",
    CanWorkOn: "React, JavaScript, Typescript, Nodejs",
    Projects: "PJSF",
    Hobbies: "Chess, Travelling, Reading",
    PersonalBlogURL: "https://dev.to/_hridaysharma",
    GithubURL: "https://github.com/vyasriday",
    GithubAvatar: "YES",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/vyasriday.png?size=460"
  },
  {
    Name: "Hitesh Kumawat",
    Location: "Jaipur",
    Category: "Software Engineer",
    Email: "hitesh.kumawat@loginradius.com",
    Expertat: "HTML, CSS, JQuery, Photoshop, Illustrator",
    CanWorkOn: "HTML5, SASS, LESS, STYLUS, Adobe",
    Projects: "PAC",
    Hobbies: "Cricket, Chess, Cycling",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/Hiteshkumawat",
    GithubAvatar: "YES",
    StackOverFlow: "https://stackexchange.com/users/12506837/hitesh-kumawat",
    Medium: "https://medium.com/@hiteshkumawat19",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/Hiteshkumawat.png?size=460"
  },
  {
    Name: "Kheenvraj Lomror",
    Location: "Jaipur",
    Category: "Software Engineer",
    Email: "kheenvraj.lomror@loginradius.com",
    Expertat:
      "Angular 2+,Angularjs, Java, HTML, JavaScript, JQuery, CSS,TypeScript,mysql, REST webservices",
    CanWorkOn: "Reactjs, Java,Python, DBs, web-services, nodejs, JS frameworks",
    Projects: "PJSF",
    Hobbies: "Cricket, reading, traveling, bike riding",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/rajlomror",
    GithubAvatar: "NO",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/rajlomror.png?size=460"
  },
  {
    Name: "Kunal Saini",
    Location: "Jaipur",
    Category: "Software Engineer",
    Email: "kunal.Saini@loginradius.com",
    Expertat: "C#, Go",
    CanWorkOn: "C#, Golang, JavaScript, Node, Angular, MongoDB",
    Projects: "PCA",
    Hobbies: "",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/SuperKunal",
    GithubAvatar: "YES",
    StackOverFlow: "https://stackoverflow.com/users/8171348/kunal",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/SuperKunal.png?size=460"
  },
  {
    Name: "Mayank Agarwal",
    Location: "Jaipur",
    Category: "Software Engineer",
    Email: "mayank.agarwal@loginradius.com",
    Expertat: "Javascript, JQuery, Nodejs, Mongo",
    CanWorkOn: "Golang, JS framework, Docker, Nginx, Java, AWS",
    Projects: "PCDA",
    Hobbies: "Traveling, Listening Music",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/mayankagrwal",
    GithubAvatar: "NO",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/mayankagrwal.png?size=460"
  },
  {
    Name: "Mohammed Modi",
    Location: "Hyderabad",
    Category: "Software Engineer",
    Email: "mohammed.modi@loginradius.com",
    Expertat: "Angular 2+, React JS, Node JS",
    CanWorkOn: "Python, Java, DotNet",
    Projects: "PAC",
    Hobbies: "Indoor Games, Reading",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/mohammed786",
    GithubAvatar: "NO",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/mohammed786.png?size=460"
  },
  {
    Name: "Muneer Syed",
    Location: "Hyderabad",
    Category: "DevOps Engineer",
    Email: "muneer.syed@loginradius.com",
    Expertat: "Docker, Kubernetes, Shell scripting",
    CanWorkOn: "AWS,Kubernetes,Anisble",
    Projects: "DevOps",
    Hobbies: "Cricket, Badminton, Listening to Podcasts",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/Muneer94",
    GithubAvatar: "YES",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/Muneer94.png?size=460"
  },
  {
    Name: "Narendra Pareek",
    Location: "Jaipur",
    Category: "Software Engineer",
    Email: "narendra.Pareek@loginradius.com",
    Expertat: "Node JS, GoLang, JavaScript",
    CanWorkOn: "Ionic, Angular",
    Projects: "PCDA",
    Hobbies: "Music, movies, Table Tennis, Travelling",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/pareek-narendra",
    GithubAvatar: "NO",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/pareek-narendra.png?size=460"
  },
  {
    Name: "Nitesh Jain",
    Location: "Jaipur",
    Category: "Software Engineer",
    Email: "nitesh.jain@loginradius.com",
    Expertat: "Node JS, Angular,JavaScript, Vue,MongoDB",
    CanWorkOn: "C#, JavaScript, Node, Vue, Angular, React, MongoDB",
    Projects: "PAC",
    Hobbies: "",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/niteshjain1987",
    GithubAvatar: "NO",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/niteshjain1987.png?size=460"
  },
  {
    Name: "Piyush Kumar",
    Location: "Hyderabad",
    Category: "Software Engineer",
    Email: "piyush.kumar@loginradius.com",
    Expertat: "Go",
    CanWorkOn: "Go/Python/Java/Distributed Systems/Kubernetes",
    Projects: "PBDP",
    Hobbies: "Reading, PC Gaming",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/kpiyush17",
    GithubAvatar: "NO",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/kpiyush17.png?size=460"
  },
  {
    Name: "Priyadarshan Mohanty",
    Location: "Hyderabad",
    Category: "Software Engineer",
    Email: "priyadarshan.mohanty@loginradius.com",
    Expertat: "Go",
    CanWorkOn: "Python/Scala/SQL/Spark/Hadoop/Hive",
    Projects: "PBDP",
    Hobbies: "TT, Reading Novels, Listening to Music, Watching Football",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/priyadarshan1995",
    GithubAvatar: "YES",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/priyadarshan1995.png?size=460"
  },
  {
    Name: "Puneet Singh",
    Location: "Jaipur",
    Category: "Software Engineer",
    Email: "puneet.singh@loginradius.com",
    Expertat: "NodeJS, MongoDB",
    CanWorkOn: "JavaScript, Golang, Redis, AWS",
    Projects: "PCDA",
    Hobbies: "Reading Books, Swimming,",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/puneetsingh24",
    GithubAvatar: "NO",
    StackOverFlow: "https://stackoverflow.com/users/3879440/puneet-singh",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/puneetsingh24.png?size=460"
  },
  {
    Name: "Ravi Teja Ghanta",
    Location: "Hyderabad",
    Category: "Software Engineer",
    Email: "ravi.ghanta@loginradius.com",
    Expertat: "Go, Databases, Distributed Systems, Gameplay Programming",
    CanWorkOn:
      "JS/NodeJS/Angular/React/iOS/Unity/Game Design\nInterior Design/UX/Growth Strategy",
    Projects: "PBDP",
    Hobbies: "Football, Cycling, Playstation",
    PersonalBlogURL: "https://ravitejag.github.com",
    GithubURL: "https://github.com/ravitejag",
    GithubAvatar: "YES",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/ravitejag.png?size=460"
  },
  {
    Name: "Surbhi Gupta",
    Location: "Jaipur",
    Category: "Software Engineer",
    Email: "surbhi.gupta@loginradius.com",
    Expertat: ".Net,C# ,Ms SQL,Mongo DB,Javascript",
    CanWorkOn: "Angular 4+,Node JS, GO",
    Projects: "PCA",
    Hobbies: "Writing, Cooking, badminton",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/surbhilr",
    GithubAvatar: "NO",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/surbhilr.png?size=460"
  },
  {
    Name: "Versha Gupta",
    Location: "Jaipur",
    Category: "Software Engineer",
    Email: "versha.gupta@loginradius.com",
    Expertat: "PHP,  Angular, React Js, Node JS, Javascript",
    CanWorkOn: "Python, Coldfusion, Java, DOTNet",
    Projects: "PAC",
    Hobbies: "Badminton, Chess, Cooking, TT",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/VershaGupta",
    GithubAvatar: "NO",
    StackOverFlow: "https://stackoverflow.com/users/1455329/versha-gupta",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/VershaGupta.png?size=460"
  },
  {
    Name: "Vijay Singh",
    Location: "Jaipur",
    Category: "Software Engineer",
    Email: "vijay.singh@loginradius.com",
    Expertat: ".Net/NodeJs/MongoDB/MsSQL/Azure",
    CanWorkOn: "Angular/PhoneGap/Ionic/Nginx",
    Projects: "PCA",
    Hobbies: "",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/VijayShekhawat",
    GithubAvatar: "YES",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/VijayShekhawat.png?size=460"
  },
  {
    Name: "Vishal Sharma",
    Location: "Jaipur",
    Category: "DevOps Engineer",
    Email: "vishal.sharma@loginradius.com",
    Expertat: "Docker, Kubernetes",
    CanWorkOn:
      "Kubernetes, AzureDevOps, Ansible, Prometheus, Zabbix, Grafana, Jenkins, Openshift, Docker, AWS, Site24*7, RunScope, Python, JAVA, Shell Scripting, Azure",
    Projects: "DevOps",
    Hobbies:
      "Carrom, Cricket, TT, Badminton, Kabaddi, Watching Football, Travelling",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/Vishal-Sharma15",
    GithubAvatar: "NO",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/Vishal-Sharma15.png?size=460"
  },
  {
    Name: "Pawan Dixit",
    Location: "Jaipur",
    Category: "QA Engineer",
    Email: "pawan.Dixit@loginradius.com",
    Expertat: "NodeJS, Selenium, Automation Testing, Manual Testing",
    CanWorkOn: "JS/Node JS/Java",
    Projects: "Regression",
    Hobbies: "Cricket, TT, Learn new technology",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/PawanDixit23",
    GithubAvatar: "YES",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/PawanDixit23.png?size=460"
  },
  {
    Name: "Ankit Singh",
    Location: "Jaipur",
    Category: "Software Engineer",
    Email: "ankit.singh@loginradius.com",
    Expertat: "PHP",
    CanWorkOn: "Pyhton/ROR/Node JS/\nGo/JS/Coldfusion",
    Projects: "Implementation",
    Hobbies: "Cricket, TT",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/ankiitsinghh",
    GithubAvatar: "YES",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/ankiitsinghh.png?size=460"
  },
  {
    Name: "Giriraj Yadav",
    Location: "jaipur",
    Category: "Software Engineer",
    Email: "giriraj.yadav@loginradius.com",
    Expertat: "Android",
    CanWorkOn:
      "Ios/Java/C#/JS/NodeJs/\nAnguler/React Native\nPhoneGap,Cordova,Ionic,Xamarin",
    Projects: "Mobile Implementation",
    Hobbies: "Cricket,TT",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/Giriraj1200",
    GithubAvatar: "YES",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/Giriraj1200.png?size=460"
  },
  {
    Name: "Kailash Soni",
    Location: "jaipur",
    Category: "Software Engineer",
    Email: "kailash.soni@loginradius.com",
    Expertat: "PHP, Python, ROR, NodeJS, MySQL, MongoDB",
    CanWorkOn: "",
    Projects: "NOCE",
    Hobbies: "",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/soninow",
    GithubAvatar: "YES",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/soninow.png?size=460"
  },
  {
    Name: "Ashish Sharma",
    Location: "jaipur",
    Category: "Software Engineer",
    Email: "ashish.sharma@loginradius.com",
    Expertat: "Android",
    CanWorkOn: "Java,C#,nodejs,",
    Projects: "Implementation",
    Hobbies: "Cricket,photography,traveling",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/ashish8947",
    GithubAvatar: "NO",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/ashish8947.png?size=460"
  },
  {
    Name: "Surendranatha Reddy",
    Location: "Hyderabad",
    Category: "QA Engineer",
    Email: "surendranath.reddy@loginradius.com",
    Expertat: "Java, JavaScript, Selenium, Manual and Automation Testing, SQL",
    CanWorkOn: "HTML, CSS, DB Testing, Jmeter, Jenkins, ES Queries",
    Projects: "PBDP",
    Hobbies: "Sleeping, Sports, Games",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/reddysuren",
    GithubAvatar: "YES",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/reddysuren.png?size=460"
  },
  {
    Name: "Abhishek Saini",
    Location: "Jaipur",
    Category: "Support Engineer",
    Email: "abhishek.saini@loginradius.com",
    Expertat: "",
    CanWorkOn: "NodeJs, Javascript,Python",
    Projects: "Support",
    Hobbies: "Football, Cricket, Tennis",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/abhi-9",
    GithubAvatar: "YES",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/abhi-9.png?size=460"
  },
  {
    Name: "Neha Vyas",
    Location: "Jaipur",
    Category: "QA Engineer",
    Email: "neha.vyas@loginradius.com",
    Expertat: "Automation Testing, Manual Testing",
    CanWorkOn: "Automation Testing,Manual Testing",
    Projects: "PAC",
    Hobbies: "Travelling,Shopping,music",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/nehavyasQA Engineer",
    GithubAvatar: "NO",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/nehavyasQA Engineer.png?size=460"
  },
  {
    Name: "Akshaya Sharma",
    Location: "Jaipur",
    Category: "Software Engineer",
    Email: "akshaya.sharma@loginradius.com",
    Expertat: "NodeJS, JavaScript, PHP, Angular2+, MySQL, MongoDB",
    CanWorkOn: "React",
    Projects: "Implementation",
    Hobbies: "Reading,Badminton",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/akshay-s-770",
    GithubAvatar: "YES",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/akshay-s-770.png?size=460"
  },
  {
    Name: "Apeksha Gupta",
    Location: "Jaipur",
    Category: "Software Engineer",
    Email: "apeksha.gupta@loginradius.com",
    Expertat: "PHP, JavaScript, NodeJS",
    CanWorkOn: ".NET, MongoDB",
    Projects: "Implementation",
    Hobbies: "Craft,Movies",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/ApekshaAgarwal",
    GithubAvatar: "NO",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/ApekshaAgarwal.png?size=460"
  },
  {
    Name: "Gaurav Bewal",
    Location: "Jaipur",
    Category: "QA Engineer",
    Email: "gaurav.bewal@loginradius.com",
    Expertat: "Java, HTML, CSS",
    CanWorkOn: "Andriod, javascript",
    Projects: "PJSF",
    Hobbies: "Cricket, Cooking and Singing",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/GauravBewal",
    GithubAvatar: "NO",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/GauravBewal.png?size=460"
  },
  {
    Name: "Harjinder Singh Banga",
    Location: "Jaipur",
    Category: "QA Engineer",
    Email: "harjinder.banga@loginradius.com",
    Expertat:
      "NodeJS, Selenium, Automation Testing, Manual Testing, Java, HTML, CSS, JavaScript",
    CanWorkOn: "Node Js and Java",
    Projects: "Verbinders, Integrators",
    Hobbies: "Read Self help books, Learn new technology",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/hsbanga",
    GithubAvatar: "YES",
    StackOverFlow: "https://stackoverflow.com/users/1481037/harjinder-banga",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/hsbanga.png?size=460"
  },
  {
    Name: "Rakesh Pareek",
    Location: "Jaipur",
    Category: "QA Engineer",
    Email: "rakesh.pareek@loginradius.com",
    Expertat: "Automation Testing, Manual Testing",
    CanWorkOn:
      "Selenium, webdriverio, mocha, Php, JavaScript, Nodejs, html, css",
    Projects: "PCA",
    Hobbies: "",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/rkpareek",
    GithubAvatar: "NO",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/rkpareek.png?size=460"
  },
  {
    Name: "Chhavi Gupta",
    Location: "Jaipur",
    Category: "QA Engineer",
    Email: "chhavi.gupta@loginradius.com",
    Expertat: "Java, Selenium, MySQL, Automation Testing, Manual Testing",
    CanWorkOn: "JavaScript, Android, Python",
    Projects: "PCA",
    Hobbies: "Badminton, reading books",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/Chhavig28",
    GithubAvatar: "NO",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/Chhavig28.png?size=460"
  },
  {
    Name: "Indrasen Kumar",
    Location: "Jaipur",
    Category: "Software Engineer",
    Email: "indrasen.kumar@loginradius.com",
    Expertat: "NodeJS, JavaScript, PHP Frameworks, MongoDB, Dialog Flow",
    CanWorkOn: "JavaScript, Android, Node Js,Java,Aws",
    Projects: "Implementation",
    Hobbies: "Badminton,Swimming,sketching,traveling",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/indrasen715/",
    GithubAvatar: "YES",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/indrasen715/.png?size=460"
  },
  {
    Name: "Manoj Singh",
    Location: "Jaipur",
    Category: "QA Engineer",
    Email: "manoj.singh@loginradius.com",
    Expertat: "Manual Testing, Automation Testing, NodeJS",
    CanWorkOn: "Java,Api automation",
    Projects: "PAC",
    Hobbies: "Cricket,Football",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/manojlr89",
    GithubAvatar: "NO",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/manojlr89.png?size=460"
  },
  {
    Name: "Kuldeep Chhipa",
    Location: "Jaipur",
    Category: "QA Engineer",
    Email: "kuldeep.chhipa@loginradius.com",
    Expertat:
      "Nightwatch, Mocha, Java-Selenium, JS, CSS, Manual Testing, Automation",
    CanWorkOn:
      "Nightwatch, mocha framewrok, Php, JavaScript, Nodejs, html, css, Selenium with JAVA",
    Projects: "PCA",
    Hobbies: "Cricket, Badminton, reading books",
    PersonalBlogURL: "http://hackeronway.blogspot.com/",
    GithubURL: "https://github.com/Kuldeep-Chhipa",
    GithubAvatar: "Yes",
    StackOverFlow: "https://stackoverflow.com/users/6033496/kuldeep-chhipa",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/Kuldeep-Chhipa.png?size=460"
  },
  {
    Name: "Ritika Kapahi",
    Location: "Jaipur",
    Category: "Customer Success",
    Email: "ritika.kapahi@loginradius.com",
    Expertat: "Customer relationship management",
    CanWorkOn: "Customer,People management documentation",
    Projects: "Customer Success",
    Hobbies: "Shopping, Travelling, Music",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/Ritika3189",
    GithubAvatar: "NO",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/Ritika3189.png?size=460"
  },
  {
    Name: "Akriti Srivastava",
    Location: "Jaipur",
    Category: "QA Engineer",
    Email: "akriti.srivastava@loginradius.com",
    Expertat: "Manual Testing, Automation Testing",
    CanWorkOn: "Monitoring ,Tracking , Nodejs, HTml, CSS, api",
    Projects: "QA Engineer, PAC",
    Hobbies: "Dancing, Cooking , Listening songs",
    PersonalBlogURL: "",
    GithubURL: "",
    GithubAvatar: "",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: ""
  },
  {
    Name: "Himanshu Kalra",
    Location: "Jaipur",
    Category: "QA Engineer",
    Email: "himanshu.kalra@loginradius.com",
    Expertat: "Manual testing, Automation testing",
    CanWorkOn: "JavaScript, Html, Data processing,",
    Projects: "Regression",
    Hobbies: "",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/Hkalra256",
    GithubAvatar: "",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/Hkalra256.png?size=460"
  },
  {
    Name: "Abhishek Singh",
    Location: "Jaipur",
    Category: "Customer Success",
    Email: "abhishek.singh@loginradius.com",
    Expertat:
      "Python, HTML, CSS, Basic JS, Application Support, Customer service, Troubleshooting, Client interaction, Troubleshooting",
    CanWorkOn:
      "Python, Django, Flask, Javascript, HTML, CSS, MySQL, Postgre SQL, Mongodb, Teradata, Arduino C, Selenium, Manual Testing and Browser Automation by Python",
    Projects: "Aiders",
    Hobbies: "Basketball, Cricket, Badminton, Swimming, Listening Songs",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/anonymous14294",
    GithubAvatar: "",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/anonymous14294.png?size=460"
  },
  {
    Name: "Ankit Sharma",
    Location: "Jaipur",
    Category: "Customer Success",
    Email: "ankit.sharma@loginradius.com",
    Expertat:
      "Solving Customer queries, Troubleshooting, Client interaction, Documentation",
    CanWorkOn:
      "Client interaction, API, JavaScript, HTML, creating MD file, salesforce, Zendesk.",
    Projects: "Aiders",
    Hobbies: "Cricket, TT, Watching movies, Exercising.",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/Anky-44",
    GithubAvatar: "No",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/Anky-44.png?size=460"
  },
  {
    Name: "Rajeev Sharma",
    Location: "Jaipur",
    Category: "Customer Success",
    Email: "rajeev.sharma@loginradius.com",
    Expertat:
      "Application Support, Customer service, Troubleshooting, Client interaction",
    CanWorkOn:
      "JavaScript, Html, CSS, Cllient handling, customer service, debugging",
    Projects: "Aiders",
    Hobbies: "Cricket, volleyball, travel, Movies, TT",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/rajeevsharma34",
    GithubAvatar: "",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/rajeevsharma34.png?size=460"
  },
  {
    Name: "Swati Soni",
    Location: "Jaipur",
    Category: "Customer Success",
    Email: "engswatisoni1993@gmail.com",
    Expertat:
      "Troubleshooting, Customer Service, Documentation, Drafting mails",
    CanWorkOn: "API, JavaScript",
    Projects: "Aiders",
    Hobbies: "Sketching, Cooking, Reading",
    PersonalBlogURL: "",
    GithubURL: "",
    GithubAvatar: "",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: ""
  },
  {
    Name: "Shivangini Yadav",
    Location: "Jaipur",
    Category: "Marketing",
    Email: "shivangini.yadav@loginradius.com",
    Expertat: "SEO, SMO, SMM, PPC, SEM",
    CanWorkOn: "Content, Influencer marketing",
    Projects: "Marketing",
    Hobbies: "Travelling, Music",
    PersonalBlogURL: "",
    GithubURL: "",
    GithubAvatar: "",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: ""
  },
  {
    Name: "Arpita Garg",
    Location: "Jaipur",
    Category: "QA Engineer",
    Email: "arpita.garg@loginradius.com",
    Expertat:
      "Functional Testing, Automation Testing using UFT, Defect Management tool - ALM, SAP Confuguration and Functional Testing for SD and MM Module.",
    CanWorkOn: "Html, CSS, Javascript, API Testing",
    Projects: "QA Engineer",
    Hobbies: "Painting, Sketching, Cooking and Travelling",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/Arpita1311-cts",
    GithubAvatar: "",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/Arpita1311-cts.png?size=460"
  },
  {
    Name: "Aditya Soni",
    Location: "Jaipur",
    Category: "QA Engineer",
    Email: "aditya.soni@loginradius.com",
    Expertat: "Manual testing, Exploratory testing, Non functional testing",
    CanWorkOn: "HTML, CSS, Javascript, SDK, API and Integration Testing",
    Projects: "QA Engineer",
    Hobbies: "Travelling, Cricket and Listen Rap Songs",
    PersonalBlogURL: "",
    GithubURL: "",
    GithubAvatar: "",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: ""
  },
  {
    Name: "B L V Ramprasad",
    Location: "Hyderbad",
    Category: "Software Engineer",
    Email: "blv.ramprasad@loginradius.com",
    Expertat:
      ".Net, Angular, C#, SQL Server, MSBI, JQuery, Javascript, Autodesk Inventor Plugins, Web API, WCF, Qbos",
    CanWorkOn: "React,RPC,GoLang,Devops,Hybrid mobile apps",
    Projects: "PCA",
    Hobbies: "Cricket, TT, Volleyball, Badminton",
    PersonalBlogURL: "",
    GithubURL: "",
    GithubAvatar: "",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: ""
  },
  {
    Name: "Megha Lal",
    Location: "Jaipur",
    Category: "Customer Success",
    Email: "megha.lal@loginradius.com",
    Expertat: "HTML, Big data, C, JavaScript, Troubleshooting, Client Handling",
    CanWorkOn: "",
    Projects: "Aiders",
    Hobbies: "",
    PersonalBlogURL: "",
    GithubURL: "",
    GithubAvatar: "",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: ""
  },
  {
    Name: "Saikiran Babladi",
    Location: "Hyderabad",
    Category: "Solution Engineer",
    Email: "saikiran.babladi@loginradius.com",
    Expertat:
      "Solutions Engineering, RFx Management, Client Product Demonstrations",
    CanWorkOn: "HTML, CSS",
    Projects: "Solution Engineering",
    Hobbies: "Basketball, Console Gaming, Cooking",
    PersonalBlogURL: "",
    GithubURL: "",
    GithubAvatar: "",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: ""
  }
];
