import ProductsGridView from "./ProductsGridView";

export default function ProductsGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">

      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Products List
      </h2>

      <div
        className="
          grid gap-6
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
        "
      >
          <ProductsGridView />
      </div>
    </section>

  )    
}