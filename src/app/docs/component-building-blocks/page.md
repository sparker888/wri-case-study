---
title: Component Building Blocks
nextjs:
  metadata:
    title: Component Building Blocks
    description: Quidem magni aut exercitationem maxime rerum eos.
---

![About WRI screenshot](/images/wri-about-slide.jpeg)

While the idea of components may bring to mind a modular way of building a high-performance website, for Jamstack sites based on React, we reinvented the concept...

#### ...on steroids.

The larger idea is that we want all elements in a website to do one thing each, and do one thing only (as best we can). It gave rise to component-based code blocks that serve not only as templates and objects with which to build user interfaces, but allow a level of composability in terms of sharing content based on state. A component can "React" to your input or the context within which the component lives (where it can receive data from parent components and much more.)

---

## The importance of Component Architecture

![Client-Server Image](/images/client-server.png)

These sections that can be seen visually on the page are components or are based on a parent component but with different information or in another state.

### For Simplicity and Reusability

The "Light." in my tagline "Light. Speed." refers to the goal of keeping website code as simple and nimble as possible. In terms of components, simple code that can be reused over and over is powerful. Take a look at this button code:

```js
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

This button code is a small component, yet it's also very powerful. This React button 'reacts' to various states, such as when someone hovers over the button to turn it from amber to green. This block of code can be reused anywhere, and it reacts to it's environment. We can also edit the original to affect all copies of the component across a website to save time.

### How we can turn blocks on/off

![Event Buttons](/images/three-icons-two-gray.png)

The buttons were key components that appeared on almost all of the websites pages. In fact, React component technology came in very handy to react to the state of the icon depending upon it's context. Here you can see this is a Principles Course page so the other two seminar icons are grayed out (but you can still click on them).

---

## A few of the blocks built for the WRI website

React blocks were used effectively in the WRI website code. Here are a few examples.

### Seminar Pages About Info

![Seminar Pages](/images/blocks-seminar-pages.png)

The about information on the seminar pages are made up of components that are reused multiple times with different content and colors. In the future, these blocks could react to things such as whether a user is logged in or registered. If someone has been to previous conferences, it could offer them different info.

### Speaker Cards

![Speaker Card Blocks](/images/blocks-speaker-cards.jpeg)

The speaker cards are a great example of a component that's reused over and over again. It's just one set of code that receives data and replicates itself as many times as needed to create the gallery of speakers. Now, when a card needs a change, the code is updated in just one place and they're all updates, saving a tremendous amount of time.

### Bio/Abstract Layout

![Bio Abstract Blocks](/images/blocks-bio-abstract.png)

The bios and abstracts are a similar system but more complex in terms of it's implementation. In this case, we're drawing from the speaker card component and additional content for multiple text blocks as seen here. The components react with different color schemes and icons based on the context in which they're used to present the content in a meaningful manner. In this case, the components react to the fact that they're in the Heavy Haul seminar and change color and the icon used. This helps to streamline code, make it modular and enable reuse to save time and money.
