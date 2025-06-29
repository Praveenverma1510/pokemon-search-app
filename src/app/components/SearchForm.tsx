'use client'

import { useState, useEffect, useCallback } from 'react'
import { debounce } from 'lodash'
import { PokemonType } from '@/app/types'

interface SearchFormProps {
    setSearchTerm: (term: string) => void
    setSelectedType: (type: string) => void
    pokemonTypes?: PokemonType[]
}

export default function SearchForm({
    setSearchTerm,
    setSelectedType,
    pokemonTypes = []
}: SearchFormProps) {
    const [localSearchTerm, setLocalSearchTerm] = useState('')
    const [localSelectedType, setLocalSelectedType] = useState('')

    // Debounced search term update
    const debouncedSearch = useCallback(
        debounce((term: string) => {
            setSearchTerm(term)
        }, 300),
        [setSearchTerm]
    )

    useEffect(() => {
        debouncedSearch(localSearchTerm)
        return () => debouncedSearch.cancel()
    }, [localSearchTerm, debouncedSearch])

    useEffect(() => {
        setSelectedType(localSelectedType)
    }, [localSelectedType, setSelectedType])

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <select
                        id="type"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={localSelectedType}
                        onChange={(e) => setLocalSelectedType(e.target.value)}
                        style={{ color: 'black' }}
                    >
                        <option value="">Select</option>
                        {pokemonTypes.map((type) => (
                            <option key={type.name} value={type.name}>
                                {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

            </div>
            <div className="relative py-2">
                <input
                    type="text"
                    id="search"
                    placeholder="Search..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-20"
                    value={localSearchTerm}
                    onChange={(e) => setLocalSearchTerm(e.target.value)}
                    style={{ color: 'black' }}
                />
                <button style={{ height: '41px', backgroundColor: 'royalblue' }}
                    className="absolute right-0 px-4 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Search
                </button>
            </div>
        </div>
    )
}