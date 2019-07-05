# NPM 설치

```javascript
//backend
npm install supervisor -g
npm install --save express cors body-parser

//frontend
npm install --save axios
```

### backend

### **`supervisor`**

-g : 한번 설치하면 어디서든 동작
supervisor 설치 후에는
서버 시작할 때 node app.js로 대신 **supervisor app.js** 쓴다.
자동으로 서버를 죽였다 다시 켜준다.

### **`express`**
서버 통신 프레임 워크

### **`cors`**  
백과 프런트 통신을 허락하기 위해서 사용

### **`body-parser`**
정보들을 사람이 보기 쉽게 나타나게 해준다.

<br/>

### frontend

**`axios`**
요청, 응답 데이터를 변환 해준다.

<br/>

## 서버 실행

```javascript
//backend
supervisor server.js

//frontend (npm, yarn 둘 중 하나로 실행)
yarn start
npm start
```

**backend**
주소창에 localhost : 4000/company 으로 들어가면 된다.

**frontend**
주소창에 localhost : 3000/company 으로 들어가면 된다.

각 backend, frontend 폴더에서 cmd 해주기

# frontend 폴더

**`axios`** 요청, 응답 데이터를 변환

### App.js

```javascript
import React, {Component} from 'react';
import axios from  'axios';

class App extends Component {
  state = {
    title : '초기제목',
    name : '초기이름',
  }

  getCompany = () => {
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
```

<br/>

# backend 폴더
**`express`** 서버 통신 프레임 워크

<br/>

**`cors`** back과 front의 통신을 허락하기 위해서 사용

서버 응답 허락해주기			
크로스(백앤드와 프런트 통신으로인해 ) 응답이 안되는 경우			
수락해서 통신이 되도록하는 것			
backend 폴더 들어가서 server.js에서 수락하기			
**const cors = require('cors')();**



### server.js

```javascript
const express = require('express');
const app = express();
const cors = require('cors')();   // 통신 수락해주기 : cors

app.use(cors);
app.listen(4000);
app.get('/company',function(req,res){
  let data = ({ title : 'company', name : '회사명' });    // 응답을 json으로
  res.json(data);
});
```
