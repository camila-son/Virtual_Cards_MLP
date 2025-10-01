// Marketing screen data constants
export const HERO_DATA = [
  { emoji: '🤡' },
  { emoji: '💳' },
  { emoji: '🚀' },
] as const;

export const CONTENT_DATA = [
  {
    title: "No fees or spread",
    description: "You don't pay extra on domestic or international purchases. Nu is free of charge!"
  },
  {
    title: "Safe purchases",
    description: "Whether online or in person, use a card that you can delete whenever you want."
  },
  {
    title: "Use it anywhere",
    description: "Shop around the globe with a Mastercard pre-paid card and discover a world of zero fees."
  }
] as const;

export const LIST_OPTIONS = [
  {
    title: "Standard",
    description: "Ideal for subscriptions, recurring charges and day-to-day use."
  },
  {
    title: "Temporary",
    description: "Available for 24 hours. After this period, payments will be denied."
  }
] as const;

export const MARKETING_SCREEN_CONFIG = {
  HERO_COUNT: HERO_DATA.length,
  HERO_HEIGHT: 240,
  MARGIN: 16,
} as const;
