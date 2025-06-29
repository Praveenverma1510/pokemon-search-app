'use client'

import PokemonTypeBadge from './PokemonTypeBadge'
import Image from 'next/image'
import { Pokemon } from '@/app/types'

interface PokemonCardProps {
  pokemon: Pokemon
  onCardClick: (id: number, name: string) => void
}

export default function PokemonCard({ pokemon, onCardClick }: PokemonCardProps) {
    const handleCardClick = () => {
        onCardClick(pokemon.id, pokemon.name)
    }

    return (
        <div
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={handleCardClick}
            style={{ padding: '20px' }}
        >
            <div className="p-4">
                <div className="flex justify-center">
                    <Image
                        src={pokemon.sprites.front_default || '/placeholder.png'}
                        alt={pokemon.name}
                        width={96}
                        height={96}
                        className="w-24 h-24 object-contain"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = '/placeholder.png'
                        }}
                    />
                </div>
                <h3 className="text-lg font-semibold text-center capitalize mt-2 text-green-800">
                    {pokemon.name}
                </h3>
            </div>
            
            <div className="px-4 pb-4">
                <div className="flex justify-center gap-2">
                    {pokemon.types.map((type) => (
                        <PokemonTypeBadge key={type.type.name} type={type.type.name} />
                    ))}
                </div>
            </div>

            <div>
                <span className='text-blue-800'>
                    Details →
                </span>
            </div>
        </div>
    )
}