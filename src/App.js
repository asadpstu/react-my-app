import logo from './logo.svg';
import './App.css';
import { connect, Connect } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import HomePage from './components/pages/home.page';
import Login from './components/pages/login.page';
import Layout from './components/common/layout';
import Dashboard from './components/pages/dashboard';
import Users from './components/pages/users.page';
import UsersRedux from './components/pages/users.redux.page';
import ProtectedRoute from './components/common/protected';
import ParentPage from './components/pages/parent.page';
import AllState from './components/pages/allState.page';
import Pagination from './components/pages/pagination.page';


function App({ isLoggedIn = false, theme = "default" }) {

  return (
    <div className={"App " + theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/data-pass-between-component' element={<ProtectedRoute isLoggedIn={isLoggedIn}><Layout> <ParentPage /> </Layout></ProtectedRoute>} />
          <Route path='/home' element={<ProtectedRoute isLoggedIn={isLoggedIn}><Layout> <HomePage /> </Layout></ProtectedRoute>} />
          <Route path='/dashboard' element={<ProtectedRoute isLoggedIn={isLoggedIn}><Layout> <Dashboard /> </Layout></ProtectedRoute>} />
          <Route path='/users' element={<ProtectedRoute isLoggedIn={isLoggedIn}><Layout> <Users /> </Layout></ProtectedRoute>} />
          <Route path='/users-redux' element={<ProtectedRoute isLoggedIn={isLoggedIn}><Layout> <UsersRedux /> </Layout></ProtectedRoute>} />
          <Route path='/use-selector' element={<ProtectedRoute isLoggedIn={isLoggedIn}><Layout> <AllState /> </Layout></ProtectedRoute>} />
          <Route path='/pagination' element={<ProtectedRoute isLoggedIn={isLoggedIn}><Layout> <Pagination /> </Layout></ProtectedRoute>} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

const mapStateToPros = (state) => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn
  };
}


const mapDispatchToProps = (dispatch) => {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(App);
