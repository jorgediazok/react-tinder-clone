import React,{ useState } from 'react'
import TinderCard from "react-tinder-card"
import "../styles/TinderCards.css"

function TinderCards() {

  const [people, setPeople] = useState([
    {
      name: "Steve Jobs",
      url:"https://www.biography.com/.image/t_share/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg",
    },
    {
      name: "Mark Zuckerberg",
      url:"https://www.fortuneenespanol.com/wp-content/uploads/2018/05/mark-zuckerberg.imgo_-770x513.jpg"
    }
  ])

  return (
    <div>
      <h1>Tinder Cards</h1>
      <div className="tinderCards__cardContainer">
      {people.map((person) => (
        <TinderCard 
// @ts-ignore
        className="swipe" key={person.name} preventSwipe={["up", "down"]}>
          <div className="card" style={{backgroundImage: `url(${person.url})`}}>
            <h3>{person.name}</h3>
          </div>          
        </TinderCard>
      ))}
      </div>
    </div>
  )
}

export default TinderCards
