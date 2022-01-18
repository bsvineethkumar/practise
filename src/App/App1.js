import { Route, Switch, Redirect } from 'react-router-dom';

import Welcome from '../Pages/Welcome';
import Product from '../Pages/Product';
//import Login from './Pages/Login';
import MainHeader from '../Component/MainHeader';
import ProductDetail from '../Pages/productDetails';

function App1() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome'/>
          </Route>
        <Route path='/welcome'>
          <Welcome />
        </Route>
        <Route path='/product' exact>
          <Product />
        </Route>
        <Route path='/product/:productId'>
          <ProductDetail/>
        </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App1;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component