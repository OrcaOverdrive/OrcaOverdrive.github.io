// Importing all sponsors logos from Assets
import zen from "./Assets/sponsorsLogos/zen.jpg";
import nvsd44 from "./Assets/sponsorsLogos/nvsd44.jpg";
import carson from "./Assets/sponsorsLogos/LogoHeader.png";

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
import Ross from "./Assets/teami/Ross.jfif";
import Robert from "./Assets/teami/robert.jpg";

/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from "./Assets/Logo.svg";





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
      type: "FRC 2022: Quarter-Finalists",
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
      name: "Vince",
      role: "Team Captain",
      github: "",
      linkedin: "",
      img: me
    },
    {
      name: "Hoshyar",
      role: "Member",
      github: "",
      linkedin: "",
      img: moon
    },
    {
      name: "Eemaan",
      role: "Member",
      github: "",
      linkedin: "",
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      name: "Connor",
      role: "Member",
      github: "",
      linkedin: "",
      img: lyin
    },
    {
      name: "Andy",
      role: "Member",
      github: "",
      linkedin: "",
      img: zoha
    },
    {
      name: "Daylen",
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
      name: "Zachary Anderson",
      role: "Lead Mentor",
      github: "https://github.com/ZachaRuba",
      linkedin: "https://www.linkedin.com/in/zachary-anderson-434084167/",
      img: Zach
    },
    {
      name: "John Omeljaniuk",
      role: "Mentor",
      github: "",
      linkedin: "",
      img: John
    },
    {
      name: "Robert Olson",
      role: "Mentor",
      github: "",
      linkedin: "",
      img: Robert
    }
  ],
  [
    //Array 2
    {
      name: "Ross Janke",
      role: "Mentor",
      github: "",
      linkedin: "",
      img: Ross
    }  
  ] 
];


/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: zen}, {src: nvsd44}, {src: carson}] //Array 1
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
