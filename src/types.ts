export interface Movie {
  id: string;
  title: string;
  year: string;
  genre: string[];
  rating: number;
  duration: string;
  synopsis: string;
  image: string;
  backdrop: string;
  score: number;
  vibes: string[];
  director: string;
  budget: string;
  releaseDate: string;
}

export interface Cast {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Room {
  id: string;
  title: string;
  status: 'LIVE' | 'UPCOMING';
  viewers: string;
  time?: string;
  image: string;
  moviePoster: string;
}

export interface Message {
  id: string;
  user: {
    name: string;
    image: string;
    isMod?: boolean;
  };
  text: string;
  timestamp: string;
}
