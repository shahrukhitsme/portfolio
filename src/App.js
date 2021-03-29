import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.jpeg';

class App extends Component{
    state = { displayBio: true };

    constructor(){
        super();

        //this.state = { displayBio: false };
        //this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }

    toggleDisplayBio = () =>{ 
        /*this.setState(
            {
                displayBio: !this.state.displayBio
            }
        );*/
        let val = document.getElementById("readButton").innerText;
        document.getElementById("readButton").innerText=val==="Read more"?"Read less":"Read more";
    }

    expand = (e) => {
        let elem = document.getElementById("collapsedContent");
        let elemContent = document.getElementById("content")
        if (elem.style.maxHeight){
            elem.style.maxHeight = null;
            elemContent.style.visibility='hidden';
            elemContent.style.opacity=0;
            document.getElementById("readMoreBtn").classList.remove('top');
            document.getElementById("readMoreBtn").classList.add('bottom');
          } else {
            elem.style.maxHeight = elem.scrollHeight + "px";
            elemContent.style.visibility='visible';
            elemContent.style.opacity=1;
            document.getElementById("readMoreBtn").classList.remove('bottom');
            document.getElementById("readMoreBtn").classList.add('top');
          }
    }

    render(){
        let shortBio = (
            <div id='shortBio'>
                <img src={profile} alt='profile' className='profile'/>
                <h1>Hello!</h1>
                <p>My name is Shahrukh Uddin. I'm a software engineer</p>
                <p>I work at Juspay, as a software developer {this.state.displayBio?"":"..."}</p>
            </div>
            );

        let extendedBio = (
            <div id='collapsedContent'>
                <div id="content">
                    <p>I live in Bangalore and code everyday.</p>
                    <p>My favorite language is Javascript, and I think React.js is awesome.</p>
                    <p>Besides coding, I also love photography.</p>
                </div>
            </div>
        );
        let readButton = (
            <span className="chevron bottom" onMouseEnter={this.expand} id='readMoreBtn'></span>
        );
        return (
            <div>
            <div className='header'>
                {shortBio}{extendedBio}{readButton}
            </div>
            <hr/>
            <Projects/>
            <hr/>
            <SocialProfiles/>
            </div>);
    }
}

export default App;