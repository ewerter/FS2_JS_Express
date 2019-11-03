


function savedata(){
  let txtage = document.getElementById("txtage");
  let txtname = document.getElementById("txtname");
  
  //let link = path.join(__dirname, '../server/static')

  /*axios.get('./js/data.json')
    .then(function(response){
      console.log(response.data);
    })*/
  require(['fs'], function (fs){
    fs.readFile('./js/data.json', (err,data) =>{
      let jsonArray = JSON.parse(data);
  
        jsonArray.push({
  
          name: txtname.innerText,
          age: txtage.innerText
        });
    fs.writeFile('data.json', JSON.stringify(jsonArray));
    });
  });

};