## REACT REDUX BASE PROJECT

## Requirements

For development, you will only need Node.js installed on your environement.

## Install

    $ git https://github.com/karimelshami/billie-challenge.git
    $ cd billie-challenge
    $ yarn

## Start & watch

    $ yarn start

## Languages,tools & technologies

- Javascript
- JSX
- React
- Redux
- Redux saga
- React hooks
- Styled components

## Project Tree

```
    ├─ .eslintrc
    ├─ .git
    ├─ .gitignore
    ├─ jsconfig.json
    ├─ node_modules
    ├─ package.json
    ├─ public
    │  ├─ favicon.ico
    │  ├─ index.html
    │  ├─ manifest.json
    │  └─ robots.txt
    ├─ README.md
    ├─ src      ### root Folder
    │  ├─ assets    ### used to group all project assets
    │  ├─ index.js  ### project index
    │  ├─ modules   ### used to group all the project modules
    │  │  └─ common ### used to group all shared componants & containers
    │  │     ├─ action-types.js ### used to group common module action types
    │  │     ├─ actions.js      ### used to group common module actions
    │  │     ├─ api.js          ### used to group common module apis
    │  │     ├─ components      ### used to group common module presentational componants
    │  │     ├─ containers      ### used to group common module container
    │  │     │  └─ MainContainer    ### used to wrap the app with redux-store/react-router/theme/globle-styles
    │  │     ├─ index.js    ### used to export redux related files
    │  │     ├─ reducer.js  ### used to group common module reducers
    │  │     └─ saga.js     ### used to group common module sagas
    │  │  └─ home ### used to group all shared componants & containers
    │  │     ├─ action-types.js ### used to group home module action types
    │  │     ├─ actions.js      ### used to group home module actions
    │  │     ├─ api.js          ### used to group home module apis
    │  │     ├─ components      ### used to group home module presentational componants
    │  │     ├─ containers      ### used to group home module container
    │  │     │  └─ MainContainer    ### used to wrap the app with redux-store/react-router/theme/globle-styles
    │  │     ├─ index.js    ### used to export redux related files
    │  │     ├─ reducer.js  ### used to group home module reducers
    │  │     └─ saga.js     ### used to group home module sagas
    │  ├─ redux    ### root redux folder
    │  │  ├─ initialState.js    ### used to group all modules intial state
    │  │  ├─ reducer.js         ### used to group all modules reducers
    │  │  ├─ saga.js            ### used to group all modules sagas
    │  │  └─ store.js           ### project store
    │  ├─ routes    ### used to group all project routes
    │  ├─ utils     ### used to group common project utils
    │  │  ├─ constants.js   ### used to group common project constants
    │  │  ├─ index.js       ### used to export all project utils
    │  │  ├─ request.js     ### axios wrapper
    │  │  ├─ theme.js       ### styled componants theme configarations including media queries/common colors
    │  │  └─ urls.js        ### used to group all project urls
    └─ yarn.lock
```
