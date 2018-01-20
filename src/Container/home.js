import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            email:'',
            password:''
        }
    }
    
    render() {
        return (
            <h1 >
                Home Page
            </h1>
        );
    }
}

export default Home;