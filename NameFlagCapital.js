var link = "https://restcountries.com/v3.1/all"
var xml = new XMLHttpRequest()
xml.open("GET",link,true)
xml.send()
xml.onreadystatechange=function(){
  if(this.readyState===4 && this.status===200){
var data = (JSON.parse(this.response)) 
data.forEach(element => console.log(`Name: ${element.altSpellings}\nFlag: ${element.flag}\nflag link: ${element.flags.png}\nCapital: ${element.capital}`))
  }
}

/* sample output
  Name: TN,Republic of Tunisia,al-Jumhūriyyah at-Tūnisiyyah
Flag: 🇹🇳
flag link: https://flagcdn.com/w320/tn.png
Capital: Tunis debugger eval code:8:33
Name: NL,Holland,Nederland,The Netherlands
Flag: 🇳🇱
flag link: https://flagcdn.com/w320/nl.png
Capital: Amsterdam debugger eval code:8:33
Name: BF
Flag: 🇧🇫
flag link: https://flagcdn.com/w320/bf.png
Capital: Ouagadougou debugger eval code:8:33
Name: ID,Republic of Indonesia,Republik Indonesia
Flag: 🇮🇩
flag link: https://flagcdn.com/w320/id.png
Capital: Jakarta
  */
