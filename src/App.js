import React from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl'
import Nav from './components/nav';
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
     <div>
    <Layout fixedHeader>
        <Header className='nav-color' title={<Link style={{color:'#ffffff'}} to='/'><span><strong>About Me</strong></span></Link>}>
            <Navigation>
                <Link to="/skills"><strong>Skills</strong></Link>
                <Link to="/projects"><strong>Projects</strong></Link>
                <Link to="/contact"><strong>Contact Me</strong></Link>
            </Navigation>
        </Header>
        <Drawer title="About Me">
            <Navigation  className='sidebar-bg'>
                <Link  to="/skills"><strong>Skills</strong></Link>
                <Link to="/projects"><strong>Projects</strong></Link>
                <Link to="/contact"><strong>Contact Me</strong></Link>
            </Navigation>
        </Drawer>
        <Nav/>
        <Content />
    </Layout>
</div>
    </div>
  );
}

export default App;
