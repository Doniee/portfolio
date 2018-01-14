import guide1 from './img/guide/guide-1.jpg';
import apprix1 from './img/apprix/apprix-1.jpg';
import apprix2 from './img/apprix/apprix-2.jpg';
import apprix3 from './img/apprix/apprix-3.jpg';
import element1 from './img/element-library/el-1.jpg';
import element2 from './img/element-library/el-2.jpg';
import sab1 from './img/sab/sab-1.jpg';
import sab2 from './img/sab/sab-2.jpg';
import school1 from './img/school/soundscape-1.jpg';
import school2 from './img/school/soundscape-2.jpg';
import school3 from './img/school/solar-1.jpg';
import school4 from './img/school/solar-2.jpg';

export default {
  'helsinki-guide': {
    title: 'Helsinki Guide',
    text:
      "When I travel, I like to go couchsurfing. It's like AirBnb, but free and you always get to hang out with the host. I also host couchsurfer's at home and have started to gather a list of  tips and recommendations about Helsinki for them. And of course, that would work better as I website. It is still very much a work in progress, but it is here as an example of my experiments with React. I've used for example Create React App, React router and Styled components.",
    challenges:
      'I have learned the basics of React both in school and by myself, but this is my first attempt to build something of my own with it. One challenge is to keep up with the changing tools and conventions. Even though I did a React course online just a couple months before starting this project, many things had already changed.',
    differently:
      "As the site is still in its early stages, there isn't much I would do differently. I will probably rewrite many things when I learn better ways to make sites with React. The next steps in the development are adding the content, creating more filters and a developing a possibility to view the places on a map",
    linkText: 'View site',
    href: 'https://helsinki-guide.firebaseapp.com/',
    code: 'https://github.com/Doniee/helsinki-guide',
    images: [guide1]
  },
  apprix: {
    title: 'Work at Apprix',
    text:
      "I have worked at Apprix Oy as a frontend developer for a little over two years. We develop web applications, which our our clients can use for educating and training their employees. There's different kinds of tasks like multichoice, sliders, drag & drop etc, from which the user's results are saved and shown to the managers on a statistics page. I've been working in many interesting projects, but they are confidential, so unfortunately I cannot share any examples. Some of the tools we currently use are Yarn, Sass, Gulp (Sass compiling, autoprefixer, Browser sync etc.), Javascript (mainly jQuery) and Git.",
    linkText: "Apprix's website",
    href: 'http://www.apprix.fi',
    images: [apprix1, apprix2, apprix3]
  },
  'element-library': {
    title: 'Element library',
    text:
      "Element library was part of my thesis for media engineering studies. It was made for a company where I've worked for the past two years. Essentially it is component library, that consist of component code and documentation (stored in Github) and a user interface for browsing the components. The interface has interactive examples (embedded Codepens) and images as well as categories and tags for filtering the components. It was built with Wordpress. As it is an internal tool for the company, unfortunately I cannot share a link or the code, but you can read more about it in my thesis (in Finnish, abstract is also in English).",
    challenges:
      'One challenge was to design and create a library, that could be used by developers and also by other employees, like the salespeople, graphic designers and content creators, who all have different needs. I learned about taxonomies and created custom sorting and filtering options with a help of a Wordpress plugin. I also worked with local storage for the first time, to save the filter menu state.',
    differently:
      "I would maybe try to build the interface on top of the git repository, for example with Jekyll, so there would not be a need for Wordpress. I'm not sure if that technique gives as much flexibility as Wordpress, but I would try it at least. The interface would probably be more difficult to build that way, because Wordpress has so many features and plugins (i.e. for search and filtering) to ease the process. However, it might make adding a new element easier for developers, when most needed steps are done in the repository.",
    linkText: 'View the thesis',
    href: 'http://urn.fi/URN:NBN:fi:amk-2016090714090',
    images: [element1, element2]
  },
  'sound-art-bank': {
    title: 'Sound art bank',
    text:
      "Before Apprix I worked at a company called Planetoidi, making Wordpress sites. Soundartbank, made for an artist association MUU in 2015, was one of them. It's a multilingual site, with a webstore (Woocommerce) and user profiles for artists, who can upload their work to be sold in the store. I worked closely with the client and they seemed happy with the end result.",
    challenges:
      "I learned a lot about Wordpress, for example how to make user profile pages and a Woocommerce store where the products are audio files. I learned to work with WPML (translation plugin) and to use Wordpress hooks and filters better. A big challenge was that artists can add their own products and audio tracks in the store. There's dozens of them and they would need to use the admin interface, which is not the most clear for a person who is not that familiar with Wordpress.",
    differently:
      "I would make some optimization for example in image loading, to make the site feel smoother. I would try to make the admin interface even simpler for the artists. And maybe change the design. <br>[Disclaimer, in case you check out the link: I have not worked on the site since 2015 and all features don't seem to be working perfectly anymore.]",
    linkText: 'View the site',
    href: 'http://www.soundartbank.fi',
    images: [sab1, sab2]
  },
  'school-projects': {
    title: 'School projects',
    text:
      "<b>The Soundscape Android application</b> was a group project at Metropolia UAS, made for the museum of technology in 2015. I was in the ux team. We designed the app following Google's Material design guidelines, made prototypes and did some user testing. <br><br> <b>The Solar system cycle trail</b> is an interactive map I made in 2014 with Leaflet.js and Mapbox. I did it while I was an exchange student in Vancouver, at Kwantlen Polytechnic university studying Graphic design for marketing.",
    challenges:
      '<b>Soundscape app:</b> We needed to design a simple user interface for creating soundscapes from different sounds, while also following the Material design guidelines. It required a lot of iterations, but in the end we had a nice interface, which the developers in our team made into a working app. I learned a lot about Material design and also learned to use some prototyping tools.',
    differently:
      "<b>Solar system map:</b> As a fun exercise I added a list in the Solar system map readme in Github, to explain how I would now make things differently, having a bit more experience as a developer. I would also go check the actual locations and find the best route before making the map, which unfortunately was not possible while I was in Canada. So if you actually want to use the map, you'll do it at your own risk!",
    linkText: 'View the Solar system cycle trail map',
    href: 'https://solar-system-map.firebaseapp.com/',
    code: 'https://github.com/Doniee/solar-system-map',
    images: [school1, school2, school3, school4]
  },
  portfolio: {
    title: 'Portfolio',
    text:
      'I didn\'t want to take the easy way out with the design. First I came up with the colors, then decided to use a repeating shape and chose the hexagon. I used <a href="https://github.com/brenna/csshexagon">CSS Hexagon Generator\'s</a> Sass files to create the shapes. I also used <a href="https://scrollrevealjs.org/">Scroll reveal</a> and <a href="https://github.com/cferdinandi/smooth-scroll">Smooth scroll</a> plugins. Instead of using Bootstrap or something similar, I decided to create my own grid system and modal.',
    challenges:
      "I wanted to challenge myself and use only vanilla JS, not jQuery like I normally would. I learned that however mocked jQuery is nowadays, it's still pretty handy for some things. For example, smooth scroll would have been easy to create with jQuery, but without it, it was just a lot easier to use Smooth scroll plugin. <br><br>Normally I use Gulp, but this time I tried out Parcel to bundle the application. I used dynamic import() for asynchronous content and learned a lot about promises.",
    differently:
      "The layout is a bit complex, so it took a lot of time to make it responsive. The breakpoint files became a little complicated and hacky. Starting mobile first might have helped, or maybe everything would have become as messy that way too with this layout. While making the changes for different screen sizes, I tried out CSS grid for the first time and realised how useful it can be. If I did the layout again from scratch, I would see if using grid and flexbox would make it easier to manage and test if SVG hexagons work better than the ones created with CSS, which don't render properly on all devices.",
    code: 'https://github.com/Doniee/portfolio'
  }
};
