import React from 'react';

class Title extends React.Component {
    constructor(){
        super();
        this.state = {
            title: "Power Job - Portal Hiring Solustion",
            subTitle: "Dibuat dengan semangat!"
        }
    }

    render(){
        return(
            <div>
                <h1 class="flex items-center px-4 py-3 text-white bg-blue-500 hover:bg-blue-400">{this.state.title}</h1>
                <p>{this.state.subTitle}</p>
            </div>
        );
    }
}

export default Title;