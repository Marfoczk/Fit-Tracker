import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import axios from 'axios'
import './app.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Add from './components/Add/Add'
import Indicator from './components/Indicator/Indicator'
import Footer from './components/Footer/Footer'
import styled from 'styled-components'
import CreateExercisePage from './pages/CreateExercisePage/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage/EditExercisePage';


let vh = window.innerHeight;
console.log(vh*100);


const StyledWrapper = styled.div`
    position: relative;
    /* background-color: #212121; */
    /* background-color: #23252f; */
    background-color: #212A6B;
    /* min-height: calc(vh * 100); */
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    @media (max-width: 768px) {
      /* height: -moz-available;     
      height: -webkit-fill-available;   */
      min-height: ${vh}px;
      height: ${vh}px;
      /* ${props => props.vh && `min-height: ${vh}px;`} */
    }
`;

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/exercises/')
      .then(res => {
        setData(res.data)
        console.log(res);
      })
  }, [])
 
  return (
    <StyledWrapper>
      <Router>
        <Header/>
        <Indicator />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} data={data} />} />
          {/* <Route path="/about" exact component={}/> */}
          <Route path="/edit/:id" exact component={EditExercisePage}/>
          <Route path="/create" exact component={CreateExercisePage}/>
          {/* <Route path="/user" exact component={}/> */}
          <Redirect to="/" />
        </Switch>
        <Add />
        <Footer/>
      </Router>
    </StyledWrapper>
  );
}

export default App;