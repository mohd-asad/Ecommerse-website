import ProductForm from "../features/admin/ProductForm";
import Navbar from "../features/navbar/Navbar";

function ProductFormPage() {
  return (
    <div>
      <Navbar>
        <ProductForm />
      </Navbar>
    </div>
  );
}

export default ProductFormPage;