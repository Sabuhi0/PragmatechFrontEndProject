import React from "react";

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = { entry: ''};
        // this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    
    // onFormSubmit(e){
    //     e.preventDefault();   
    //     console.log(this.state.entry) 
    // }

    onFormSubmit = (e) => {
        e.preventDefault();   
        this.props.onSearchSubmit(this.state.entry);
    }


    render() {
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <div className="ui massive icon input">
                            <input 
                                type="text" 
                                placeholder="Search..."
                                onChange={(event) => this.setState({ entry: event.target.value})}
                                value={this.state.entry}
                            />   
                            <i className="search icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;