import React, {Component} from 'react';
import Footer from './footer'

const Logo = () => {
    return (
        <div className="logo">
            <img alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAmsKL-MyczOX3D_fwTHTBiqFD3HXmdh-QpQ&usqp=CAU"></img> Expense Tracker
        </div>
    );
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }
  render() {
    return <div>
        <Logo/>
        <Footer/>
    </div> 
  }
}
export default Home;