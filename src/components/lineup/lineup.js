import React from 'react'
import './_lineup.scss'
import Day1 from '../day1/day1'
import Day2 from '../day2/day2'
import Day3 from '../day3/day3'

const Lineup = props => (
  <section className="lineup">
    <div className="lineup__container" />
    <Day1 />
    <Day2 />
    <Day3 />
  </section>
)

export default Lineup
