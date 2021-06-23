import logo from './logo.svg';
import './App.css';
import HighOrder from './Components/HighOrder';
import CustomPaginationActionsTable from './Components/CustomPaginationActionsTable';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserInfo from './Components/UserInfo';
import HighUserInfo from './Components/HighUserInfo';

const CurrentUser = HighOrder(CustomPaginationActionsTable);
const UserInformation = HighUserInfo(UserInfo);

function App() {
  return (
    <Router >
      <Route exact path="/">
        <CurrentUser/>
      </Route>
      <Route path="/users/:id" children={<UserInformation />}></Route>
    </Router>
  );
}

export default App;
