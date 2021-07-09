import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UserList from "../userList/UserList";
import User from "../user/User";
import NewUser from "../newUser/NewUser";
import ProductList from "../productList/ProductList";
import Product from "../product/Product";
import NewProduct from "../newProduct/NewProduct";
import Charts from "../charts/Charts";
import Dashboard from "../dashboard/Dashboard";
import './home.css';
export default function Home() {
  return (
    <Router>
      <Topbar />
      <div className="home1"> 
        <Sidebar />
        <Switch>
          <Route exact path="/home">
            <Dashboard />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/charts">
            <Charts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
