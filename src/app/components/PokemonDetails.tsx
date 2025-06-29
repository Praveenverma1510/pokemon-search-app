'use client'

import { Pokemon } from '@/app/types'
import Image from 'next/image'

interface PokemonDetailsPageProps {
  pokemon: Pokemon | null
  onBack: () => void
}

export default function PokemonDetailsPage({ pokemon, onBack }: PokemonDetailsPageProps) {
  if (!pokemon) {
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center text-teal-600 hover:text-teal-700 mb-4"
          >
            ← Back
          </button>
          <div className="text-center py-8">Pokemon not found</div>
        </div>
      </div>
    )
  }

  const stats = [
    { name: 'hp', value: pokemon.stats[0].base_stat },
    { name: 'attack', value: pokemon.stats[1].base_stat },
    { name: 'defense', value: pokemon.stats[2].base_stat },
    { name: 'special-attack', value: pokemon.stats[3].base_stat },
    { name: 'special-defense', value: pokemon.stats[4].base_stat },
    { name: 'speed', value: pokemon.stats[5].base_stat }
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto justify-between">
        <button
          onClick={onBack}
          className="flex items-center text-teal-600 hover:text-teal-700 mb-6 font-medium "
          style={{ cursor: 'pointer' }}
        >
          ← Back
        </button>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-br from-teal-400 to-teal-500 p-8 text-center" style={{ background: 'oklch(0.82 0.21 177.75 / 0.41)' }}>
            <div className="w-48 h-48 mx-auto flex items-center justify-center">
              <Image
                src={
                  pokemon.sprites.other['official-artwork'].front_default ||
                  pokemon.sprites.front_default ||
                  '/placeholder.png'
                }
                alt={pokemon.name}
                width={180}
                height={180}
                className="w-44 h-44 object-contain"
              />
            </div>
          </div>
          <div className="p-6" style={{ backgroundColor: '#F4A460' }}>
            <div className="mb-4">
              <span className="text-sm font-medium text-gray-700">Name:</span>
              <span className="ml-2 text-lg font-bold capitalize text-gray-900">
                {pokemon.name}
              </span>
            </div>

            <div className="mb-4">
              <span className="text-sm font-medium text-gray-700">Type:</span>
              <div className="inline-flex gap-2 ml-2">
                {pokemon.types.map((type, index) => (
                  <span key={type.type.name} className="text-gray-900">
                    {type.type.name}
                    {index < pokemon.types.length - 1 && ', '}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <span className="text-sm font-medium text-gray-700">Stats:</span>
              <span className="ml-2 text-gray-900">
                {stats.map((stat, index) => (
                  <span key={stat.name}>
                    {stat.name}, {index < stats.length - 1 && ' '}
                  </span>
                ))}
              </span>
            </div>

            <div className="mb-4">
              <span className="text-sm font-medium text-gray-700">Abilities:</span>
              <span className="ml-2 text-gray-900">
                {pokemon.abilities.map((ability, index) => (
                  <span key={ability.ability.name}>
                    {ability.ability.name}
                    {index < pokemon.abilities.length - 1 && ', '}
                  </span>
                ))}
              </span>
            </div>

            <div>
              <span className="text-sm font-medium text-gray-700">Some Moves:</span>
              <span className="ml-2 text-gray-900">
                {pokemon.moves.slice(0, 5).map((move, index) => (
                  <span key={move.move.name}>
                    {move.move.name}
                    {index < 4 && pokemon.moves.length > index + 1 && ', '}
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}