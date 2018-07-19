import React from 'react';

import HelloWorld from './components/HelloWorld'

import './App.scss'

/** Sampe API response */
const GENRES = [
    "Adventure",
    "Animation",
    "Children",
    "Comedy",
    "Fantasy"
]
/** Sampe API response */
const ADVENTURE = [{
    "title": "Toy Story (1995)"
}, {
    "title": "Jumanji (1995)"
}, {
    "title": "Tom and Huck (1995)"
}, {
    "title": "GoldenEye (1995)"
}, {
    "title": "Balto (1995)"
}, {
    "title": "Cutthroat Island (1995)"
}, {
    "title": "City of Lost Children, The (Cité des enfants perdus, La) (1995)"
}, {
    "title": "Mortal Kombat (1995)"
}, {
    "title": "Lamerica (1994)"
}, {
    "title": "Indian in the Cupboard, The (1995)"
}, {
    "title": "White Squall (1996)"
}, {
    "title": "Broken Arrow (1996)"
}]

export default class App extends React.Component {
    render () {
        return (<HelloWorld/>)
    }
}