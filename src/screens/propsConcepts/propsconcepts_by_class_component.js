import { Component ,React} from "react";

//----------------------------------------------------------------------------------//
/*class PropsConcept extends Component{

    render(){
        return(
            <div>
                <h1>My name is {this.props.name}</h1>
                <h1>I am a {this.props.designation}</h1>
    
            </div>
            );
    }

}*/
//----------------------------------------------------------------------------------//
class PropsConcept extends Component{

    render(){
        const {name,designation}=this.props;
        return(
            <div>
                <h1>My name is {name}</h1>
                <h1>I am a {designation}</h1>
    
            </div>
            );
    }

}
export default PropsConcept