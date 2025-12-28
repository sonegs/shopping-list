import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Left */}
        <nav className="flex items-center gap-6">
          <Link
            href="/products"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Products
          </Link>

          <Link
            href="/list"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Shopping List
          </Link>
        </nav>

        {/* Right */}
        <Link
          href="/settings"
          aria-label="Settings"
          className="rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        >
          {/* 
          TODO: Adapt Settings component to Header
            <Settings /> 
          */}
        </Link>
      </div>
    </header>
  );
}
