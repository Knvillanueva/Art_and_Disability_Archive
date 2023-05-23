import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Modal, Spinner } from "react-bootstrap";

interface CardData {
  id: number;
  title: string;
  artist: string;
  description: string;
}

const CardList: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  useEffect(() => {
    // Fetch card data from the local repository
    const fetchCardData = async () => {
      try {
        const response = await fetch("src/CardData.json");
        const data: CardData[] = await response.json();
        setCards(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching card data:", error);
      }
    };

    fetchCardData();
  }, []);

  const handleCardClick = (card: CardData) => {
    setSelectedCard(card);
    setShowModal(true);
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
                <Card.Title>{card.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {card.artist}
                </Card.Subtitle>
                <Card.Text>{card.description}</Card.Text>
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
              <h5>Title: {selectedCard.title}</h5>
              <p>Artist: {selectedCard.artist}</p>
              <p>Description: {selectedCard.description}</p>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CardList;
