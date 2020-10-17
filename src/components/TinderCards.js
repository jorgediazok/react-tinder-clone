import React,{ useState } from 'react'
import TinderCard from "react-tinder-card"
import "../styles/TinderCards.css"

function TinderCards() {

  const [people, setPeople] = useState([
    {
      name: "steve jobs",
      url:"https://www.biography.com/.image/t_share/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg",
    },
    {
      name: "mark zuckerberg",
      url:"https://media.vanityfair.com/photos/5f1b08fd154906605854d34c/master/pass/Zuck734.jpg"
    }
  ])

  return (
    <div>
      <h1>Tinder Cards</h1>

      {people.map((person) => (
        <TinderCard className="swipe" key={person.name} preventSwipe={["up", "down"]}>
          <div className="card" style={{backgroundImage: `url(${person.url})`}}>
            <h3>{person.name}</h3>
          </div>          
        </TinderCard>
      ))}

    </div>
  )
}

export default TinderCards
