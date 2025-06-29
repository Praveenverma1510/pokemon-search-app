const typeColors: Record<string, string> = {
  normal: 'bg-gray-400',
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  electric: 'bg-yellow-400',
  grass: 'bg-green-500',
  ice: 'bg-blue-200',
  fighting: 'bg-red-700',
  poison: 'bg-purple-500',
  ground: 'bg-yellow-600',
  flying: 'bg-indigo-300',
  psychic: 'bg-pink-500',
  bug: 'bg-green-400',
  rock: 'bg-yellow-700',
  ghost: 'bg-purple-700',
  dragon: 'bg-indigo-700',
  dark: 'bg-gray-800',
  steel: 'bg-gray-500',
  fairy: 'bg-pink-300',
}

export default function PokemonTypeBadge({ type }: { type: string }) {
  const bgColor = typeColors[type] || 'bg-gray-400'

  return (
    <span
      className={`${bgColor} text-white text-xs font-medium px-2.5 py-0.5 rounded-full capitalize`}
    >
      {type}
    </span>
  )
}