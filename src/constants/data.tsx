/**
 * Interfaces
 */
export interface People {
  Name: string;
  Location: string;
  Category: string;
  Email: string;
  Expertat: string;
  CanWorkOn: string;
  Team: string;
  Hobbies: string;
  PersonalBlogURL: string;
  GithubURL: string;
  GithubAvatar: string;
  StackOverFlow: string;
  Medium: string;
  PersonalWebsite: string;
  Thumbnail: string;
}

export interface Activities {
  name: string;
  venue: string;
  categories: string[];
  presenters: string[];
  links: { name: string; url: string }[];
  thumbnail: string;
}

/**
 * Constants
 */
export const people: People[] = [
  {
    Name: "Abhimanyu Rathore",
    Location: "Jaipur",
    Category: "Developer",
    Email: "abhimanyu.rathore@loginradius.com",
    Expertat: " Java, NodeJS, React,  Angular, MySql ,Mongo",
    CanWorkOn:
      "Ionic,Linux,AWS, Azure,Docker,Nginx, PhoneGap,Cordova,PHP, other JS framework,HTML , CSS,\n\napart fromt tech  , training,architecture, planning,",
    Team: "PAC",
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
    Category: "Developer",
    Email: "aman.agrawal@loginradius.com",
    Expertat: "JavaScript, Angular, React",
    CanWorkOn: "UI/UX, NodeJS, MongoDB, Python,  C++, Ionic",
    Team: "PJSF",
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
    Category: "Developer",
    Email: "amrit.sharma@loginradius.com",
    Expertat: "NodeJS, MongoDB, Hyperledger Composer",
    CanWorkOn: "GoLang, ElasticSearch, Hyperledger Fabric",
    Team: "PBDP",
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
    Category: "Developer",
    Email: "anil.gupta@loginradius.com",
    Expertat: "",
    CanWorkOn: "ASP.NET, C#, JavaScript, MS-SQL, MongoDB",
    Team: "PCA",
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
    Category: "Developer",
    Email: "chinmaya.pati@loginradius.com",
    Expertat: "NodeJS, ReactJS, Redux, Angular 4+",
    CanWorkOn:
      "JS Frameworks/Libs, UI/UX, Python, Go, AWS, Docker, Nginx, Databases, Project Architecture",
    Team: "PAC",
    Hobbies: "Badminton, Chess, CSGO, Competitve Programming, Playstation",
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
    Category: "DevOps",
    Email: "gopal.agarwal@loginradius.com",
    Expertat:
      "Kubernetes, Ansible, Linux, Docker, Azure DevOps, AWS, Azure, MEAN Stack",
    CanWorkOn: "Kubernetes, Ansible, Linux, Docker, Azure DevOps, AWS, Azure",
    Team: "DevOps",
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
    Category: "Developer",
    Email: "govind.malviya@loginradius.com",
    Expertat: ".NET, NodeJS, MongoDB, MS SQL, JavaScript",
    CanWorkOn: "Azure, AWS, Angular 1 and 2+, ionic, phonegap, Java,",
    Team: "PJSF, PCDA",
    Hobbies: "Reading and Writing, Cooking,",
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
    Category: "Developer",
    Email: "hemant.manwani@loginradius.com",
    Expertat: ".NET,C#,MS SQL, JavaScript,",
    CanWorkOn: "Angular4+,MySQL,JQuery,Java,NodeJS,Python,GO",
    Team: "PCA",
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
    Category: "Developer",
    Email: "hridayesh.sharma@loginradius.com",
    Expertat: "JavaScript, Linux",
    CanWorkOn: "React, JavaScript, Typescript, Nodejs",
    Team: "PJSF",
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
    Category: "Developer",
    Email: "hitesh.kumawat@loginradius.com",
    Expertat: "HTML, CSS, JQuery, Photoshop, Illustrator",
    CanWorkOn: "HTML5, SASS, LESS, STYLUS, Adobe",
    Team: "PAC, Design",
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
    Category: "Developer",
    Email: "kheenvraj.lomror@loginradius.com",
    Expertat:
      "Angular 2+,Angularjs, Java, HTML, JavaScript, JQuery, CSS,TypeScript,mysql, REST webservices",
    CanWorkOn: "Reactjs, Java,Python, DBs, web-services, nodejs, JS frameworks",
    Team: "PJSF",
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
    Category: "Developer",
    Email: "kunal.Saini@loginradius.com",
    Expertat: "",
    CanWorkOn: "C#, Golang, JavaScript, Node, Angular, MongoDB",
    Team: "PCA",
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
    Category: "Developer",
    Email: "mayank.agarwal@loginradius.com",
    Expertat: "Javascript, JQuery, Nodejs, Mongo",
    CanWorkOn: "Golang, JS framework, Docker, Nginx, Java, AWS",
    Team: "PCDA",
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
    Category: "Developer",
    Email: "mohammed.modi@loginradius.com",
    Expertat: "Angular 2+, React JS, Node JS",
    CanWorkOn: "Python, Java, DotNet",
    Team: "PAC",
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
    Category: "DevOps",
    Email: "muneer.syed@loginradius.com",
    Expertat: "Docker, Kubernetes, Shell scripting",
    CanWorkOn: "AWS,Kubernetes,Anisble",
    Team: "DevOps",
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
    Category: "Developer",
    Email: "narendra.Pareek@loginradius.com",
    Expertat: "Node JS, GoLang, JavaScript",
    CanWorkOn: "Ionic, Angular",
    Team: "PCDA",
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
    Category: "Developer",
    Email: "nitesh.jain@loginradius.com",
    Expertat: "Node JS, Angular,JavaScript, Vue,MongoDB",
    CanWorkOn: "C#, JavaScript, Node, Vue, Angular, React, MongoDB",
    Team: "PAC",
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
    Category: "Developer",
    Email: "piyush.kumar@loginradius.com",
    Expertat: "",
    CanWorkOn: "Go/Python/Java/Distributed Systems/Kubernetes",
    Team: "PBDP",
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
    Category: "Developer",
    Email: "priyadarshan.mohanty@loginradius.com",
    Expertat: "",
    CanWorkOn: "Python/Scala/SQL/Spark/Hadoop/Hive",
    Team: "PBDP",
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
    Category: "Developer",
    Email: "puneet.singh@loginradius.com",
    Expertat: "Node.js, MongoDB",
    CanWorkOn: "JavaScript, Golang, Redis, AWS",
    Team: "PCDA",
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
    Category: "Developer",
    Email: "ravi.ghanta@loginradius.com",
    Expertat: "Go/Databases/Distributed Systems/Gameplay Programming",
    CanWorkOn:
      "JS/NodeJS/Angular/React/iOS/Unity/Game Design\nInterior Design/UX/Growth Strategy",
    Team: "PBDP",
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
    Category: "Developer",
    Email: "surbhi.gupta@loginradius.com",
    Expertat: ".Net,C# ,Ms SQL,Mongo DB,Javascript",
    CanWorkOn: "Angular 4+,Node JS, GO",
    Team: "PCA",
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
    Category: "Developer",
    Email: "versha.gupta@loginradius.com",
    Expertat: "PHP,  Angular, React Js, Node JS, Javascript",
    CanWorkOn: "Python, Coldfusion, Java, DOTNet",
    Team: "PAC",
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
    Category: "Developer",
    Email: "vijay.singh@loginradius.com",
    Expertat: ".Net/NodeJs/MongoDB/MsSQL/Azure",
    CanWorkOn: "Angular/PhoneGap/Ionic/Nginx",
    Team: "PCA",
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
    Category: "DevOps",
    Email: "vishal.sharma@loginradius.com",
    Expertat: "",
    CanWorkOn:
      "Kubernetes, AzureDevOps, Ansible, Prometheus, Zabbix, Grafana, Jenkins, Openshift, Docker, AWS, Site24*7, RunScope, Python, JAVA, Shell Scripting, Azure",
    Team: "DevOps",
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
    Category: "QA",
    Email: "pawan.Dixit@loginradius.com",
    Expertat: "Node JS,Selenium,Automation \nTesting,Manual Testing",
    CanWorkOn: "JS/Node JS/Java",
    Team: "Regression",
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
    Category: "Developer",
    Email: "ankit.singh@loginradius.com",
    Expertat: "PHP",
    CanWorkOn: "Pyhton/ROR/Node JS/\nGo/JS/Coldfusion",
    Team: "Implementation",
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
    Category: "Developer",
    Email: "giriraj.yadav@loginradius.com",
    Expertat: "Android",
    CanWorkOn:
      "Ios/Java/C#/JS/NodeJs/\nAnguler/React Native\nPhoneGap,Cordova,Ionic,Xamarin",
    Team: "Mobile Implementation",
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
    Category: "Developer",
    Email: "kailash.soni@loginradius.com",
    Expertat: "PHP, Pyhton, ROR, Node JS,MySQL,MongoDB,",
    CanWorkOn: "",
    Team: "NOCE",
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
    Category: "Developer",
    Email: "ashish.sharma@loginradius.com",
    Expertat: "android",
    CanWorkOn: "Java,C#,nodejs,",
    Team: "Implementation",
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
    Category: "QA",
    Email: "surendranath.reddy@loginradius.com",
    Expertat: "Java, Java Script, Selenium, Manual and Automation Testing, SQL",
    CanWorkOn: "HTML, CSS, DB Testing, Jmeter, Jenkins, ES Queries",
    Team: "QA, PBDP",
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
    Category: "Support",
    Email: "abhishek.saini@loginradius.com",
    Expertat: "",
    CanWorkOn: "NodeJs, Javascript,Python",
    Team: "Support",
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
    Category: "QA",
    Email: "neha.vyas@loginradius.com",
    Expertat: "Automation Testing,Manual Testing",
    CanWorkOn: "Automation Testing,Manual Testing",
    Team: "PAC",
    Hobbies: "Travelling,Shopping,music",
    PersonalBlogURL: "",
    GithubURL: "https://github.com/nehavyasqa",
    GithubAvatar: "NO",
    StackOverFlow: "",
    Medium: "",
    PersonalWebsite: "",
    Thumbnail: "https://github.com/nehavyasqa.png?size=460"
  },
  {
    Name: "Akshaya Sharma",
    Location: "Jaipur",
    Category: "Developer",
    Email: "akshaya.sharma@loginradius.com",
    Expertat: "NodeJs, JavaScript, PHP, Angular2+, MySQL, MongoDB",
    CanWorkOn: "React",
    Team: "Implementation",
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
    Category: "Developer",
    Email: "apeksha.gupta@loginradius.com",
    Expertat: "PHP, Javascript,NodeJs",
    CanWorkOn: ".NET, MongoDB",
    Team: "Implementation",
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
    Category: "QA",
    Email: "gaurav.bewal@loginradius.com",
    Expertat: "Java, HTML, CSS",
    CanWorkOn: "Andriod, javascript",
    Team: "PJSF",
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
    Category: "QA",
    Email: "harjinder.banga@loginradius.com",
    Expertat:
      "Node JS,Selenium,Automation \nTesting,Manual Testing, Java, HTML, CSS, Java Script",
    CanWorkOn: "Node Js and Java",
    Team: "Verbinders, Integrators",
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
    Category: "QA",
    Email: "rakesh.pareek@loginradius.com",
    Expertat: "",
    CanWorkOn:
      "Selenium, webdriverio, mocha, Php, JavaScript, Nodejs, html, css",
    Team: "PCA",
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
    Category: "QA",
    Email: "chhavi.gupta@loginradius.com",
    Expertat:
      "Java,Selenium IDE, Selenium Webdriver, MySQL, Automation Testing, Manual Testing",
    CanWorkOn: "JavaScript, Android, Python",
    Team: "PCA",
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
    Name: "Indrasen",
    Location: "Jaipur",
    Category: "Developer",
    Email: "indrasen.kumar@loginradius.com",
    Expertat: "Node Js,Javascript,Php framework,Mongodb,Dialog Flow",
    CanWorkOn: "JavaScript, Android, Node Js,Java,Aws",
    Team: "Implementation",
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
    Category: "QA",
    Email: "manoj.singh@loginradius.com",
    Expertat: "Manual Testing,Automation Testing,Nodejs",
    CanWorkOn: "Java,Api automation",
    Team: "PAC",
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
    Category: "QA",
    Email: "kuldeep.chhipa@loginradius.com",
    Expertat:
      "Nightwatch, Mocha, Java-Selenium, JS, CSS, Manual Testing, Automation",
    CanWorkOn:
      "Nightwatch, mocha framewrok, Php, JavaScript, Nodejs, html, css, Selenium with JAVA",
    Team: "PCA",
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
    Team: "CS",
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
    Category: "QA",
    Email: "akriti.srivastava@loginradius.com",
    Expertat: "Manual Testing, Automation Testing",
    CanWorkOn: "Monitoring ,Tracking , Nodejs, HTml, CSS, api",
    Team: "QA, PAC",
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
    Category: "QA",
    Email: "himanshu.kalra@loginradius.com",
    Expertat: "Manual testing,Automation testing",
    CanWorkOn: "JavaScript, Html, Data processing,",
    Team: "Regression",
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
    Team: "Aiders",
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
    Team: "Aiders",
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
    Team: "Aiders",
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
      "Troubleshooting, customer service, Documentation, Drafting mails, MD files",
    CanWorkOn: "API, JavaScript",
    Team: "Aiders",
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
    Team: "Marketing",
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
    Category: "QA",
    Email: "arpita.garg@loginradius.com",
    Expertat:
      "Functional Testing, Automation Testing using UFT, Defect Management tool - ALM, SAP Confuguration and Functional Testing for SD and MM Module.",
    CanWorkOn: "Html, CSS, Javascript, API Testing",
    Team: "QA",
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
    Category: "QA",
    Email: "aditya.soni@loginradius.com",
    Expertat: "Manual testing, Exploratory testing, Non functional testing",
    CanWorkOn: "HTML, CSS, Javascript, SDK, API and Integration Testing",
    Team: "QA",
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
    Category: "Developer",
    Email: "blv.ramprasad@loginradius.com",
    Expertat:
      ".Net,Angular,C#, SQL Server, MSBI,Jquery,Javascript,Autodesk inventor Plugins,Web Api,WCF,Qbos,Stripe integration,Authorize net Integration, Avalara tax integration.",
    CanWorkOn: "React,RPC,GoLang,Devops,Hybrid mobile apps",
    Team: "PCA",
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
    Expertat:
      "Html,Big data hadoop,C,javascript,troubleshooting,Client handling",
    CanWorkOn: "",
    Team: "Aiders",
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
    Category: "Solution Engineering",
    Email: "saikiran.babladi@loginradius.com",
    Expertat:
      "Solutions Engineering, RFx Management, Client Product Demonstrations",
    CanWorkOn: "HTML, CSS",
    Team: "Solution Engineering",
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

export const events: Activities[] = [
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

export const talks: Activities[] = [
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

export const hackathons: Activities[] = [
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

export const categories = [
  "All",
  "Developer",
  "DevOps",
  "QA",
  "Support",
  "Customer Success",
  "Marketing",
  "Solution Engineering"
];
