import React, {Component} from 'react';

class App extends Component {
  state = {
    title : '초기제목',
    name : '초기이름',
  }

  render(){
    const { title, name } = this.state;
    return(
      <div>
        <div>백엔드 통신해보기</div>
        <button>통신시작</button>
        <div>{title}</div>
        <div>{name}</div>
      </div>
    )
  }
}

export default App;
