# Frontend Mentor - Chat app CSS illustration solution 👋

This is a solution to the [Chat app CSS illustration challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/chat-app-css-illustration-O5auMkFqY). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Chat app CSS illustration solution 👋](#frontend-mentor---chat-app-css-illustration-solution-)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [**Example:**](#example)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author 🚀](#author-)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- **Bonus**: See the chat interface animate on the initial load

### Screenshot

Desktop design

![Desktop design preview for the Order summary card coding challenge](./design/desktop_design.png)

- Mobile responsive design

![Mobile design preview for the Order summary card coding challenge](./design/mobile_design.png)

---

### Links

- Solution URL: [Add solution URL here]()
- Live Site URL: [Add live site URL here]()

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox model
- Mobile friendly responsive design
- Tailwind utility-first CSS framework (ver. 3+)

### What I learned

- [x] Improved my existing HTML/CSS knownledge
- [x] Tailwind CSS framework fundamentals, guide principles

Configuring and customizing my Tailwind installation:

### **Example:**

> **Creating your own classes:**

```css
/* your input style.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
@layer components {
  /* custom css class */
  .card-shadow {
    box-shadow: 0px 1rem 2rem -0.2rem hsl(224deg 23% 55% / 30%);
  }
}
```

> **Usage:**

```html
<!-- Inside html file -->
...

<div class="card-shadow">...</div>
```

> **Tailwind configuration file:**

_Custom font colors_

```js
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        primary: {
          'pale-blue': '#e0e8ff',
          'bright-blue': '#3829e0',
        },
        neutral: {
          'very-pale-blue': '#f5f7ff',
          'desat-blue': '#7280a7',
          'dark-blue': '#1f2f56',
        },
      ...
    }
  },
  ...
}
```

### Continued development

---

### Useful resources

- [Tailwind wes site](https://tailwindcss.com/) - This helped me with fundamental principles of styling. Very usefull resource that comes with tailwind playground
- [Tailwind CSS playground.](https://play.tailwindcss.com/) - Nice place to practice with tailwind classes and quick design.
- [Tailwind CSS tutorial.](https://tsh.io/blog/tailwind-css-tutorial/) - A very hands-on approach to styling web applications.
-

## Author 🚀

- Website - [Daniel Molnar](https://github.com/Daniel4lm)
- Frontend Mentor - [@Daniel4lm](https://www.frontendmentor.io/profile/Daniel4lm)

---
