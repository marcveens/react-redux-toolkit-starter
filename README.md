# React redux-toolkit starter

[![Edit react-context-mutex](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/marcveens/react-redux-toolkit-starter) <br />
[:pencil2: Edit on GitHub Codespaces](https://marcveens-react-redux-toolkit-starter-q325.github.dev/) <br />
[:orange_book: View my blog at marcveens.nl](https://www.marcveens.nl/)

---

This project includes:
- [React](https://reactjs.org/) (with custom hooks)
- [Redux](https://redux.js.org/) (for state management in combination with [toolkit](https://redux-toolkit.js.org/))
- [Typescript](https://www.typescriptlang.org/)
- Fetched data management


## Philosophy
I created this simple project initially to help a colleague get up and running on a hobby project, but since it can possibly be of help to other developer I released it publicly. Thanks for the tip [Serge](https://github.com/svdoever).

Keep in mind that this is not a definitive best practice, but it would have helped me tremendously if I knew about this when I started developing about 10 years ago. That's why I think this is useful especially for starting developers. The project is small, though includes many features that make it sustainable in time. Let me explain that a bit more. 

## Folder structure
The folder structure is functional/feature based:
- `Counter` - feature
- `KanyeRest` - feature
- `assets` - for global assets like styles or icons
- `store` - for global state initialization

Within the `Counter` and `KanyeRest` features a more technical folder structure exists, which makes it predictable and easy to navigate through:
- `components` - where the .tsx files live
- `hooks` - for custom React hooks
- `state` - for feature specific state management
- `styles` - for feature specific styling
- `types` - for the feature specific types

## State management
The global state is set up using [Redux](https://redux.js.org/) together with [redux-toolkit](https://redux-toolkit.js.org/), which makes the Redux implementation in React (especially in combination with Typescript) much much more user friendly. 
 
The one thing I'm really enthusiastic about are so called [slices](https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-state-slice) which basically brings the actions and reducers together in great harmony. It uses [immer](https://github.com/immerjs/immer) in the background for immutable state modification, which I also really like. 

## Fetched data management
What are the basic stages of fetching data? Loading state, data fetched, error occurred? Lucky you, it's all in here! Take a look at the `useKanyeRest.ts` hook to see how it's pushed to the global state and view `KanyeRest.tsx` to see how it's consumed. 

## Custom hook
The custom React hook I use in the `KanyeRest` feature was created in the name of separation of concerns. It fetches some data from the [KanyeRest API](https://kanye.rest/) and stores it in the global store. That's code you absolutely don't want in your components. The only thing that's exported is the `load()` function which _is_ called in the component. 

## CSS naming convention
For this example I use the [BEM](http://getbem.com/naming/) naming methodology. BEM stands for Block Element Modifier and helps you structure your CSS-class names. I absolutely love this naming convention, which makes the most difficult part of programming, naming things, much easier. [This article](http://getbem.com/naming/) explains perfectly how it works. 