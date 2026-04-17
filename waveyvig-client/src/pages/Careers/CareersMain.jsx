import React from 'react'
import JoinUs from './JoinUs'
import OpenPositions from './OpenPosition'
import WhyJoin from './WhyJoin'
import TeamStories from './TeamStories'

const CareersMain = () => {
  return (
    <div style={{ backgroundColor: "#0b1d57" }}>
        <OpenPositions />
        <WhyJoin />
        <TeamStories />
        <JoinUs />
    </div>
  )
}

export default CareersMain