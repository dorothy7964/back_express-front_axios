const express = require('express');
const app = express();
const cors = require('cors')();   // 통신 수락해주기 : cors

app.use(cors);
app.listen(4000);
app.get('/company',function(req,res){
  let data = ({ title : 'company', name : '회사명' });    // 응답을 json으로
  res.json(data);
});
