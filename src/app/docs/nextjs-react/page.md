---
title: Built on the Power of React
nextjs:
  metadata:
    title: Built on the Power of React
    description: Quidem magni aut exercitationem maxime rerum eos.
---

![The Power of React and Next.js](/images/the-power-of-react-nextjs.jpeg)

The React library is a powerful open-source tool for building user interfaces because it enables efficient, declarative, and component-based development. It enhances productivity and provides seamless integration for creating dynamic and interactive web applications.

---

## Powering the World's Busiest Websites

Open-source technologies have become the backbone of the internet, driving the innovation behind the world's most visited websites. From small blogs to large-scale enterprise solutions, open-source offers unparalleled flexibility and community support.

![React Icon](/images/react-icon-small.png)

### What is React?

React is a JavaScript library for building user interfaces, renowned for its efficiency and flexibility. Developed by Facebook, it enables developers to create large web applications that can change data without reloading the page, providing a seamless user experience and improving website performance.

### Reusable Components

Reusable components are at the heart of React's design philosophy. Developers can create isolated pieces of UI that can be reused and managed independently, significantly speeding up the development process and ensuring consistency across large applications.

![About WRI screenshot](/images/wri-about-slide.jpeg)

While the idea of components may bring to mind a modular way of building a high-performance website, for Jamstack sites based on React, we reinvented the concept...

#### ...on steroids.

The larger idea is that we want all elements in a website to do one thing each, and do one thing only (as best we can). This gave rise to component-based code blocks that serve not only as templates and objects with which to build user interfaces, but allow a level of composability in terms of sharing content based on state. A component can "React" to your input or the context within which the component lives (where it can receive data from parent components and much more).

---

## The Importance of Component Architecture

![Client-Server Image](/images/client-server.png)

These sections that can be seen visually on the page are components or are based on a parent component but with different information or in another state.

### For Simplicity and Reusability

The "Light." in my tagline "Light. Speed." refers to the goal of keeping website code as simple and nimble as possible. In terms of components, simple code that can be reused over and over is powerful. 

```jsx
/* A simple component button example */
export Button {
   name: 'Register now',
  color: ['bg:amber', 'text:blue', 'hover:text-to-green'],
  state: {
    on: true,
    off: false,
  },
}
```
### How We Can Turn Blocks On/Off

![Event Buttons](/images/three-icons-two-gray.png)

The buttons were key components that appeared on almost all of the website's pages. In fact, React component technology came in very handy to react to the state of the icon depending upon its context. Here you can see this is a Principles Course page, so the other two seminar icons are grayed out (but you can still click on them).

---

## A Few of the Blocks Built for the WRI Website

React blocks were used effectively in the WRI website code. Here are a few examples.

### Seminar Pages About Info

![Seminar Pages](/images/blocks-seminar-pages.png)

The about information on the seminar pages is made up of components that are reused multiple times with different content and colors. In the future, these blocks could react to things such as whether a user is logged in or registered. If someone has been to previous conferences, it could offer them different info.

### Speaker Cards

![Speaker Card Blocks](/images/blocks-speaker-cards.jpeg)

The speaker cards are a great example of a component that's reused over and over again. It's just one set of code that receives data and replicates itself as many times as needed to create the gallery of speakers. Now, when a card needs a change, the code is updated in just one place, and they're all updated, saving a tremendous amount of time.

### Bio/Abstract Layout

![Bio Abstract Blocks](/images/blocks-bio-abstract.png)

The bios and abstracts are a similar system but more complex in terms of their implementation. In this case, we're drawing from the speaker card component and additional content for multiple text blocks as seen here. The components react with different color schemes and icons based on the context in which they're used to present the content in a meaningful manner. In this case, the components react to the fact that they're in the Heavy Haul seminar and change color and the icon used. This helps to streamline code, make it modular, and enable reuse to save time and money.

---

![Summary graphic React](/images/react-summary.png)

### Summary

React, an open-source JavaScript library developed by Facebook, enables developers to build dynamic user interfaces with a component-based architecture, enhancing productivity and user experience. The framework Next.js further extends React's capabilities by providing features like automatic code-splitting, page pre-rendering, and simplified data fetching, making it a robust solution for static and server-rendered websites. These technologies, powered by the efficient and scalable Node.js runtime and supported by Turbopack and Speedy Web Compiler, are instrumental in building WRI 2024.
