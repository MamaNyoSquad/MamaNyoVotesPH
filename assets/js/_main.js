// root js

// js clock code adapted from w3schools.com/js/tryit.asp?filename=tryjs_timing_clock
// with some improvisations to convert to am/pm format. initially used in G.Mgr's streams.
function phtClock() {
  const tD = new Date(new Date().getTime() + diffOffs(8));
  let hh = tD.getHours(),
    mm = tD.getMinutes(),
    ss = tD.getSeconds();
  mm = addZero(mm);
  ss = addZero(ss);
  document.getElementById("phtClock").innerHTML = hr12(hh) + ":" + mm + ampm(hh) + " PHT";
  setTimeout(phtClock, 0);
}
function addZero(z) {
  if (z < 10) { z = "0" + z };
  return z;
}
function diffOffs(tz) {
  const dt = new Date();
  let tzDiff = tz * 60 + dt.getTimezoneOffset(),
    diff = tzDiff * 60 * 1000;
  return diff;
}
function hr12(hr) {
  const hrs = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
  for (let a = hr; a <= 23; a++) {
    if (hr <= 11) {
      return hr = hrs[a];
    } else if (hr <= 23) {
      ind = a - hrs.length;
      return hr = hrs[ind];
    }
  }
}
function ampm(ap) {
  const apD = ["am", "pm"];
  for (let p = ap; p <= 23; p++) {
    if (ap <= 11) {
      return ap = apD[0];
    } else if (ap <= 23) {
      return ap = apD[1];
    }
  }
}

// workaround: https://www.w3schools.com/xml/ajax_xmlfile.asp 
function fetchPartnerFeed() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { partnerFeed(this); }
  };
  xhttp.open("GET", "/MamaNyoVotesPH/assets/xml/partnerFeed.xml", true);
  xhttp.send();
}
function partnerFeed(xml) {
  let out = "",
   xmlDoc = xml.responseXML,
   t = xmlDoc.getElementsByTagName("NEWS");
  for (let n = 0; n < 4; n++) {
    out += `
      <div onclick="window.open('https://abs-cbn.com/${t[n].getElementsByTagName("URL")[0].childNodes[0].nodeValue}')">
        <img src="https://od2-image-api.abs-cbn.com/prod/${t[n].getElementsByTagName("IMAGE")[0].childNodes[0].nodeValue}" alt="">
        <div>
          <h3>${t[n].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue}</h3>
          <br>
          <p>${t[n].getElementsByTagName("DESCRIPTION")[0].childNodes[0].nodeValue}</p>
        </div>
      </div>
    `;
  }
  document.getElementById("partnerFeed").innerHTML = out;
}
function fetchCOMELECFeed() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { COMELECFeed(this); }
  };
  xhttp.open("GET", "/MamaNyoVotesPH/assets/xml/COMELECFeed.xml", true);
  xhttp.send();
}
function COMELECFeed(xml) {
  let out = "",
   xmlDoc = xml.responseXML,
   t = xmlDoc.getElementsByTagName("REMIND");
  for (let n = 0; n < 4; n++) {
    out += `
      <div onclick="window.open('${t[n].getElementsByTagName("URL")[0].childNodes[0].nodeValue}')">
        <img src="https://comelec.gov.ph/html-sys-uploads/${t[n].getElementsByTagName("IMAGE")[0].childNodes[0].nodeValue}" alt="">
        <div>
          <h3>${t[n].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue}</h3>
        </div>
      </div>
    `;
  }
  document.getElementById("COMELECFeed").innerHTML = out;
}