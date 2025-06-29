export interface Pokemon {
  id: number
  name: string
  types: {
    type: {
      name: string
    }
  }[]
  stats: {
    base_stat: number
    stat: {
      name: string
    }
  }[]
  abilities: {
    ability: {
      name: string
    }
  }[]
  moves: {
    move: {
      name: string
    }
  }[]
  sprites: {
    front_default: string
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
}

export interface PokemonType {
  name: string
  url: string
}