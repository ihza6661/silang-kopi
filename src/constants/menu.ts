/**
 * Menu data for Silang Kopi
 * Extracted for separation of concerns and future CMS/API integration
 */
export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tags: string[];
  isSignature?: boolean;
};

export type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    id: "signatures",
    label: "Signatures",
    items: [
      {
        name: "Enggang",
        description: "House blend espresso with palm sugar, coconut milk, and a hint of pandan",
        price: "32K",
        tags: ["Nutty", "Sweet", "Creamy"],
        isSignature: true,
      },
      {
        name: "Arowana",
        description: "Cold brew infused with butterfly pea, lemon zest, and honey",
        price: "35K",
        tags: ["Fruity", "Refreshing", "Floral"],
        isSignature: true,
      },
      {
        name: "Kahayan",
        description: "Single-origin Toraja with dark chocolate notes, served as pour-over",
        price: "38K",
        tags: ["Bold", "Chocolate", "Smooth"],
        isSignature: true,
      },
    ],
  },
  {
    id: "coffee",
    label: "Coffee",
    items: [
      {
        name: "Espresso",
        description: "Double shot, house blend",
        price: "20K",
        tags: ["Bold", "Classic"],
      },
      {
        name: "Americano",
        description: "Espresso with hot water",
        price: "22K",
        tags: ["Clean", "Balanced"],
      },
      {
        name: "Cappuccino",
        description: "Espresso with steamed milk, microfoam top",
        price: "28K",
        tags: ["Creamy", "Classic"],
      },
      {
        name: "Flat White",
        description: "Double ristretto with velvety milk",
        price: "30K",
        tags: ["Smooth", "Strong"],
      },
      {
        name: "V60 Pour Over",
        description: "Single-origin selection, ask barista",
        price: "32K",
        tags: ["Light", "Aromatic"],
      },
    ],
  },
  {
    id: "non-coffee",
    label: "Non-Coffee",
    items: [
      {
        name: "Matcha Latte",
        description: "Ceremonial grade matcha with steamed milk",
        price: "32K",
        tags: ["Earthy", "Creamy"],
      },
      {
        name: "Hojicha Latte",
        description: "Roasted green tea with oat milk",
        price: "30K",
        tags: ["Toasty", "Smooth"],
      },
      {
        name: "Fresh Lemonade",
        description: "House-made with local honey",
        price: "22K",
        tags: ["Citrus", "Refreshing"],
      },
      {
        name: "Chocolate",
        description: "Belgian cocoa with steamed milk",
        price: "28K",
        tags: ["Rich", "Sweet"],
      },
    ],
  },
  {
    id: "snacks",
    label: "Snacks",
    items: [
      {
        name: "Butter Croissant",
        description: "Freshly baked daily",
        price: "25K",
        tags: ["Flaky", "Buttery"],
      },
      {
        name: "Pisang Keju",
        description: "Fried banana with cheese, chocolate drizzle",
        price: "22K",
        tags: ["Local", "Sweet"],
      },
      {
        name: "Roti Bakar",
        description: "Toasted bread with condensed milk and butter",
        price: "18K",
        tags: ["Classic", "Crispy"],
      },
      {
        name: "Cookies",
        description: "Assorted house-made cookies",
        price: "15K",
        tags: ["Fresh", "Crispy"],
      },
    ],
  },
];
