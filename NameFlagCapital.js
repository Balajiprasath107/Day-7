var link = "https://restcountries.com/v3.1/all"
var xml = new XMLHttpRequest()
xml.open("GET",link,true)
xml.send()
xml.onreadystatechange=function(){
  if(this.readyState===4 && this.status===200){
var data = (JSON.parse(this.response)) 
data.forEach(element => console.log(`Name: ${element.name.common}\nFlag: ${element.flag}\nflag img link: ${element.flags.png}\nCapital: ${element.capital}`))
  }
}

/* sample output

Name: Netherlands
Flag: 🇳🇱
flag img link: https://flagcdn.com/w320/nl.png
Capital: Amsterdam debugger eval code:8:33
Name: Burkina Faso
Flag: 🇧🇫
flag img link: https://flagcdn.com/w320/bf.png
Capital: Ouagadougou debugger eval code:8:33
Name: Indonesia
Flag: 🇮🇩
flag img link: https://flagcdn.com/w320/id.png
Capital: Jakarta debugger eval code:8:33
Name: Austria
Flag: 🇦🇹
flag img link: https://flagcdn.com/w320/at.png
Capital: Vienna
  */
