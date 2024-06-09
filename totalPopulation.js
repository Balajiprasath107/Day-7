var link = "https://restcountries.com/v3.1/all"
var xml = new XMLHttpRequest()
xml.open("GET",link,true)
xml.send()
xml.onreadystatechange=function(){
  if(this.readyState===4 && this.status===200){
var data = (JSON.parse(this.response)) 
 console.log(data.reduce((acc,curr)=> (acc+curr.population),0))
  }
}

/* output
  7777721563
  */
