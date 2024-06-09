var link = "https://restcountries.com/v3.1/all"
var xml = new XMLHttpRequest()
xml.open("GET",link,true)
xml.send()
xml.onreadystatechange=function(){
  if(this.readyState===4 && this.status===200){
var data = (JSON.parse(this.response)) 
data.filter(element =>element.population<200000).sort((a,b)=> a.population-b.population).map(element=>console.log(`Common name : ${element.name.common}\nOfficial name : ${element.name.official}\nPopulation : ${element.population}`))


  }
}


/* sample Output
  
Common name : Heard Island and McDonald Islands
Official name : Heard Island and McDonald Islands
Population : 0 debugger eval code:8:111
Common name : Bouvet Island
Official name : Bouvet Island
Population : 0 debugger eval code:8:111
Common name : South Georgia
Official name : South Georgia and the South Sandwich Islands
Population : 30 debugger eval code:8:111
Common name : Pitcairn Islands
Official name : Pitcairn Group of Islands
Population : 56 debugger eval code:8:111
Common name : United States Minor Outlying Islands
Official name : United States Minor Outlying Islands
Population : 300 debugger eval code:8:111
Common name : French Southern and Antarctic Lands
Official name : Territory of the French Southern and Antarctic Lands
Population : 400 debugger eval code:8:111
Common name : Vatican City
Official name : Vatican City State
Population : 451 debugger eval code:8:111
Common name : Cocos (Keeling) Islands
Official name : Territory of the Cocos (Keeling) Islands
Population : 544 debugger eval code:8:111
Common name : Antarctica
Official name : Antarctica
Population : 1000 debugger eval code:8:111
Common name : Tokelau
Official name : Tokelau
Population : 1411 debugger eval code:8:111
Common name : Niue
Official name : Niue
Population : 1470
  */
