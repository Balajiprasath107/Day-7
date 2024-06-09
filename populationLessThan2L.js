var link = "https://restcountries.com/v3.1/all"
var xml = new XMLHttpRequest()
xml.open("GET",link,true)
xml.send()
xml.onreadystatechange=function(){
  if(this.readyState===4 && this.status===200){
var data = (JSON.parse(this.response)) 
var asianCountries = data.filter(element =>element.population<200000).map(element=>[element.altSpellings,element.population]).sort()
console.log(asianCountries)

  }
}

/* Output
  Array(62) [ (2) […], (2) […], (2) […], (2) […], (2) […], (2) […], (2) […], (2) […], (2) […], (2) […], … ]
​
0: Array [ (3) […], 77265 ]
​​
0: Array(3) [ "AD", "Principality of Andorra", "Principat d'Andorra" ]
​​
1: 77265
​​
length: 2
​​
<prototype>: Array []
​
1: Array [ (1) […], 97928 ]
​
2: Array [ (1) […], 13452 ]
​
3: Array [ (1) […], 1000 ]
​
4: Array [ (4) […], 55197 ]
​
5: Array [ (1) […], 106766 ]
​
6: Array [ (4) […], 29458 ]
​
7: Array [ (1) […], 25987 ]
​
8: Array [ (4) […], 4255 ]
​
9: Array [ (4) […], 63903 ]
​
10: Array [ (3) […], 0 ]
​
11: Array [ (3) […], 544 ]
​
12: Array [ (2) […], 18100 ]
​
13: Array [ (6) […], 155014 ]
​
14: Array [ (2) […], 2072 ]
​
15: Array [ (4) […], 71991 ]
​
16: Array [ (3) […], 2563 ]
​
17: Array [ (3) […], 115021 ]
​
18: Array [ (3) […], 48865 ]
​
19: Array [ (1) […], 112519 ]
​
20: Array [ (3) […], 62999 ]
​
21: Array [ (1) […], 33691 ]
​
22: Array [ (2) […], 56367 ]
​
23: Array [ (2) […], 30 ]
​
24: Array [ (2) […], 168783 ]
​
25: Array [ (2) […], 0 ]
​
26: Array [ (4) […], 85032 ]
​
27: Array [ (1) […], 3000 ]
​
28: Array [ (4) […], 100800 ]
​
29: Array [ (3) […], 119446 ]
​
30: Array [ (2) […], 53192 ]
​
31: Array [ (1) […], 65720 ]
​
32: Array [ (1) […], 183629 ]
​
33: Array [ (3) […], 38137 ]
​
34: Array [ (3) […], 39244 ]
​
35: Array [ (4) […], 38659 ]
​
36: Array [ (3) […], 59194 ]
​
37: Array [ (3) […], 57557 ]
​
38: Array [ (1) […], 4922 ]
​
39: Array [ (3) […], 2302 ]
​
40: Array [ (5) […], 10834 ]
​
41: Array [ (1) […], 1470 ]
​
42: Array [ (2) […], 6069 ]
​
43: Array [ (3) […], 56 ]
​
44: Array [ (3) […], 18092 ]
​
45: Array [ (4) […], 98462 ]
​
46: Array [ (2) […], 2562 ]
​
47: Array [ (3) […], 33938 ]
​
48: Array [ (2) […], 40812 ]
​
49: Array [ (2) […], 53192 ]
​
50: Array [ (1) […], 38718 ]
​
51: Array [ (2) […], 400 ]
​
52: Array [ (1) […], 1411 ]
​
53: Array [ (1) […], 105697 ]
​
54: Array [ (1) […], 11792 ]
​
55: Array [ (1) […], 300 ]
​
56: Array [ (4) […], 451 ]
​
57: Array [ (1) […], 110947 ]
​
58: Array [ (2) […], 30237 ]
​
59: Array [ (2) […], 106290 ]
​
60: Array [ (3) […], 11750 ]
​
61: Array [ (3) […], 198410 ]
​
length: 62
​
<prototype>: Array []
  */
