import React from 'react'
import TheHero from './theHero'


export default class World extends React.Component {
  render = () => {
    return(
      <div className="world" >
        <TheHero />
      </div>
    )
  }
}
