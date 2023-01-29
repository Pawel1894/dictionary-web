# [Dictionary app with PWA](https://beamish-hotteok-903247.netlify.app/)

## [Deigned by Frontend Mentor](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL)

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

My main goal for this project was to practice my vitest, testing library and tanstackquery skills. It contains quite a few cool features such as PWA and caching.

### Website

[App live demo](https://beamish-hotteok-903247.netlify.app/)

### Features

 - Caching searched words for 24hours
 - PWA
 - Font switcher with localstorage
 - Theme switcher with localstorage
 - Searching words definitions
 - Default theme mode based on user's ``` prefers-color-scheme ```

## Built with

 - [TailwindCSS](https://tailwindcss.com/)
 - [React](https://reactjs.org/)
 - [Vite](https://vitejs.dev/)
 - [Vitest](https://vitest.dev/)
 - [Testing library](https://testing-library.com/)
 - [TypeScript](https://www.typescriptlang.org/)
 - [Local Storage web API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
 - [Tanstack query](https://tanstack.com/query/latest)
 - [Workbox](https://developer.chrome.com/docs/workbox/)
 - [Axios](https://axios-http.com/docs/intro)
 - [Dictionary api](https://dictionaryapi.dev/) 
 
## What I learned 
 - How to cache data using tanstack query 
 - Testing components that relies on api data
 - Mocking rest request with msw for testing
 - Creating PWA with workbox   
 - Theme default value based on user's system preferences
 
## Install process

1. Install [nodejs](https://nodejs.org/en/download/)
2. Navigate project folder in command line
3. Run `npm install`
4. Run `npm start`


## Build process

1. Open project folder in command line
2. Run `npm run build`
