import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends React.Component {
    state = {  }
    clickfunc=()=>{
      alert("response submitted")      
    }
    render() { 
        return ( <div className="contact-bg">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Santa Singh</h2>
            <img
              src="https://cdn3.iconfinder.com/data/icons/professions-avatars/52/41-512.png"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em',fontSize: '20px'}}>
             Interested in hiring me for your project or just want to say hi? You can fill in the contact form  or send me an email to 
             &nbsp;
             <a href='mailto:#'>scionsn99@gmail.com</a>


                 </p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '15px', fontFamily: 'Anton',display:'flex',flexDirection:'column'}}>
                  <input ref='name' onChange={this.name} type="text"  id="cname" name="name" placeholder="Name" minlength="2" required="" aria-required="true"> 
                    </input>    
                             </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '15px', fontFamily: 'Anton',display:'flex',flexDirection:'column'}}>
                  <input ref='mail' onChange={this.mail} type="email" class="form-control"  name="email" placeholder="Email" required="" aria-required="true">
                  </input>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '15px', fontFamily: 'Anton',display:'flex',flexDirection:'column'}}>
                  <textarea class="form-control" name="message" placeholder="Enter your message" rows="10" required="" aria-required="true" spellcheck="false"></textarea>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '15px', fontFamily: 'Anton',display:'flex',flexDirection:'column'}}>
                      <div><button onClick={this.clickfunc} type="submit" class="btn btn-block btn-primary py4">Send Now</button></div>
                  
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid></div> );
    }
}
 
export default Contact;