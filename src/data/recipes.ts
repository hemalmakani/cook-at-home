export interface Recipe {
  id: number;
  name: string;
  slug: string;
  description: string;
}

export const recipes: Recipe[] = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    slug: "spaghetti-carbonara",
    description: "A classic Italian pasta dish.",
  },
  // ... existing recipes ...
];
