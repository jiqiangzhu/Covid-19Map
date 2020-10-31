import React from 'react'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      res: null
    }
  }
  async componentWillMount() {
    let res = await axios.get("http://localhost:8080/api/newsdata");
    console.log(res);
    this.setState({
      res: res
    })
    // let data = res
  }
  render() {
    return (
      <div>
        {this.state.res}
      </div>
    )
  }
}

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// ) 
// export default App;
