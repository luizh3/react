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

## Component Categories

- Stateless / Presentational components

  - No state
  - Can receive props and simply present received data or other content
  - Usually small and reusable

- Stateful componets

  - Have state
  - Can still be reusable

- Structural components
  - "Pages", "layouts", or "screens" of the app
  - Result of composition
  - Can be huge and non-reusable ( but don't have to )

## Component

- Description of a piece of UI

- A component is a function that returns React elements ( element tree ), usually written as JSX

- "Blueprint" or "Template"

## Component Instance

- Instances are created when we "use" components

- React internally calls Tab()

- Actual "Physical" manifestation of a component

- Has its own state and props

- Has a lifecycle ( can "be born", "live", and "die" )

## React Element

- JSX is a converted to React.createElement() function calls

- A React element is the result of these function calls

- Information necessary to create DOM elements

## DOM Element ( HTML )

- Actual visual representation of the component instance in the browser

## How components are displayed on the screen

- Phases

  - Render is Triggered
    - By updating state somewhere
    - The two situations that trigger renders
      - Initial render of the application
      - State is updated in one or more component instances ( re-render )
    - The render process is triggered for the entire application
    - In practice, it looks like React only re-renders the component where the state update happens, but that's not how it works behind the scenes
    - Renders are not triggered immediately, but scheduled for when the JS engine has some "free time". There is also batching of multiple setState calls in event handlers
  - Render phase
    - React calls component functions and figures out how DOM should be updated
  - Commit phase
    - React actually writes to the DOM, updating, inserting, and deleting elements
  - Browser paint

  - OBS: In react, rendering is NOT updating the DOM or displaying elements on the screen. Rendering only happens internally inside React, it does not produce visual changes.

## The render phase

Component instances that triggered re-render -> React Elements -> New Virtual DOM -> Reconciliation + Diffing -> Updated Fiber tree

- Virtual DOM: Tree of all React elements create from all instances in the component tree

- Cheap and fast to create multiple trees

- Nothing to do with "shadow DOM"

- Rendering a component will cause all of its child components to be rendered as well ( no matter if props changed or not ), necessary because react doesn't know whether children will be affected

- Reconciliation: Deciding which DOM elements actually need be inserted, deleted, or updated, in order to reflect the latest state changes

- Diffing: Comparing elements based on their position in the tree

## Fiber

- Fiber tree: Internal tree that has a "fiber" for each component instance and DOM element

- Fibers are NOT re-created on every render

- Work can be done asynchronously

- Fiber: "Unit of work", store the fallowing values, is a linked list

  - Current State
  - Props
  - Side effects
  - Used hooks
  - Queue of work

- Rendering process can be split into chunks, tasks can be prioritized, and work can be paused, reused, or thrown away

## Commit phase

- List of DOM updates
  - Render phase
  - Does not touch the DOM.
    React only renders. It doesn't know where the render result will go.
  - React can be used on different plataforms
- Update DOM
  - Commit phase
  - React DOM
- Updated UI on the screen

  - Browser paint

- React writes to the DOM: insertions, deletions, and updates ( list of DOM updates are "flushed" to the DOM )

- Commiting is synchonous: DOM is updated in one go, it can't be interrupted. This is necessary so that the DOM never shows partial results, ensuring a consistent UI ( in sync with state at all times )

- After the commit phase completes, the workInProgress fiber tree becomes the current tree for the next render cycle.

## Deffing

- Uses 2 fundamental assumptions ( rules )

  - 1: Two elements of different types will produce different trees

  - 2: Elements with a stable key prop stay the same across renders

- 1: Same position, different element

  - React assumes entire sub-tree is no longer valid

  - Old components are destroyed and removed from DOM, including state

  - Tree might be rebuild if children stayed the same ( state is reset )

- 2: Same position, same element

  - Element will be kept ( as well as child elements, including state )

## Key Prop

- Special prop that we use to tell the diffing algorithm that an element is unique

- Allows react to distinguish between multiple instances of the same component type

- When a key stays the same across renders, the element will be kept in the DOM ( Even if the position in the tree changes )

  - 1: Using keys in lists

- When a key changes between renders, the element will be destroyed and a new one will be created ( even if the position in the tree is the same as before )

  - 2: Using keys to reset state

## Functional programming principles

- Side Effect: Dependency on or modification on any data outside the function scope. "Interaction with the outside world". Examples: mutating external variables, HTTP, requests, writing to DOM.

- Pure function: A function that has no side effects.

  - Does not change any variables outside its scope
  - Given the same input, a pure function always returns the same output

  - Components must be pure when it comes to render logic: given the same props ( input ), a component instance should always return the same JSX ( output )

- Render logic must produce no side effects: no interaction with the "outside world", is allowed. So, in render logic:
  - Do NOT perform network requests ( API calls )
  - Do NOT start timers
  - Do NOT directly use the DOM API
  - Do NOT mutate objects or variables outside of the function scope
  - Do NOT update state ( or refs ): this will create an infinite loop

## Event Delegation

- Handling events for multiple elements centrally in one single parent element

- Better for performance and memory as it needs only one handler function

- Behind the scenes, React performs event delegation for all events int our applications

- React registers all events handlers on the root DOM container.
  This is where all events are handled.

- Default behavior can not be prevented by returning false ( only using preventDefault() )

## UseEffect

- Effects allow us to write code that will run at different moments: mount, re-render, or unmount

- A side effect is basically any "interation between a react component and the world outside the component" we can also think of a side as "code that actually does something"

## UseEfect Cleanup Function

- Function that we can return from an effect ( optional )

- Runs on two different occasions:
  - Before the effect is executed again
  - After a component has unmounted
- Necessary whenever the side effect keeps happening after the component has been re-rendered or unmounted

- Each effect should do only one thing! Use one useEffect hook for each side effect. This makes effects easier to clean up.

## Closure

Closure is when a function is able to "remember" and access its lexical scope even when it is being executed outside its lexical scope.

## What are react hooks ?

- Special build-in functions that allows us to "hook" into React internals
  - Creating and accesing state from Fiber tree
  - Registering side effects in Fiber tree
  - Manual DOM selections
  - Many more...
- Always start with "use" ( useState, useEffect, etc )

- Enable easy reusing of non visual logic: we can compose multiple hooks into our own custom hooks

- Give functions components the ability to own state run side effects at different lifecycle points ( Vefore v16.8 only avaiable in class components )

- Rules
  - Only Call hooks at the top level
    - Do not call hooks inside conditionals, loops, nested functions, or after an early return
    - This is necessary to ensure that hokks are always called in the same order ( hooks rely on this )
  - Only call hooks from React functions
    - Only call hooks inside a function component or a custom hook

## UseState

- Creating state
  - Simple
  - Based on function ( Lazy evaluation )
- Updating state ( Make sure to NOT mutate objects on arrays, but to replace them )
  - Simple
  - Based on current state

## UseRef

- "Box" ( object ) with mutable .current property that is persisted across renders ( "normal" variables are always reset )

- Two big use cases
  - Creating a variable that stays the same between renders ( e.g. previous state, setTimeout id, etc )
  - Selectiong and storing DOM elements
- Refs are for data that is NOT rendered: usually only appear in event handlers or effects, not in JSX ( Otherwise use state )

- Do NOT read write or read .current in render logic ( like state )

## Custom Hooks

- Allow us to reuse non-visual logic in multiple components
- One custom hook should have one purpose, to make it reusable and portable ( Even across multiple projects )
- Rules of hooks applyto custom hooks too
- Function name needs to start with use
- Unlike components can receive and return any relevant data ( usually [] or {} )

## Functions Components X Class Components

- Functions

  - JavaScript function ( any type )
  - Destructuring or props.X
  - useState hook
  - useEffect hook
  - Return JSX from function
  - Easier to build ( less boilerplate code )
  - Cleaner code: useEffect combines all lifecycle-related code in a single place
  - Easier to share stateful logic
  - We don't need this keyword anymore

- Class
  - ES6 class, extending React.Component
  - this.props.X
  - this.setState()
  - Lifecycle methods
  - Class methods
  - Return JSX from render method
  - Lifecycle might be easier to uderstand for beginners

## UseReducer

- An alternative way of setting state, ideal for complex state and pieces of state.
- Stores related pieces of state in a state object
- useReducer needs reducer: function containing all logic to update state.Decouples state logic from component
- reducer: pure function ( no side effects! ) that takes current state and action, and returns the next state
- action: object that describes how to update state
- dispatch: function to trigger state updates, by "sending" actions from event handlers to the reducer.
- ideal for multiple related pieces of state and complex state
