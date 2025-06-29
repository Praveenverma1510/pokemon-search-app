import Link from 'next/link'

export default function Breadcrumbs({ name }: { name: string }) {
  return (
    <div className="flex items-center space-x-2 text-sm text-gray-600">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      <span>/</span>
      <span className="font-medium text-gray-800 capitalize">{name}</span>
    </div>
  )
}