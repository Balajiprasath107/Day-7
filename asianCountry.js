var link = "https://restcountries.com/v3.1/all"
var xml = new XMLHttpRequest()
xml.open("GET",link,true)
xml.send()
xml.onreadystatechange=function(){
  if(this.readyState===4 && this.status===200){
var data = (JSON.parse(this.response)) 
var asianCountries = data.filter(element =>element.region==="Asia" && element.continents.includes("Asia")).map(element=>element.name.common).sort()
console.log(asianCountries)

  }
}

/* output
  
Array(49) [ "Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei", "Cambodia", "China", "Georgia", … ]
​
0: "Afghanistan"
​
1: "Armenia"
​
2: "Azerbaijan"
​
3: "Bahrain"
​
4: "Bangladesh"
​
5: "Bhutan"
​
6: "Brunei"
​
7: "Cambodia"
​
8: "China"
​
9: "Georgia"
​
10: "Hong Kong"
​
11: "India"
​
12: "Indonesia"
​
13: "Iran"
​
14: "Iraq"
​
15: "Israel"
​
16: "Japan"
​
17: "Jordan"
​
18: "Kazakhstan"
​
19: "Kuwait"
​
20: "Kyrgyzstan"
​
21: "Laos"
​
22: "Lebanon"
​
23: "Macau"
​
24: "Malaysia"
​
25: "Maldives"
​
26: "Mongolia"
​
27: "Myanmar"
​
28: "Nepal"
​
29: "North Korea"
​
30: "Oman"
​
31: "Pakistan"
​
32: "Palestine"
​
33: "Philippines"
​
34: "Qatar"
​
35: "Saudi Arabia"
​
36: "Singapore"
​
37: "South Korea"
​
38: "Sri Lanka"
​
39: "Syria"
​
40: "Taiwan"
​
41: "Tajikistan"
​
42: "Thailand"
​
43: "Turkey"
​
44: "Turkmenistan"
​
45: "United Arab Emirates"
​
46: "Uzbekistan"
​
47: "Vietnam"
​
48: "Yemen"
​
length: 49
  */
