import Navbar from "../features/navbar/Navbar";
import ProductDetail from "../features/Product/components/ProductDetail";
function ProductDetailPage() {
  return (
    <div>
      <Navbar>
        <ProductDetail />
      </Navbar>
    </div>
  );
}

export default ProductDetailPage;
