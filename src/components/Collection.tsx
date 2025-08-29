import React, { useState, useEffect } from "react";
import { Card, Button, Modal, Spinner } from "react-bootstrap";

import rawData from "../CardData.json"; 

type CardData = {
  id: number;
  artist: string;
  knownDisabilities: string;
  keyWorks: string;
  source: string;
};

// Give the JSON a type so TS is happy
const cardData = rawData as CardData[];

const CardList: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  useEffect(() => {
    setCards(cardData);
    setIsLoading(false);
  }, []);

  const handleCardClick = (card: CardData) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  const handleDescriptionClick = (url: string) => {
    if (url.startsWith("http")) {
      window.location.href = url;
    }
  };

  return (
    <div className="card-list">
      {isLoading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <div className="card-container">
          {cards.map((card) => (
            <Card key={card.id} className="card-item">
              <Card.Body>
                <Card.Title>{card.keyWorks}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {card.artist}
                </Card.Subtitle>
                <Card.Text>
                  Known Disabilities: {card.knownDisabilities}
                </Card.Text>
                <Card.Text>
                  <button
                    className="card-description-link"
                    onClick={() => handleDescriptionClick(card.source)}
                  >
                    {card.source}
                  </button>
                </Card.Text>
                <Button variant="primary" onClick={() => handleCardClick(card)}>
                  View Details
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Card Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCard && (
            <div>
              <h5>Artist Name: {selectedCard.artist}</h5>
              <p>Notable Works: {selectedCard.keyWorks}</p>
              <p>Known Disabilities: {selectedCard.knownDisabilities}</p>
              <p>Source: {selectedCard.source}</p>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CardList;
