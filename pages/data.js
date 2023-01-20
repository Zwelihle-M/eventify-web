import Absolute from "../public/Images/Absolute.svg";
import absolute from "../public/Images/absolute1.svg";
import Game from "../public/Images/game.svg";
import Logo from "../public/Images/Logo.svg";
import Smirn from "../public/Images/Smirn.svg";
import Wings from "../public/Images/wings.svg";

export const header = {
  Logo: Logo,
  Loginbtn: "Login",
  Signupbtn:"Sign up"

};

export const nav = [
  { name: "Home", href: "/" },
  { name: "About", href: "/" },
  { name: "Contact", href: "/" },
  { name: "Cart", href: "/" },
  { name: "FAQ", href: "/" },
];

export const banner = {
  title1: "Eventify Connect ",
  title2: "Your ultimate party",
  subtitle:
    "Whether youre looking for a wild night out or a more intimate gathering, our app connects you with the perfect experience.",
    Loginbtn: "Log in",
  Startbtn: "Get Started"
};

export const about={
  title:"Who are we?",
  subtitle:"Our app, similar to Uber, connects individuals with a variety of experiences, specifically focusing on parties and events. Users can search for events that match their desired criteria, such as location, type of party, and host ratings. Hosts have the option to share information about their previous events, as well as showcase marketing videos to attract attendees. The app also features a ranking system, where hosts are segmented by their level of experience and reputation, and a review system for users to provide feedback on events they have attended. Additionally, users can create a guest list for their events, and choose to be open or anonymous in their profiles. This concept has the potential to expand beyond just parties and events, offering a diverse range of experiences for users to explore. ",

  title2:"Why us?",
  subtitle2:"Our app serves as a platform for individuals, as well as business professionals, to host and promote events, including conferences. By using our app, hosts can easily manage their events and attendees can easily find and attend events that match their interests. As a revenue stream, we take a 15% commission on all transactions made through the app. This allows for a mutually beneficial situation for both hosts and attendees, as hosts can earn money by hosting events and attendees can easily find and attend events that match their interests. The app is completely free for users, making it accessible to anyone who wishes to host or attend an event, including varsity students or celebrities looking to market a party or event they are hosting. This app empowers individuals to take charge of their own events and shifts the control away from traditional clubs and event spaces.",
};

export const safety={
  title:'Safety',
  title2:"Our app places a high priority on security to ensure a safe and enjoyable experience for all users. To ensure this, we have implemented several security measures:",
  subtitle:"1.Only individuals who have reached their country's drinking age will be allowed to join the app",
}

export const download={
  title:"Download now",
  subtitle:"Experience Connect is available for download on the App Store and Google Play. Download it now and start connecting with new experiences"
}

export const pricing ={
  title:"Pricing",
  plan:[
    {
      name:"Free",
      price:"0",
      list:[
        {
          name:"No monthly subscription"
        }

      ]
    }
  ]
}
