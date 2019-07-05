import React, {Component} from 'react';
import axios from  'axios';

class App extends Component {
  state = {
    title : '초기제목',
    name : '초기이름',
  }

  getCompany =() => {
  // axios
  axios.get('http://localhost:4000/company')
    .then(response=>{
      console.log(response.data);
      this.setState({
        title : response.data.title,
        name : response.data.name
      })
    })
    .catch(error=>{
      console.log(error);
    });
  }

  render(){
    const { title, name } = this.state;
    return(
      <div>
        <div>백엔드 통신해보기</div>
        <button onClick={this.getCompany}>통신시작</button>
        <div>{title}</div>
        <div>{name}</div>
      </div>
    )
  }
}

export default App;
