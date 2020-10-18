import React, { useState, useEffect } from 'react';
import database from '../firebase';
import TinderCard from 'react-tinder-card';
import '../styles/TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    database
      .collection('people')
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div>
      <h1>Tinder Cards</h1>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            // @ts-ignore
            className="swipe"
            key={person.name}
            preventSwipe={['up', 'down']}>
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}>
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
