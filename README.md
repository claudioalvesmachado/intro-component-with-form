# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](screenshots/screenshot-desktop.png)
![](screenshots/screenshot-mobile.png)


### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/intro-component-wform-build-with-scss-and-vannila-javascript-AuX3srdzS9)
- Live Site URL: [Demo](claudioalvesmachado.github.io/intro-component-with-form)

## My process

### Built with

- HTML5
- SCSS/SASS
- Flexbox
- Vannila Javascript


### What I learned

I learned how to use regular expression to create an email pattern.

I also learned to use a function to index my inputs. Like this below:

```js
  const id = (id) => document.getElementById(id);
  let name = id('name'),
    lName = id('lname'),
    email = id('email'),
    pass = id('pass');
```

### Continued development

I intend to learn more about javascript and also practice a lot, of course, to be able to apply it in more complex projects.

### Useful resources

- [Stack Overflow topic](https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail) - This topic helped me learn how to validate my email input.
- [Git Hub repository](https://github.com/fagundesraphael/Intro-component-with-sign-up-form/blob/master/app.js) - reading this code i learned and understood how to index my inputs


## Author

- Frontend Mentor - [@claudioalvesmachado](https://www.frontendmentor.io/profile/claudioalvesmachado)