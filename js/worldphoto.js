<!--
myWcnt = 29;                               
myWdat = new Array(     
  "pict/takuya2.jpg",  
  "pict/takuya4.jpg",
  "pict/takuya1.jpg",
  "pict/takuya8.JPG",
  "pict/takuya0.jpg",
  "pict/takuya3.jpg",
  "pict/takuya7.JPG",
  "pict/takuya13.jpg",
  "pict/takuya6.JPG",
  "pict/takuya5.JPG",
  "pict/takuya10.JPG",
  "pict/takuya9.JPG",
  "pict/takuya11.jpg",
  "pict/takuya12.jpg",
  "pict/takuya14.jpg",
  "pict/takuya15.jpg",
  "pict/takuya16.jpg",
  "pict/takuya17.jpg",
  "pict/takuya18.jpg",
  "pict/takuya19.jpg",
  "pict/takuya20.jpg",
  "pict/takuya21.jpg",
  "pict/takuya22.jpg",
  "pict/takuya23.jpg",
  "pict/takuya24.jpg",
  "pict/takuya25.jpg",
  "pict/takuya26.jpg",
  "pict/takuya27.jpg",
  "pict/takuya28.jpg"
);
mySdat = new Array(                       
  "PerCom2006@Pisa, Italy",
  "PerCom2006@Pisa, Italy",
  "WWW2006@Edinburgh, Scotland",
  "WWW2006@Edinburgh, Scotland",
  "The Student Day 2006@Tokyo, Japan",
  "Imagine Cup2006@Agra, India",
  "ICDE2007@Istanbul, Turkey",
  "ICDE2007@Istanbul, Turkey",
  "WWW2007@Banff, Canada",
  "SIGIR2008@Singapore",
  "SIGIR2008@Singapore",
  "SIGIR2009@Boston, USA",
  "Trend Tamago@TV Tokyo",
  "Pervasive2010@Helsinki, Finland",
  "Pervasive2010@Helsinki, Finland",
  "ACCV2010@Queenstown, New Zealand",
  "NTT R&D Forum 2011@The Nikkei",
  "Sviaz Expocomm2011@Moscow, Russia",
  "Pervasive/ISWC2011@San Francisco, USA",
  "PerCom2012@Lugano, Switzerland",
  "PerCom2012@Lugano, Switzerland",
  "Pervasive2012@Newcastle, UK",
  "UbiComp2013/ISWC2013@Zurich, Switzerland",
  "UbiComp2014@Seattle, USA",
  "Science technology seminar by Japan prize",
  "UbiComp2015/ISWC2015@Osaka, Japan",
  "UbiComp2015/ISWC2015@Osaka, Japan",
  "Yomiuri Shinbun",
  "MBS TV"
);
myRnd = Math.floor(Math.random()*myWcnt); // 0～(myWcnt-1)random
document.write("<center><table><tr><td><center><a onClick=\"prev();\"><img src=\"pict/allow1.gif\" title=\"previous image\" style=\"cursor:pointer;\"></a> <a onClick=\"next();\"><img id=\"myimg\" title=\"next image\" border=0 style=\"cursor:pointer;\"></a>  <a onClick=\"next();\"><img src=\"pict/allow2.gif\" title=\"next image\" style=\"cursor:pointer;\"></a>");
document.write("<br><font size=-2><span id=\"place\">loading...</span><font size=-4><span id=\"order\"> </span></font></font></center></td></tr></table></center>");
next=function(){myRnd++;myRnd%=myWcnt;show();};
prev=function(){myRnd--;myRnd+=myWcnt;myRnd%=myWcnt;show();};
show=function(){document.getElementById("myimg").src=myWdat[myRnd];document.getElementById("place").firstChild.nodeValue=mySdat[myRnd];document.getElementById("order").firstChild.nodeValue=" ("+(myRnd+1)+"/"+myWcnt+")";};
show();
// -->