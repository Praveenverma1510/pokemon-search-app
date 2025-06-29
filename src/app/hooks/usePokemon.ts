'use client'

import { useState, useEffect } from 'react'
import { getPokemonList, getPokemonTypes } from '../utils/api'
import { Pokemon, PokemonType } from '@/app/types'

export default function usePokemon() {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
    const [allPokemonList, setAllPokemonList] = useState<Pokemon[]>([]) // Keep original list
    const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([])
    const [pokemonTypes, setPokemonTypes] = useState<PokemonType[]>([])
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedType, setSelectedType] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const [types, pokemon] = await Promise.all([
                    getPokemonTypes(),
                    getPokemonList(),
                ])
                setPokemonTypes(types)
                setPokemonList(pokemon)
                setAllPokemonList(pokemon) // Store original list
                setFilteredPokemon(pokemon)
            } catch (err) {
                setError('Failed to fetch Pokémon data')
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        let result = [...pokemonList]

        if (searchTerm) {
            result = result.filter((pokemon) =>
                pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }

        if (selectedType) {
            result = result.filter((pokemon) =>
                pokemon.types.some((type) => type.type.name === selectedType)
            )
        }

        setFilteredPokemon(result)
    }, [searchTerm, selectedType, pokemonList])

    return {
        pokemonList: filteredPokemon,
        allPokemonList,
        pokemonTypes,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        selectedType,
        setSelectedType,
    }
}