import React, {Component} from 'react';
import PROJECTS from './data/projects';

class Project extends Component{
    render(){

        const {title, image, description, link} = this.props.project;
        return (
            <div style={{display:'inline-block', height: 400, width: 250, margin: 10, 'verticalAlign':'top', position:'relative'}}>
            <h3>{title}</h3>
            <img src={image} height="120" width="200" style={{borderRadius:'50px', borderColor:'black', borderWidth:'5px', border:'groove'}} alt='profile'></img>
            <p>{description}</p>
            <a class="projectLink" href={link} style={{position:'absolute', bottom:'30px', right:'90px'}}>Click here</a>
            <br/><br/>
            </div>
        );
    }
}

class Projects extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>
            <h2>Highlighted Projects</h2>
            {PROJECTS.map(PROJECT => {
                return (
                   <Project key={PROJECT.id} project={PROJECT}/>
                )
            })}
            </div>
        );
    }
}

export default Projects;