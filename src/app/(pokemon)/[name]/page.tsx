'use client'

import { notFound } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getPokemonByName } from '@/app/utils/api'
import { Pokemon } from '@/app/types'
import PokemonDetails from '@/app/components/PokemonDetails'
import Breadcrumbs from '@/app/components/Breadcrumbs'

export default function PokemonDetailsPage({
    params,
}: {
    params: { name: string }
}) {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                setLoading(true)
                setError(null)

                const cachedData = sessionStorage.getItem(`pokemon-${params.name}`)
                if (cachedData) {
                    setPokemon(JSON.parse(cachedData))
                    setLoading(false)
                    return
                }

                const pokemonData = await getPokemonByName(params.name)
                setPokemon(pokemonData)

                sessionStorage.setItem(`pokemon-${params.name}`, JSON.stringify(pokemonData))

            } catch (err) {
                console.error('Error fetching Pokemon:', err)
                setError(err instanceof Error ? err.message : 'Failed to fetch Pokemon')

                if (err instanceof Error && err.message === 'Pokemon not found') {
                    notFound()
                }
            } finally {
                setLoading(false)
            }
        }

        fetchPokemon()
    }, [params.name])

    if (loading) {
        return (
            <div className="space-y-6">
                <Breadcrumbs name={params.name} />
                <div className="text-center py-8">Loading Pokemon details...</div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="space-y-6">
                <Breadcrumbs name={params.name} />
                <div className="text-center py-8 text-red-500">
                    Error: {error}
                </div>
            </div>
        )
    }

    if (!pokemon) {
        return (
            <div className="space-y-6">
                <Breadcrumbs name={params.name} />
                <div className="text-center py-8">Pokemon not found</div>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <Breadcrumbs name={pokemon.name} />
            <PokemonDetails pokemon={pokemon} />
        </div>
    )
}