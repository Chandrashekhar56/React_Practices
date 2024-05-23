import { Component,React } from "react";

class ComponentDidMount extends Component{

    constructor()
    {
        super();
        this.state={data:null}
        
        console.warn("constructor");
    }

    componentDidMount()
    {
        this.setState={data:"updated"};
        console.warn("component did mount");
    }

    render()
    {
        console.warn("render");
        return (
            <div>
                <h1>Life Cycle method: ComponentDidMount</h1>
            </div>
        );
    }
}
export default ComponentDidMount