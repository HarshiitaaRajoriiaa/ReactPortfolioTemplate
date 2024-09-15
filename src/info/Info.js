import self from "../img/self.png"
import am from "../img/2am.jpg"
import brain from "../img/brain.jpg"
import food from "../img/foodpoint.jpg"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = true;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Harshita",
    lastName: "Rajoria",
    initials: "Home", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            // emoji: ''
            text: ' </> Fueled by coffee'
        },
        {
            // emoji: '🌎',
            text: '</> based in the India'
        },
        {
            // emoji: "💼",
            text: " </> Pre Final Year student at IGTDUW"
        },
        {
            // emoji: "📧",
            text: " </> harshitarajoria02@gmail.com"
        }
    ],
    socials: [
        
        {
            link: "https://www.instagram.com/theycallme_harshita/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/HarshiitaaRajoriiaa",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/harshita-rajoria-68110b24a/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Harshita. I'm a student at Indira Gandhi Delhi Technical University.  I enjoy looking at mountains for hours, and I have keen interest in designing and web developing. you should hire me for making you website more beautiful and user friendly",
    skills:
        {
            proficientWith: ['javascript',  'git', 'github',  'html5', 'css3', 'figma', 'Java' , 'SQL' , 'Tailwind'],
            exposedTo: [ 'react' , 'python' , 'R' , ]
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'Dancing',
            emoji: '💃🏻'
        },
        {
            label: 'Travelling',
            emoji: '✈️'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "2 A.M Thoughts",
            live: "https://manvi1718.github.io/2AMT/index.html", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/HarshiitaaRajoriiaa/2-A.M-Thoughts?tab=readme-ov-file", // this should be a link to the **repository** of the project, where the code is hosted.
            image: am
        },
        {
            title: "Brain Tumor Classification",
            // live: "https://paytonpierce.dev",
            // source: "https://github.com/paytonjewell",
            image: brain
        },
        {
            title: "E-commerece website",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: food
        }
    ]
}