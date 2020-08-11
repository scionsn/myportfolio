import React from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
class Project extends React.Component {
    state = {activeTab: 0 }
    toggleCategories=()=> {
        if(this.state.activeTab === 0){
          return(
            <div className='projects-grid'>
             <Card shadow={50} style={{minWidth: '450', margin: 'auto',padding:'4px'}}>
            <CardTitle style={{color: '#fff',height: '250px', background: 'url(https://create-react-app.dev/img/logo-og.png) center / cover'}} >React Project #1</CardTitle>
            <CardText>
<strong>Fitness Tracker</strong>
            </CardText>
            <CardActions border>
              <Button colored><a href='https://github.com/scionsn/FitnessTracker'>GitHub</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={50} style={{minWidth: '450', margin: 'auto',padding:'4px'}}>
            <CardTitle style={{color: '#fff', height: '250px', background: 'url(https://create-react-app.dev/img/logo-og.png) center / cover'}} >React Project #2</CardTitle>
            <CardText>
<strong>Todo App</strong>
            </CardText>
            <CardActions border>
              <Button colored><a href='https://github.com/scionsn/TodoApp'>GitHub</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
              </div>)}
              else if(this.state.activeTab === 1) {
                return (
                  <div>  <Card shadow={50} style={{minWidth: '450', margin: 'auto',padding:'4px'}}>
                  <CardTitle style={{color: '#fff', height: '250px', background: 'url(https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736401_960_720.png) center / cover'}} >JS </CardTitle>
                  <CardText>
      <strong>
          Test Engine
      </strong>
                  </CardText>
                  <CardActions border>
                    <Button colored><a href='https://github.com/scionsn/classmarker'>GitHub</a></Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card></div>
                )
              } else if(this.state.activeTab === 2) {
                return (
                  <div>  <Card shadow={50} style={{minWidth: '450', margin: 'auto',padding:'4px'}}>
                  <CardTitle style={{color: '#fff', height: '250px', background: 'url(https://image.flaticon.com/icons/png/512/121/121152.png) center / cover'}} >Java  </CardTitle>
                  <CardText>
      <strong>Scientific Calculator</strong>
                  </CardText>
                  <CardActions border>
                    <Button colored><a href='https://github.com/scionsn/scientificcalc'>GitHub</a></Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card></div>
                )
              }
            
            }
    render() { 
        return ( <div className='projects-nav'>  <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
        <Tab><strong>React</strong></Tab>
        <Tab><strong>Javascript</strong></Tab>
        <Tab><strong>Java</strong></Tab>


      </Tabs>
      <Grid className='projects-bg'>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
</div> );
    }
}
 
export default Project;