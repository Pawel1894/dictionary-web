# [Dictionary App with PWA](https://beamish-hotteok-903247.netlify.app/)

## [Designed by Frontend Mentor](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL)

## Table of contents

- [Overview](#overview)
  - [Motivation](#motivation)
  - [Website](#website)  
  - [Features](#features)
- [Built with](#built-with)  
- [What I learned](#what-i-learned)
- [Install process](#install-process)
- [Build process](#build-process)
  
## Overview   

### Motivation

My main goal for this project was to practice using Vitest, Testing Library and TanStack Query. It also contains cool features, such as a PWA and caching.

### Website

[App live demo](https://beamish-hotteok-903247.netlify.app/)

### Features

 - Caching searched words for 24hours
 - PWA
 - Font preferences saving to localStorage
 - Theme preferences saving to localStorage
 - Searching words definitions
 - Default theme mode based on the user's ``` prefers-color-scheme ```

## Built with

 - [TailwindCSS](https://tailwindcss.com/)
 - [React](https://reactjs.org/)
 - [Vite](https://vitejs.dev/)
 - [Vitest](https://vitest.dev/)
 - [Testing Library](https://testing-library.com/)
 - [TypeScript](https://www.typescriptlang.org/)
 - [localStorage Web APIs](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
 - [Tanstack Query](https://tanstack.com/query/latest)
 - [Workbox](https://developer.chrome.com/docs/workbox/)
 - [Axios](https://axios-http.com/docs/intro)
 - [Dictionary API](https://dictionaryapi.dev/) 
 
## What I learned 
- Caching data using TanStack Query
- Testing components that rely on API data
- Mocking rest request with a MSW for testing
- Creating PWA with Workbox
- Theme default value based on the user's system preferences
 
## Install process

1. Install [Node.js](https://nodejs.org/en/download/)
2. Navigate to project folder in command line
3. Run `npm install`
4. Run `npm start`


## Build process

1. Open project folder in command line
2. Run `npm run build`
