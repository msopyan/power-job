import React from 'react';

class Footer extends React.Component {
    constructor(){
        super();
        this.state = {
            Title: "Copyright © 2022 - Power Job.",
            Menu: "Privacy policy Changelog"
        }
    }

    render(){
        return(
            <div class="pt-10 pb-28 border-t border-slate-200 sm:flex justify-between text-slate-500 dark:border-slate-200/5">
                <div class="card">
                    <h1 clas="">{this.state.Title}</h1>
                </div>
                <p>{this.state.Menu}</p>
            </div>
        );
    }
}

export default Footer;