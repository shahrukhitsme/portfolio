import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png';

class App extends Component{
    state = { displayBio: false };

    constructor(){
        super();

        //this.state = { displayBio: false };
        //this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }

    toggleDisplayBio = () =>{ 
        this.setState(
            {
                displayBio: !this.state.displayBio
            }
        );
        let val = document.getElementById("readButton").innerText;
        document.getElementById("readButton").innerText=val=="Read more"?"Read less":"Read more";
    }

    render(){
        let shortBio = (
            <div>
                <img src={profile} alt='profile' className='profile'/>
                <h1>Hello!</h1>
                <p>My name is Shahrukh Uddin. I'm a software engineer</p>
                <p>I work at Hyland, as a software developer {this.state.displayBio?"":"..."}</p>
            </div>
            );

        let extendedBio = this.state.displayBio?(
            <div>
                <p>I love in Kolkata and code everyday.</p>
                <p>My favorite language is Javascript, and I think React.js is awesome.</p>
                <p>Besides coding, I also love photography.</p>
            </div>
        ):null;
        let readButton = (
            <button id="readButton" onClick={this.toggleDisplayBio}>Read more</button>
        );
        return (
            <div>{shortBio}{extendedBio}{readButton}
            <hr/>
            <Projects/>
            <hr/>
            <SocialProfiles/>
            </div>);
    }
}

export default App;