import React, { useEffect, useMemo, useState } from "react";
import { Card, Button, Modal, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import rawData from "../CardData.json"; // ← if this file is in src/components/, this path is correct

interface CardData {
  id: number;
  artist: string;
  knownDisabilities: string;
  keyWorks: string;
  source: string;
}

const data: CardData[] = rawData as CardData[];

const SearchList: React.FC = () => {
  const { searchTerm: searchParam } = useParams<{ searchTerm?: string }>();
  const [searchTerm, setSearchTerm] = useState<string>(searchParam ?? "");
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const navigate = useNavigate();

  // Simulate async load (so the spinner shows briefly and matches your Collection pattern)
  useEffect(() => {
    setIsLoading(false);
  }, []);

  // Keep input in sync if user navigates with back/forward or deep links
  useEffect(() => {
    setSearchTerm(searchParam ?? "");
  }, [searchParam]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = searchTerm.trim();
    // HashRouter: this becomes #/search/<term>
    navigate(q ? `/search/${encodeURIComponent(q)}` : "/search");
  };

  const filteredCards = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return data;
    return data.filter((card) => {
      const haystack = [
        card.artist,
        card.keyWorks,
        card.knownDisabilities,
        card.source,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [searchTerm]);

  const handleCardClick = (card: CardData) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  const handleDescriptionClick = (url: string) => {
    if (url && url.startsWith("http")) window.location.href = url;
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search artist, works, disabilities…"
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="card-list">
        {isLoading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <div className="card-container">
            {filteredCards.map((card) => (
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
    </div>
  );
};

export default SearchList;
