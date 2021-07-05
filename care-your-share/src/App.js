import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SavingsAccounts from './pages/SavingsAccounts';
import Stocks from './pages/Stocks';
import USStocks from './pages/USStocks';
import Dashboard from './pages/Dashboard';
import Dividends from './pages/Dividends';
import Earnings from './pages/Earnings';
import MutualFunds from './pages/MutualFunds';

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/' exact component={Dashboard}  />
          <Route path='/dividends' component={Dividends} />
          <Route path='/earnings' component={Earnings} />
          <Route path='/mutualfunds' component={MutualFunds} />
          <Route path='/savingsaccounts' component={SavingsAccounts} />
          <Route path='/stocks' component={Stocks} />
          <Route path='/usstocks' component={USStocks} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
