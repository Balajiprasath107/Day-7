var link = "https://restcountries.com/v3.1/all"
var xml = new XMLHttpRequest()
xml.open("GET",link,true)
xml.send()
xml.onreadystatechange=function(){
  if(this.readyState===4 && this.status===200){
var data = (JSON.parse(this.response)) 
data.forEach(element => console.log(`Name: ${element.name.common}\nFlag: ${element.flag}\nflag link: ${element.flags.png}\nCapital: ${element.capital}`))
  }
}

/* sample output
Name: Slovenia
Flag: 🇸🇮
flag link: https://flagcdn.com/w320/si.png
Capital: Ljubljana debugger eval code:8:33
Name: Tokelau
Flag: 🇹🇰
flag link: https://flagcdn.com/w320/tk.png
Capital: Fakaofo debugger eval code:8:33
Name: Uzbekistan
Flag: 🇺🇿
flag link: https://flagcdn.com/w320/uz.png
Capital: Tashkent debugger eval code:8:33
Name: Zimbabwe
Flag: 🇿🇼
flag link: https://flagcdn.com/w320/zw.png
Capital: Harare debugger eval code:8:33
Name: Togo
Flag: 🇹🇬
flag link: https://flagcdn.com/w320/tg.png
Capital: Lomé debugger eval code:8:33
Name: Central African Republic
Flag: 🇨🇫
flag link: https://flagcdn.com/w320/cf.png
Capital: Bangui debugger eval code:8:33
Name: United Arab Emirates
Flag: 🇦🇪
flag link: https://flagcdn.com/w320/ae.png
Capital: Abu Dhabi debugger eval code:8:33
Name: Zambia
Flag: 🇿🇲
flag link: https://flagcdn.com/w320/zm.png
Capital: Lusaka
  */
