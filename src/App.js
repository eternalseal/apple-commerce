import Template from "./template/Template";
import ProductDetail from "./products/detail/ProductDetail";
import { Switch, Route } from "react-router-dom";
import ProductList from "./products/ProductList";

function App() {
  return (
    <Template>
      <Switch>
        <Route path="/" exact>
          <ProductList />
        </Route>
        <Route path="/products/:slug">
          <ProductDetail />
        </Route>
      </Switch>
    </Template>
  );
}

export default App;
