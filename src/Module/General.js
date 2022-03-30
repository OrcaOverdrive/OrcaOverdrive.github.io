// Importing all sponsors logos from Assets
import taskade from "./Assets/sponsorsLogos/taskade.png";
import Replit from "./Assets/sponsorsLogos/replit.png";
import interviewC from "./Assets/sponsorsLogos/interview-cake.jpg";
import echoAR from "./Assets/sponsorsLogos/echoAR.png";
import cfc from "./Assets/sponsorsLogos/cfc.png";
import pass from "./Assets/sponsorsLogos/1pass.png";
import glimpse from "./Assets/sponsorsLogos/glimpse.png";
import qoom from "./Assets/sponsorsLogos/qoom.svg";
import sublime from "./Assets/sponsorsLogos/sublime.png";
import egg from "./Assets/sponsorsLogos/egg.png";
import ll from "./Assets/sponsorsLogos/ll.png";
import ACF from "./Assets/sponsorsLogos/ACF.png";

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets
import me from "./Assets/teami/me.png";
import moon from "./Assets/teami/moon.png";
import Ryah from "./Assets/teami/Ryah.jpg";
import lyin from "./Assets/teami/lyin.jpg";
import zoha from "./Assets/teami/zoha.png";
import Zach from "./Assets/teami/Zach.jpg";
import John from "./Assets/teami/John.jpg";

/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from "./Assets/boy.png";





const TOP_SECTION = {
  TITLE: "Join OrcaOverdrive's Robotics Team",
  Typed_effect: ["Gain Technical Skills and Experience", "Learn about teamwork and leadership"],
  SHORT_DESCRIPTION:
    "Join us for creation, innovation, & fun.",
  IMG_SRC: boy,
  DISCORD_LINK: "",
  HACKERS_REGISTRATION_FORM_LINK:
    "mailto:recruiting@orcaoverdrive.com"
};

const SOCIALS = {
  instagram: "",
  discord: "",
  linkedin: "",
  twitter: "",
  devpost: "",
  email: "mailto:info@orcaoverdrive.com",
  mail: "info@orcaoverdrive.com"
};

const MIDDLE_SECTION = {
  TITLE: "What we do.",
  LONG_DESCRIPTION:
    "Orca Overdrive is an open team for highschool students to join who are passionate about STEM and Robotics.  As a team, we tackle difficult engineering problems and challenges to build our skills and practice gracious professionalism.  We are based in north van but students from all regions are welcome!",
  LOGO_EFFECT: true,
  LOGO: ""
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNFBQME44TzJZWDc2UFgwTUtLN0xDQVYyUi4u"
  },
  JOIN_TEAM: {
    required: true,
    src: "mailto:recruiting@orcaoverdrive.com"
  },
  Privacy_policy: {
    required: true,
    src: ""
  },
  Terms_of_use: {
    required: true,
    src: ""
  }
};

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i class="first fas fa-4x fa-trophy"></i>,
      type: "FIRST Paci : Quarter Semi-Finalists",
      content:
        "Competed in Canadian Pacific North Western FRC Competition in 2022 and made it to the Quater Semi-Finals.",
      src: "https://youtube.com/playlist?list=PLZT9pIgNOV6Zm41-OUqrR1KSHAmyMul1w"
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: "Vince",
      role: "Team Captain",
      github: "",
      linkedin: "",
      img: me
    },
    {
      Name: "Hoshyar",
      role: "Member",
      github: "",
      linkedin: "",
      img: moon
    },
    {
      Name: "Eemaan",
      role: "Member",
      github: "",
      linkedin: "",
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: "Connor",
      role: "Member",
      github: "",
      linkedin: "",
      img: lyin
    },
    {
      Name: "Andy",
      role: "Member",
      github: "",
      linkedin: "",
      img: zoha
    },
    {
      Name: "Daylen",
      role: "Member",
      github: "",
      linkedin: "",
      img: zoha
    }  
  ] 
];

const JudgesInfo = [
  [
    //Array 1
    {
      Name: "Zachary Anderson",
      role: "Lead Mentor",
      github: "https://github.com/ZachaRuba",
      linkedin: "https://www.linkedin.com/in/zachary-anderson-434084167/",
      img: Zach
    },
    {
      Name: "John Omeljaniuk",
      role: "Mentor",
      github: "",
      linkedin: "",
      img: John
    },
    {
      Name: "Robert Olson",
      role: "Mentor",
      github: "",
      linkedin: "",
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: "Ross Janke",
      role: "Mentor",
      github: "",
      linkedin: "",
      img: lyin
    }  
  ] 
];


/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: cfc}, {src: sublime}, {src: echoAR}], //Array 1
  [{src: taskade}, {src: Replit}, {src: qoom}], //Array 2
  [{src: interviewC}, {src: pass}, {src: glimpse}], //Array 3
  [{src: egg}, {src: ll}, {src: ACF}] //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions  = [
  [
    [
      {
        label: "What do you do on the team?",
        content:
        'Our team is constantly registering in robotics competitions around the world to compete in.  We have competed in the FIRST Robotics Competition and MATE ROV in the past.'      
      },
      {
        label: "Who can join?",
        content: "Anyone in High School Grades 8-12."
      },
      {
        label: "Can I join if I don't have any experience?",
        content: "No worries, we love to welcome first timers and start their journey into robotics. You will be working with team captains and sponsors that you can learn from."
      },
      {
        label: "I'm not in high school.  Can I still help?",
        content: "This team is only for high school students however, if you are a university student or graduated engineer we are always looking for more mentors!"
      }
    ],
    [
      {
        label: "How do I join?",
        content: "Email us!  You or your parents will have to sign some liability and photo/video waivers when you join."
      },
      {
        label: "I have more questions?",
        content: "Reach us directly at (info@orcaoverdrive.com) we would happy to help you."
      }
      ,
      {
        label: "When do you meet?",
        content: "Every saturday from 9:30am to 12:30pm we have a general group meeting at Zen Maker Lab's HQ 272 E 1st Street in North Vancouver BC."
      }
      ,
      {
        label: "Will there be swag?",
        content: "We make T-shirts and Stickers for each event with our sponsors!."
      }
    ]
  ],

];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  JudgesInfo,
  frequentlyAskedQuestions
};
