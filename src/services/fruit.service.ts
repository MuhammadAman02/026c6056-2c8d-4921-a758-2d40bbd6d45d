interface Fruit {
  id: number;
  name: string;
  color: string;
  taste: string;
}

const fruits: Fruit[] = [
  { id: 1, name: "Apple", color: "red", taste: "sweet" },
  { id: 2, name: "Banana", color: "yellow", taste: "sweet" },
  { id: 3, name: "Orange", color: "orange", taste: "citrus" },
  { id: 4, name: "Grape", color: "purple", taste: "sweet" },
  { id: 5, name: "Lemon", color: "yellow", taste: "sour" },
  { id: 6, name: "Strawberry", color: "red", taste: "sweet" },
  { id: 7, name: "Blueberry", color: "blue", taste: "sweet" },
  { id: 8, name: "Lime", color: "green", taste: "sour" },
  { id: 9, name: "Cherry", color: "red", taste: "sweet" },
  { id: 10, name: "Kiwi", color: "green", taste: "tangy" },
];

export function getAllFruits(filters?: { color?: string; limit?: number }): Fruit[] {
  let filteredFruits = fruits;

  if (filters?.color) {
    filteredFruits = fruits.filter(fruit => 
      fruit.color.toLowerCase() === filters.color!.toLowerCase()
    );
  }

  if (filters?.limit) {
    filteredFruits = filteredFruits.slice(0, filters.limit);
  }

  console.log(`Returning ${filteredFruits.length} fruits`, { filters });
  return filteredFruits;
}

export function getFruitById(id: number): Fruit | null {
  const fruit = fruits.find(f => f.id === id);
  console.log(`Looking for fruit with id ${id}:`, fruit ? "found" : "not found");
  return fruit || null;
}