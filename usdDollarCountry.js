var link = "https://restcountries.com/v3.1/all"
var xml = new XMLHttpRequest()
xml.open("GET",link)
xml.send()
xml.onreadystatechange = function(){
  if(this.status===200 && this.readyState===4){
    var data = JSON.parse(this.response)
    for(var i in data){
      if(data[i].currencies)
      var temp = Object.keys(data[i].currencies)
      if(temp.includes("USD"))
        console.log(data[i].name.common,"uses",'"',data[i].currencies.USD.name,'" as currency')
    }
   }  
  }

/*  sample output
  Puerto Rico uses " United States dollar " as currency debugger eval code:12:17
Bahamas uses " United States dollar " as currency debugger eval code:12:17
American Samoa uses " United States dollar " as currency debugger eval code:12:17
Palau uses " United States dollar " as currency debugger eval code:12:17
Guam uses " United States dollar " as currency debugger eval code:12:17
Caribbean Netherlands uses " United States dollar " as currency
  */
