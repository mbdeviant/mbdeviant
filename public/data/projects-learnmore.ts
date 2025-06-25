export const projectsLearnMore = [
  {
    id: "mbdeviant",
    title: "mbdeviant.com",
    overview:
      "this very site you’re looking at. it’s my personal garage on the web. a single-page app with animated wave background that reacts to clicks, and a cube spinning around in the about section (spoiler: it hides a secret). I built this from scratch to showcase my work and mess with interactive visuals. even though it plays with 3D, I kept everything lightweight and modular. it’s fully responsive using breakpoint-based scaling, SEO-ready, and deployed on my custom domain. the logo is designed by me, using Figma. I needed a logo and my first urge was to make one.",
    insights:
      "the app is built with Next.js App Router. using both server and client components with nested layouts to keep things separate and clean. the app follows a component-based pattern with TypeScript and React under the hood. styling is done with Tailwind and daisy UI which spared me extra CSS work. I used Framer Motion for subtle animations to make the app feel more natural. Three.js handles the background canvas animations and 3D cube scene. isolated in their own components. SEO is taken care of with Next metadata properties, with optimized Open Graph images and all the other essentials.",
    buildNotes: {
      first:
        "working with Three.js was a bit of a learning curve. thoroughly optimized the 3D components to prevent WebGL context loss in certain scenarios.",
      second:
        "in early stages, I wanted to tweak Tailwind setup and ended up breaking the whole layout. had to revert to a previous commit in the branch to not repeat that mistake.",
      third:
        "props to all designers out there, making logos and taking design decisions is harder than it looks. however, graphic design is my passion.",
      fourth:
        "since my first urge is to create what I need, I started to model the cube in Blender myself. then decided not to considering the time it would take. so, thank you @danny_p3d on Sketchfab!",
      fifth:
        "instead, I put extra work on the cube in Blender just to pull that joke off. and it was fun working on it.",
    },
    codebaseLink: "https://github.com/mbdeviant/mbdeviant",
    tldr: {
      first:
        "built with Next.js, TypeScript, React, Three.js, and Tailwind/daisyUI.",
      second:
        "component-based architecture, applies separation of concerns, SEO-ready.",
      third: "fully responsive, interactive elements, custom logo design.",
    },
    screenShots: [],
  },
  {
    id: "inventory-app",
    title: "Inventory App",
    overview:
      "subtle and functional CRUD-based inventory system. designed for keeping track of products, whether it's for a small shop or just testing out backend logic. users can add, edit, and view products. each with its name, price, stock info, description and category. the interface is clean and straight to the point. built this to strengthen my Express backend game and solidify my understanding of RESTful routing. deployed on Render, fully persistent with MongoDB.",
    insights:
      "the app is powered by Node.js and Express on the backend, with Mongoose for MongoDB data modeling within an MVC architecture. input validation via Express Validator, security headers with Helmet, and rate limiting to prevent abuse. sessions -which stored in MongoDB- manage admin authentication for delete operations. all delete actions are admin-only, enforced by middleware.",
    buildNotes: {
      first:
        "ran into some schema validation issues early on. turns out forgetting to mark required fields in Mongoose leads to very silent bugs.",
      second:
        "learned the importance of clear route naming for maintainabilty, or things can get complicated fast.",
      third:
        "hosting on Render was smooth, but had to whitelist static IPs to connect the app securely to MongoDB Atlas.",
    },
    codebaseLink: "https://github.com/mbdeviant/inventory-app",
    tldr: {
      first: "Node.js + Express backend with MongoDB for data storage.",
      second:
        "CRUD operations, admin-only access, secured with Helmet and input validation.",
      third:
        "MVC architecture, sessions for authentication, deployed on Render.",
    },
    screenShots: [
      "/data/images/inventory-app.png",
      "/data/images/inventory-app-2.png",
    ],
  },
  {
    id: "the-things-we-say",
    title: "the things we say",
    overview:
      "a minimal message wall where users can drop a username and a message. once submitted, it instantly shows up on the homepage with a timestamp. no auth, no filters, just raw input from whoever visits. I made this app to experiment with user-submitted data, input handling, and a classic Express + Mongo setup. the vibe is old-school, but the backend is clean and safe. it’s lightweight, persistent, and actually kind of fun to read through.",
    insights:
      "built entirely with vanilla JavaScript on the frontend and Express.js on the backend. rate limiting is applied. used EJS for server-side rendering, keeping the frontend plain but dynamic. MongoDB handles storage, with each message saved along with its username and time of creation. inputs are sanitized, and I added basic validation so people don’t send empty messages. everything’s structured to be readable and extendable.",
    buildNotes: {
      first:
        "timestamps needed a bit of tinkering to be shown in local time. the server sends UTC time to the client, which then gets converted.",
      second:
        "all messages are shown in reverse chronological order so new ones show up instantly at the top.",
      third:
        "EJS syntax felt like cold water at first, but you get used to it once you’re in.",
      fourth: "I sometimes visit it just to reread what people (or I) wrote.",
    },
    codebaseLink: "https://github.com/mbdeviant/the-things-we-say",
    tldr: {
      first: "JavaScript, Express.js backend, EJS templating, and MongoDB.",
      second:
        "user-submitted messages with input sanitization and timestamping.",
      third: "minimalist UI, server-rendered, MVC architecture.",
    },
    screenShots: ["/data/images/the-things-we-say.png"],
  },
  {
    id: "resume-generator",
    title: "Resume Generator",
    overview:
      "a simple, focused CV builder where you fill out your info and see a live preview after submission. you can export your resume as a PDF in one click, no signups. I built this to experiment with React forms, state management, and PDF generation. the UI is clean, dark-themed, and somewhat responsive. it’s practical, but also a playground for trying out modern frontend patterns.",
    insights:
      "built with React (Vite for setup), using functional components and hooks throughout. the PDF export uses @react-pdf/renderer, which was a fun challenge to get looking right. all state is local. no backend, no cloud, just your browser. forms are split into sections. the preview renders user data. I kept the CSS custom and minimal, aiming for a smooth, distraction-free feel. the code is organized by feature, so it’s easy to extend or tweak.",
    buildNotes: {
      first:
        "the PDF export was trickier than expected. matching the live preview and the PDF layout took some trial and error.",
    },
    codebaseLink: "https://github.com/mbdeviant/resume-generator",
    tldr: {
      first:
        "React/Vite, functional components, hooks, and @react-pdf/renderer.",
      second: "live CV preview and instant PDF export",
      third: "deployed on Vercel",
    },
    screenShots: [
      "/data/images/resume-generator.png",
      "/data/images/resume-generator-2.png",
    ],
  },
  {
    id: "battleship-game",
    title: "Battleship Game",
    overview:
      "an online, live multiplayer battleship game. I originally started this by following Ania Kubów tutorial, where she covered the game logic. the plan was that another dev would build the multiplayer logic. but the project got cancelled before that happened. so after finishing the frontend, I realized I was on my own and had to write the entire multiplayer logic. to make things harder, Ania skipped over some of the actual game rules, so I added those in myself too. the game works and it’s surprisingly fun. but let’s be real, the codebase is pure chaos. ships are placed on a 10x10 grid, tracked via classes directly in the DOM. which means yes, users could literally inspect the page and see enemy ship placements. to patch that, I did what any resourceful dev would do: disabled devtools on production. not proud, but hey, as long as it works. right?",
    insights:
      "built with Node.js and Socket.IO for real-time communication. there's no frontend framework, just raw JavaScript, HTML, and a lot of DOM manipulation. the game loop logic lives server-side, with socket events managing turn syncing, move validation, and win conditions. there’s no database or sessions. just temporary in-memory state tied to socket connections. while the structure is... unstructured. the app is not even responsive so using desktop device is recommended. building this taught me a ton about WebSockets, multiplayer game flows, and how fast things can spiral when you don’t separate concerns. would I rebuild it now with a clean architecture? absolutely. but I keep it as it is to see a past version of myself.",
    buildNotes: {
      first:
        "the entire game logic is stuffed into a single `index.js` file with 500+ lines of code. refactoring wasn’t even on my radar back then.",
      second:
        "handling the logic behind the player turns and sharing the ship placement data between the clients had me questioning every line of code and life choices.",
      third:
        "ship placements were done by toggling classes on grid divs. looked fine until I realized anyone could inspect elements to cheat.",
      fourth:
        "despite the mess, the game works. it’s fast, fun, and full of lessons.",
    },
    codebaseLink: "https://github.com/mbdeviant/battleship-project/",
    tldr: {
      first: "Node.js backend with Socket.IO for multiplayer logic.",
      second: "vanilla JS frontend with 100-tile interactive grids.",
      third: "Webpack for bundling.",
    },
    screenShots: ["/data/images/battleship.png"],
  },
];
