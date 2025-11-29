export const product = {
  label: "Small-Batch Soap Bar",
  name: "Cedar Citrus Hand-Poured Soap",
  description:
    "Crafted in small batches with nourishing oils, gentle botanicals, and natural essential oil blends.",
  price: "$16.00",
  options: ["Single Bar", "3-Pack"],
  badges: ["Palm-free", "Cold-processed", "Free returns", "Ships in 2-3 days"]
};

export const scentFeatures = [
  {
    title: "Nourishing Oils",
    body: "Olive, coconut, and shea oils bring a creamy, balanced lather that never strips your skin."
  },
  {
    title: "Gentle Botanicals",
    body: "Finely ground calendula petals and oat flour calm irritation and leave skin comfortable."
  },
  {
    title: "Essential Oil Scents",
    body: "Notes of cedar, citrus, and a hint of rosemary for a grounded, bright shower ritual."
  }
];

export const values = [
  "Cruelty-Free",
  "Biodegradable Formula",
  "Small-Batch Production",
  "Zero Synthetic Dyes or Fragrances"
];

export type Review = {
  id: number;
  rating: number;
  title: string;
  text: string;
  name: string;
  skinType: string;
};

export const reviews: Review[] = [
  {
    id: 1,
    rating: 5,
    title: "Spa-level scent in my tiny bathroom",
    text: "Rich lather without residue. The cedar and citrus feel bright but still earthy.",
    name: "Mila P.",
    skinType: "Dry Skin"
  },
  {
    id: 2,
    rating: 4,
    title: "My skin is calmer",
    text: "Been using for two weeks; no tightness after showers and the bar still feels dense.",
    name: "Carmen L.",
    skinType: "Sensitive Skin"
  },
  {
    id: 3,
    rating: 5,
    title: "Gift-worthy",
    text: "The paper wrap and the subtle scent make it feel special. I keep reordering the 3-pack.",
    name: "Devon R.",
    skinType: "Combination"
  }
];

export const relatedProducts = [
  {
    name: "Lavender Cedar",
    description: "Grounding lavender with soft cedar smoke.",
    price: "$16.00"
  },
  {
    name: "Citrus Mint",
    description: "Lively grapefruit peel with a cool mint finish.",
    price: "$16.00"
  },
  {
    name: "Unscented Oat + Honey",
    description: "Barely-there scent; colloidal oats for calm, cushiony lather.",
    price: "$16.00"
  },
  {
    name: "Bergamot Peach",
    description: "Sunny bergamot and stone fruit sweetness.",
    price: "$16.00"
  }
];
