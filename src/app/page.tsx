'use client'

import { useState } from 'react'
import SearchForm from './components/SearchForm'
import PokemonGrid from './components/PokemonGrid'
import PokemonDetailsPage from '../app/components/PokemonDetails'
import usePokemon from './hooks/usePokemon'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [showDetails, setShowDetails] = useState(false)
  const [selectedPokemon, setSelectedPokemon] = useState<any>(null)

  const {
    pokemonList,
    pokemonTypes,
    loading,
    error,
    setSearchTerm: updateSearchTerm,
    setSelectedType: updateSelectedType,
    allPokemonList
  } = usePokemon()

  const handleSearchTermChange = (term: string) => {
    setSearchTerm(term)
    updateSearchTerm(term)
  }

  const handleTypeChange = (type: string) => {
    setSelectedType(type)
    updateSelectedType(type)
  }

  const handleCardClick = (id: number, name: string) => {
    const pokemon = allPokemonList.find(p => p.id === id && p.name === name)
    if (pokemon) {
      setSelectedPokemon(pokemon)
      setShowDetails(true)
    }
  }

  const handleBack = () => {
    setShowDetails(false)
    setSelectedPokemon(null)
  }

  if (showDetails) {
    return (
      <PokemonDetailsPage
        pokemon={selectedPokemon}
        onBack={handleBack}
      />
    )
  }

  return (
    <div className="space-y-8 px-4 py-8">
      <SearchForm
        setSearchTerm={handleSearchTermChange}
        setSelectedType={handleTypeChange}
        pokemonTypes={pokemonTypes}
      />
      <PokemonGrid
        pokemonList={pokemonList}
        loading={loading}
        error={error}
        onCardClick={handleCardClick}
      />
    </div>
  )
}