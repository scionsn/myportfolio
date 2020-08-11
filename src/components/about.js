import React from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends React.Component {
    state = {  }
    render() { 
        return ( <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://instagram.fdel7-1.fna.fbcdn.net/v/t51.2885-19/s320x320/26182540_164673297634022_2343905919923912704_n.jpg?_nc_ht=instagram.fdel7-1.fna.fbcdn.net&_nc_ohc=B2MNh-YdrPUAX8YOgle&oh=3c38492236aa323ea1a4a871cee02a63&oe=5F5D7905"
              alt="avatar"
              className="avatar-img reflect"
              />

            <div className='banner-text'>
              <h1 className="job-profile">Full Stack Web Developer</h1>

            <hr/>

          <p className='job-profile'>HTML/CSS | Bootstrap | JavaScript | ReactJS | NodeJS | Express | MongoDB</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/santa-singh-532a25190/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/scionsn" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>);
    }
}
 
export default About;