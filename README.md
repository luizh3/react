# React

- It exists because it is difficult to synchronize data from the UI Interface with vanilla javascript, as we would need to change the DOM directly.

- JSX

  - Declarative syntax to describe what components look like and how they work

  - Components must return a block of JSX

  - Extension of JavaScript that allows us to embed JavaScript, CSS and React components into HTML

  - Each JSX element is converted to a React.createElement function call

  - We could user React without JSX

  - JSX works essentially like HTML, but we can enter "javaScript mode" by using {}

  - A piece of JSX can only have one root element. If you need more, use <React.Fragment> ( or the short <> )

- Imperative

  - Manual DOM element selections and DOM traversing
  - Step-by-step DOM mutations until we reach the desired UI

- Declarative

  - Describe what UI should look like using JSX, based on current data

  - React is a abstraction away from DOM: we never touch the DOM

  - instead, we think of the UI as a reflection of the current data

- Props

  - Props are used to pass data from parent components to child components ( Down te component tree )

  - Essential tool to configure and customize components ( like function parameters )

  - With props, parent components control how child components look and work

  - Anything can be passed as props: single values, arrays, objects , functions, even other components

  - Props are read-only, they are immutable! this is one of React's strict rules, if you need to mutate props, you actually need state

- React Fragment

  - It is used when we need to return more than one element, but we do not want to use a block that involves these elements. <> </>

- State

  - Data that a component can hold over time, necessary for information that it needs to remember throughout the app's lifecycle

  - Component's memory

  - Component state: Single local component variable ( "Piece of state", "state variable" )

  - Updating component state triggers React to re-render the component

  - Update the component's view ( by re-redering it )

  - Persist local variables between renders

- Props X State

  - State:

    - Internal data, owned by component
    - Component "memory"
    - Can be updated by the component itself
    - Updating state causes component to re-render
    - Used to make components interactive

  - Props
    - External data, owned by parent component
    - Similar to function parameters
    - Read-only
    - Receiving new props causes component to re-render.
      Usually when the parent's state has been updated
    - Used by parent to configure child component ("settings")

- Beneficios

  - Renders components in the webpage UI based on their current state

  - Keeps data in sync with states and UI

## Features

- React components return something called JSX, which looks like HTML.

## Extensions for VSCode

- ESLint
- Prettier
- Material Icon Theme
- One Monokai Theme
- Quokka

## Tools

- Vite:

  - `Modern build tool, that contains a template for setting up React application`

  - `Need to manually set up ESLint ( and others )`

  - `Extremely fast hot module replacement(HMR) and bundling`

- React-app

  - `Complete "starter kit" for react application`

  - `Everthing is already configured: ESLint, Prettier, Jest, etc.`

  - `Uses slow and outdated technologies ( i.e webpack )`

  - `Use for tutorials or experiments, don't use for real world application`

  - `Create: npx create-react-app@5 pizza-meu`
