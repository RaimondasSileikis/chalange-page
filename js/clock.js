
let tday=["Sekmadienis","Pirmadienis","Antradienis","Treciadienis","Ketvirtadienis","Penktadienis","Sestadienis"];
let tmonth=["Sausio","Vasario","Kovo","Balandzio","Geguzes","Birzelio","Liepos","Rugpjucio","Rugsejo","Spalio","Lapkricio","Gruodzio"];

function GetClock(){
let d=new Date();
let nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
let nhour=d.getHours(),nmin=d.getMinutes();
if(nmin<=9) nmin="0"+nmin

const clocktext=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+"";
const time=""+nhour+":"+nmin+"";

document.getElementById('clockbox').innerHTML=clocktext;
document.getElementById('time').innerHTML=time;
}


GetClock();
setInterval(GetClock,1000);

