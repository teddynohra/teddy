const express = require('express')
const app = express()
const cors = require('cors'); 
const bodyParser = require('body-parser');
const reader = require('xlsx');
const file = reader.readFile('./students.xlsx');
var students= [
    // {name:'teddy',age:20},
    // {name:'fawzy',age:21},
    // {name:'cahrbel',age:22}
    ];
    function getStudents(){
        var file=reader.readFile('./students.xls')
    }
  
const sheets = file.SheetNames
  
for(let i = 0; i < sheets.length; i++)
{
   const temp = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]])
   temp.forEach((res) => {
      students.push(res)
   })
}
function AddStudent()
{
    var fs = require('fs');
var writeStream = fs.createWriteStream("students.xls");

var header="name"+"\t"+" age"+"\n";
writeStream.write(header);
var row = [students.length];
for (let i=0 ; i<students.length;i++){
    row[i]=students[i].name+"\t"+students[i].age+"\n";
    writeStream.write(row[i]);
}
// var row2 = "1"+"\t"+" 22"+"\t"+"bob"+"\n";

// writeStream.write(header);
// writeStream.write(row[i]);

writeStream.close();
getStudents();
}
  
// Printing data
// console.log(data)
app.use(cors({  
    origin: 'http://127.0.0.1:5500'
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World')})
  app.get('/data', function (req, res) {
    res.send(students)
})
app.post('/addstudent', (req, res)=> {
     console.log(req.body);
    //students.push({name:'elie' ,age:30})
    students.push(req.body);
    res.send(students);
    AddStudent();
    console.log(students);

})
app.get('/getstudent',function(req,res){
    students=[]
    getStudents();
    res.send(students);
    console.log(students);

})

app.listen(3000)   