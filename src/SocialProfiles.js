import React, {Component} from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component{
    constructor(){
        super();
    }

    render(){
        const {id, link, image} = this.props.profile;
        return(
            <div style={{display:'inline-block', margin:5}}>
            <a href={link}><img src={image} height="30" width="30"/></a>            </div>
        );
    }
}

class SocialProfiles extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>
            <h3>Connect with me</h3>
            {SOCIAL_PROFILES.map(PROFILE => {
                return (
                    <SocialProfile key={PROFILE.id} profile={PROFILE}/>
                    );
            })}
            </div>
        );
    }
}

export default SocialProfiles;