var link = "https://restcountries.com/v3.1/all"
var xml = new XMLHttpRequest()
xml.open("GET",link,true)
xml.send()
xml.onreadystatechange=function(){
  if(this.readyState===4 && this.status===200){
var data = (JSON.parse(this.response)) 
var asianCountries = data.filter(element =>element.region==="Asia" && element.continents.includes("Asia")).map(element=>element.altSpellings).sort()
console.log(asianCountries)

  }
}

/* output
  Array(49) [ (3) […], (2) […], (4) […], (3) […], (3) […], (3) […], (4) […], (2) […], (7) […], (2) […], … ]
​
0: Array(3) [ "AE", "UAE", "Emirates" ]
​
1: Array [ "AF", "Afġānistān" ]
​
2: Array(4) [ "AM", "Hayastan", "Republic of Armenia", … ]
​
3: Array(3) [ "AZ", "Republic of Azerbaijan", "Azərbaycan Respublikası" ]
​
4: Array(3) [ "BD", "People's Republic of Bangladesh", "Gônôprôjatôntri Bangladesh" ]
​
5: Array(3) [ "BH", "Kingdom of Bahrain", "Mamlakat al-Baḥrayn" ]
​
6: Array(4) [ "BN", "Brunei Darussalam", "Nation of Brunei", … ]
​
7: Array [ "BT", "Kingdom of Bhutan" ]
​
8: Array(7) [ "CN", "Zhōngguó", "Zhongguo", … ]
​
9: Array [ "GE", "Sakartvelo" ]
​
10: Array [ "HK" ]
​
11: Array(3) [ "ID", "Republic of Indonesia", "Republik Indonesia" ]
​
12: Array(3) [ "IL", "State of Israel", "Medīnat Yisrā'el" ]
​
13: Array(5) [ "IN", "Bhārat", "Republic of India", … ]
​
14: Array(3) [ "IQ", "Republic of Iraq", "Jumhūriyyat al-‘Irāq" ]
​
15: Array(4) [ "IR", "Islamic Republic of Iran", "Iran, Islamic Republic of", … ]
​
16: Array(3) [ "JO", "Hashemite Kingdom of Jordan", "al-Mamlakah al-Urdunīyah al-Hāshimīyah" ]
​
17: Array(3) [ "JP", "Nippon", "Nihon" ]
​
18: Array(5) [ "KG", "Киргизия", "Kyrgyz Republic", … ]
​
19: Array [ "KH", "Kingdom of Cambodia" ]
​
20: Array(8) [ "KP", "Democratic People's Republic of Korea", "DPRK", … ]
​
21: Array(5) [ "KR", "Korea, Republic of", "Republic of Korea", … ]
​
22: Array(3) [ "KW", "State of Kuwait", "Dawlat al-Kuwait" ]
​
23: Array(8) [ "KZ", "Qazaqstan", "Казахстан", … ]
​
24: Array(4) [ "LA", "Lao", "Lao People's Democratic Republic", … ]
​
25: Array(3) [ "LB", "Lebanese Republic", "Al-Jumhūrīyah Al-Libnānīyah" ]
​
26: Array(3) [ "LK", "ilaṅkai", "Democratic Socialist Republic of Sri Lanka" ]
​
27: Array(4) [ "MM", "Burma", "Republic of the Union of Myanmar", … ]
​
28: Array [ "MN" ]
​
29: Array(6) [ "MO", "澳门", "Macao", … ]
​
30: Array(4) [ "MV", "Maldive Islands", "Republic of the Maldives", … ]
​
31: Array [ "MY" ]
​
32: Array(3) [ "NP", "Federal Democratic Republic of Nepal", "Loktāntrik Ganatantra Nepāl" ]
​
33: Array(3) [ "OM", "Sultanate of Oman", "Salṭanat ʻUmān" ]
​
34: Array(3) [ "PH", "Republic of the Philippines", "Repúblika ng Pilipinas" ]
​
35: Array(4) [ "PK", "Pākistān", "Islamic Republic of Pakistan", … ]
​
36: Array(4) [ "PS", "Palestine, State of", "State of Palestine", … ]
​​
0: "PS"
​​
1: "Palestine, State of"
​​
2: "State of Palestine"
​​
3: "Dawlat Filasṭin"
​​
length: 4
​​
<prototype>: Array []
​
37: Array(3) [ "QA", "State of Qatar", "Dawlat Qaṭar" ]
​
38: Array(4) [ "SG", "Singapura", "Republik Singapura", … ]
​
39: Array(3) [ "SY", "Syrian Arab Republic", "Al-Jumhūrīyah Al-ʻArabīyah As-Sūrīyah" ]
​
40: Array(4) [ "Saudi", "SA", "Kingdom of Saudi Arabia", … ]
​
41: Array(6) [ "TH", "Prathet", "Thai", … ]
​
42: Array(5) [ "TJ", "Toçikiston", "Republic of Tajikistan", … ]
​
43: Array [ "TM" ]
​
44: Array(4) [ "TR", "Turkiye", "Republic of Turkey", … ]
​
45: Array(6) [ "TW", "Táiwān", "Republic of China", … ]
​
46: Array(4) [ "UZ", "Republic of Uzbekistan", "O‘zbekiston Respublikasi", … ]
​
47: Array(4) [ "VN", "Socialist Republic of Vietnam", "Cộng hòa Xã hội chủ nghĩa Việt Nam", … ]
​
48: Array(3) [ "YE", "Yemeni Republic", "al-Jumhūriyyah al-Yamaniyyah" ]
​
length: 49
​
<prototype>: Array []
  */
