import { ProductsFilters } from "../components/Products/ProductsFilters";
import { PageLayout } from "../components/Layout";
import { ProductsWrapper } from "../components/Products";
import { ProductsGrid } from "@/components/Products/ProductsGrid";

export default function Products() {
  // TODO: Add search input there
  return (
    <PageLayout>
        <ProductsWrapper>
          <ProductsFilters/>
          <ProductsGrid/>
      </ProductsWrapper>
    </PageLayout>
  )
}