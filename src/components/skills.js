import React from 'react';
import $ from 'jquery';


class Skills extends React.Component {
    state = {  }
    componentDidMount(){
        $('.skill-per').each(function(){
            var $this = $(this);
            var per = $this.attr('per');
            $this.css("width",per+'%');
            $({animatedValue: 0}).animate({animatedValue: per},{
              duration: 1000,
              step: function(){
                $this.attr('per', Math.floor(this.animatedValue) + '%');
              },
              complete: function(){
                $this.attr('per', Math.floor(this.animatedValue) + '%');
              }
            });
          });
    }
    render() { 
        return (
        <div className='skills-bg'>
        <div class="skills">
        <div class="skill">

          <div class="skill-name">HTML</div>

          <div class="skill-bar">
            <div class="skill-per" per="80"></div>
          </div>
        </div>
  
        <div class="skill">
          <div class="skill-name">CSS</div>

          <div class="skill-bar">
            <div class="skill-per" per="70"></div>
          </div>
        </div>
        <div class="skill">
          <div class="skill-name">Bootstrap</div>
          <div class="skill-bar">
            <div class="skill-per" per="70"></div>
          </div>
        </div>
  
        <div class="skill">
          <div class="skill-name">Javascript</div>
          <div class="skill-bar">
            <div class="skill-per" per="60"></div>
          </div>
        </div>
        <div class="skill">
          <div class="skill-name">React.js</div>
          <div class="skill-bar">
            <div class="skill-per" per="60"></div>
          </div>
        </div>
        <div class="skill">
          <div class="skill-name">Node.js</div>
          <div class="skill-bar">
            <div class="skill-per" per="80"></div>
          </div>
        </div>
        <div class="skill">
          <div class="skill-name">MongoDB</div>
          <div class="skill-bar">
            <div class="skill-per" per="80"></div>
          </div>
        </div>
        <div class="skill">
          <div class="skill-name">DS&Algo</div>
          <div class="skill-bar">
            <div class="skill-per" per="70"></div>
          </div>
        </div>
      </div>
      </div>);
    }
}
 
export default Skills;