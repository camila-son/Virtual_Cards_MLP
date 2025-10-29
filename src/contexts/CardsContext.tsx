import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface VirtualCard {
  id: string;
  name: string;
  lastFourDigits: string;
  cardType: string;
  cardDesign: {
    id: number;
    name: string;
    image: any;
  };
  createdAt: Date;
  isTemporary?: boolean;
  expiresAt?: Date;
  isFrozen?: boolean;
}

interface CardsContextType {
  cards: VirtualCard[];
  addCard: (card: Omit<VirtualCard, 'id' | 'createdAt'>) => void;
  updateCardFrozenState: (cardId: string, isFrozen: boolean) => void;
}

const CardsContext = createContext<CardsContextType | undefined>(undefined);

export function CardsProvider({ children }: { children: ReactNode }) {
  const [cards, setCards] = useState<VirtualCard[]>([]);

  const addCard = (cardData: Omit<VirtualCard, 'id' | 'createdAt'>) => {
    const newCard: VirtualCard = {
      ...cardData,
      id: Date.now().toString(),
      createdAt: new Date(),
      isFrozen: false,
    };
    setCards(prevCards => [newCard, ...prevCards]); // Add to beginning of list
  };

  const updateCardFrozenState = (cardId: string, isFrozen: boolean) => {
    setCards(prevCards => 
      prevCards.map(card => 
        card.id === cardId ? { ...card, isFrozen } : card
      )
    );
  };

  return (
    <CardsContext.Provider value={{ cards, addCard, updateCardFrozenState }}>
      {children}
    </CardsContext.Provider>
  );
}

export function useCards() {
  const context = useContext(CardsContext);
  if (context === undefined) {
    throw new Error('useCards must be used within a CardsProvider');
  }
  return context;
}
