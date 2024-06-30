export interface Chip {
  color: string;
  name: string;
}

export interface Post {
  id: string;
  title: string;
  levels: Chip[];
  categories: Chip;
}
