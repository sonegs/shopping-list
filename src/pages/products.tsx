import { ProductsFilters } from "../components/Products/ProductsFilters";
import { PageLayout } from "../components/Layout";
import { ProductsView, ProductsWrapper } from "../components/Products";

export default function Products() {
  // TODO: Add search input there
  return (
    <PageLayout>
        <ProductsWrapper>
          <ProductsFilters/>
          <ProductsView/>
      </ProductsWrapper>
    </PageLayout>
  )
}