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
  // tech, tldr
  // key features
  // challenges
  // arcitecture
  // codebase link
  // maybe add some testing to display
];
//
