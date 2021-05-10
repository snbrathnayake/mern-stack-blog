import React from 'react';

class ContactScreen extends React.Component {

    componentDidMount() {
        console.log(this.props.location)
    }
    
    render() {
        return(
            <div className="row center">
                Hello contact page.
            </div>
        )
    }
}

export default ContactScreen;