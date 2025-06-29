import { Pokemon, PokemonType } from '@/app/types'

const BASE_URL = 'https://pokeapi.co/api/v2'

export async function getPokemonList(limit: number = 151): Promise<Pokemon[]> {
  try {
    const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}`)
    if (!response.ok) throw new Error('Failed to fetch Pokemon list')
    
    const data = await response.json()
    
    const pokemonPromises = data.results.map(async (pokemon: any) => {
      const pokemonResponse = await fetch(pokemon.url)
      if (!pokemonResponse.ok) throw new Error(`Failed to fetch ${pokemon.name}`)
      return pokemonResponse.json()
    })
    
    const pokemonList = await Promise.all(pokemonPromises)
    return pokemonList
  } catch (error) {
    console.error('Error fetching Pokemon list:', error)
    throw error
  }
}

export async function getPokemonByName(name: string): Promise<Pokemon> {
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${name.toLowerCase()}`)
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Pokemon not found')
      }
      throw new Error('Failed to fetch Pokemon')
    }
    
    const pokemon = await response.json()
    return pokemon
  } catch (error) {
    console.error(`Error fetching Pokemon ${name}:`, error)
    throw error
  }
}

export async function getPokemonTypes(): Promise<PokemonType[]> {
  try {
    const response = await fetch(`${BASE_URL}/type`)
    if (!response.ok) throw new Error('Failed to fetch Pokemon types')
    
    const data = await response.json()
    return data.results
  } catch (error) {
    console.error('Error fetching Pokemon types:', error)
    throw error
  }
}