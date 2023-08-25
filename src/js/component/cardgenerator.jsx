import React, { useState } from 'react';

const CardDeckBuilder = () => {
  const [cardDeck, setCardDeck] = useState([]);
  const [drawnCards, setDrawnCards] = useState([]);

  const cardNames = [
     "At the end of your turn if two or more units from your army(excluding aircraft) are wholly within your opponent's deployment zone, this secondary mission is achieved and you score 4VP. if at the end ofyour turn, only one unit from your army is wholly within your opponents deployment zone then this secondary missoin is still achieved,but in this instance you score 2VP instead of 4VP. if you are using tactical missions, then when this secondary mission is achieved you score an extra VP", 
    "if you are using fixed missions, then while this secondary is active each time an enemy character model is destroyed, you score 4vp. if you are using tactical missions,then at the end of the turn, if either of the conditions below are satisfied this secondary mission is achieved and you score 5Vp: one or more enemy character units were destroyed in during this turn. all character units from your opponents army roser have been destroyed during the battle", 
    "while this secondary mission is active, each time an enemy monster or vehicle is destroyed, you score 2VP and an extra VP for each of the conditions below that are satisfied:10/15/20 wound model destroyed.if you are using tactical missions, then when this secondary mission is achieved you score an extra VP. however if you are using tactical missions, you cannot score more than 8VP in total from this secondary mission",
    "at the end of your turn, if you have one or more ualifying units{see below} from your army wholly within 3 or more different table quarters, and those units are all more than 3inches away from any other table q uarter, this secondary mission is achieved and you score 4VP if you have qualifying units in four different table quarters or 2VP if you have qualifying units in 3 different table quarters.a unit must not be battleshocked to be a qualifying unit", 
    "at  the end ofyour turn, if either of the below conditions are satisfied, this secondary mission is achieved and you score 4Vp if you are using fixed missions or 5VP if you are using tactical missions:you control one or more objective markers that were controlled by your opponent at the start of your turn/ your opponent did not control any objective markers at the start of your turn and you control one or more objective markers that you did not control at the start of your turn.this secondary mission cannot be achieved during the first battle round; if you randomly drew this secondary mission card during the first battle round, draw a new secondary mission card and shuffle this secondary mission card back into your secondary mission deck", 
    "in your shooting phase, you can select one or more units from your army that are not battle-shocked and are eligible to shoot. until the end of your turn, the units you selected are not eligible to shoot or declare a charge. at the end of your turn, each objective marker that is not within your deployment zone that you control has one or more of these selected units within range is cleansed by your army. if one or more objective markers are cleansed by your army this turn, this secondary mission is achieved and you score a number of VP depending on the number of objective markers cleansed by your army this turn as follows: 1objective marker cleansed= 2VP if you are usingfixed missions or 3Vp if you are using tactical missions 2 or more objective markers cleansed = 4VP if you are using fixed missions, or 5VP if you are using tactical missions", 
    "in your shooting phase, you can select one unit from your army that is not battle-shocked and is eligible to shoot. until the end of your turn, that unit is not eligible to shoot or declare a charge. at the end ofyour turn, if that unit is whithin your opponent's deployment zone or within 6 inches of the center of the battlefiled, it deploys a teleport homer at that location, this secondary mission is achieved and you score a number of VP depending on where the teleport homer was deployed as follows center of the battlefield=2VP if you are using fixed missions or 3VP if you are using tactical missions opponents deployment zone= 4VP if you are using fixed missions or 5VP if you are using tactical missions",
    "in your shooting phase, you can select one or more units from your army that are not battle-shocked and are eligible to shoot. until the end of your turn, the units you selected are not eligible to shoot or declare a charge. at the end of your turn, each corner of the battlefield that has one or more of these selected units wholly within 9 inches of it is scanned by your army. if one or more corners are scanned by your army, this secondary mission is achieved and you score 2VP for each corner scanned by your army this turn.", 
    "while this secondary mission is active, each time an enemy unit is destroyed, you score 2VP to a max of 5.",
     "at the eend of your turn if yyou control one or more objective markers in your own deployment zone and you also control one or more objective markers in no mans land, this secondary mission is achieved and you score 5VP. if you only have one unit remaining in your army, then this secondary mission is instead achieved at the end of your turn if that unit controls one objective marker in no mans land, nut in this instance you score 2Vp instead of 5", 
     "at the end of your opponents turn or at the end of the battle{whichever comes first} if you control one or more objective markers in your own deployment zone, this secondary mission is achieved and you score 3VP. this secondary MIssion cannott be acieved during the first battle round; if you draw this secondary mission card during the first battle round, draw a new secondary mission card and shuffle thi secondary mission card back into your secondary mission deck",
    "while this secondary mission is active, each time an enemy unit that started the turn within range of an objective marker is destroyed, you score 3VP{to a max of 5} note that VP  are scored even if such a unit is destroyed and the resurrected for any reason", 
    "at the end of your turn, if you control two or more objective markers in no mans land, this secondary mission is achieved and you score 5VP. if at the end of your turn, you only control one objective marker in no mans land, this secondary mission is still achieved but in this instance you score 2VP instead", 
    "at the end of your turn, if one or more units from your army{excluding battle-shocked units} are wholly within 6 inches of the center of the battlefield, and therea re no enemy units wholly within 6 inches of the center of the battlefield, this secondary mission is achieved and you score 5VP. if at the end of your turn, there are one or more enemy units wholly within 6 inches of the center of the battlefiled, but there are no enemy units within 3 inches of the center of the battlefield, then this secondary mission is still achieved but in this instance you score 3Vp instead of 5Vp", 
    "when this secondary mission card is drawn, your opponent must select one objective marker in no mans land. at the end of your turn, if you control that selected objective marker , this secondary mission is achieved and you score 5VP",
    "at the end of your turn, if you control one or more objective markers in your opponents deployment zone, this secondary mission is achieed and you score 8VP"
  ];

  const buildDeck = () => {
    setCardDeck([...cardNames]);
    setDrawnCards([]);
  };

  const drawOneCard = () => {
    if (cardDeck.length === 0) {
      return;
    }

    const randomIndex = Math.floor(Math.random() * cardDeck.length);
    const drawnCardName = cardDeck[randomIndex];

    // Remove the drawn card from the deck
    const updatedDeck = cardDeck.filter((_, index) => index !== randomIndex);
    setCardDeck(updatedDeck);

    setDrawnCards([{ name: drawnCardName, index: drawnCards.length }, ...drawnCards]);
  };

  const drawTwoCards = () => {
    if (cardDeck.length < 2) {
      return;
    }

    const randomIndexes = [];
    while (randomIndexes.length < 2) {
      const randomIndex = Math.floor(Math.random() * cardDeck.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }

    const drawnCardNames = randomIndexes.map(index => cardDeck[index]);

    // Remove the drawn cards from the deck
    const updatedDeck = cardDeck.filter((_, index) => !randomIndexes.includes(index));
    setCardDeck(updatedDeck);

    setDrawnCards([
      { name: drawnCardNames[0], index: drawnCards.length },
      { name: drawnCardNames[1], index: drawnCards.length + 1 },
      ...drawnCards
    ]);
  };

  const discardCard = (index) => {
    const updatedDrawnCards = drawnCards.filter(card => card.index !== index);
    setDrawnCards(updatedDrawnCards);
  };

  return (
    <div>
      <button onClick={buildDeck}>Build Deck</button>
      <button onClick={drawOneCard}>Draw 1 Card</button>
      <button onClick={drawTwoCards}>Draw 2 Cards</button>
      <div>
        {drawnCards.length > 0 && (
          <div>
            Drawn Cards:
            <ul>
              {drawnCards.map((card, index) => (
                <li key={index}>
                  {card.name}
                  <button onClick={() => discardCard(card.index)}>Discard</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardDeckBuilder;
