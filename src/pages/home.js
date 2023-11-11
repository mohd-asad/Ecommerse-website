import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/Product-List/ProductList";
function home(){
    return (
        <div>
            <Navbar>
                <ProductList/>
            </Navbar>
        </div>
    );
}

export default home;