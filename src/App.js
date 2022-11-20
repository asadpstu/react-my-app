import logo from './logo.svg';
import './App.css';
import { connect, Connect } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import HomePage from './components/pages/home.page';
import Login from './components/pages/login.page';
import Layout from './components/common/layout';
import Dashboard from './components/pages/dashboard';
import Query from './components/pages/query';

function App({isLoggedIn = false,permissions = [], theme="default", language ="en"}) {
  
  return (
    <div className={"App "+theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Layout> <HomePage/> </Layout>}/>
          <Route path='/dashboard' element={<Layout> <Dashboard/> </Layout>}/>
          <Route path='/query' element={<Layout> <Query/> </Layout>}/>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return {
    permissions: state.userReducer.permissions,
    isLoggedIn : state.userReducer.isLoggedIn,
    theme : state.globalSettingsReducer.theme,
    language : state.userReducer.language
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
