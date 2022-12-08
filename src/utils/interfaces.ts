// AllCharactersData object interfaces
export interface AllCharactersDataI {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: LocationAndOriginI;
  location: LocationAndOriginI;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface LocationAndOriginI {
  name: string;
  url: string;
}

// Character Species object interfaces
export interface CharacterSpeciesI {
  human: string;
  alien: string;
  humanoid: string;
  creature: string;
  animal: string;
  cronenberg: string;
  poopybutthole: string;
  robot: string;
}
