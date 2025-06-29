'use client'

import PokemonCard from './PokemonCard'
import { Pokemon } from '@/app/types'

interface PokemonGridProps {
    pokemonList: Pokemon[]
    loading: boolean
    error: string | null
    onCardClick: (id: number, name: string) => void
}

export default function PokemonGrid({ pokemonList, loading, error, onCardClick }: PokemonGridProps) {
    if (loading) return <div className="text-center py-8 text-green-800">Loading Pokemon...</div>
    if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>

    if (pokemonList.length === 0) {
        return <div className="text-center py-8 text-gray-500">No Pokemon found matching your criteria.</div>
    }

    return (
        <div style={{ overflow: 'auto',height:'510px' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {pokemonList.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.id}
                        pokemon={pokemon}
                        onCardClick={onCardClick}
                    />
                ))}
            </div>
        </div>
    )
}