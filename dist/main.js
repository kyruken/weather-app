(()=>{"use strict";let e;document.body.appendChild(function(){const e=document.createElement("header"),t=document.createElement("h1"),n=document.createElement("input"),a=document.createElement("button");return n.id="textinput",a.id="findcity",a.textContent="Find City",n.type="text",t.textContent="Weather App",e.appendChild(t),e.appendChild(n),e.appendChild(a),e}()),function(){let t=!1;!1===t&&(t=!0,console.log("swag"),document.getElementById("findcity").addEventListener("click",(async function(){let t=document.getElementById("textinput").value;e=await async function(e){let t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=89521003a7033fda93a71529572d268d`);try{return await t.json()}catch(e){console.log("Unable to fetch data")}}(t),console.log(e),document.body.appendChild(function(){const t=document.createElement("div"),n=document.createElement("h2"),a=document.createElement("h2"),d=document.createElement("h2"),c=document.createElement("h2");return function(t,n,a,d){const c=e;t.textContent=c.main.feels_like,n.textContent=c.main.temp,a.textContent=c.name,d.textContent=c.weather[0].main}(n,a,d,c),function(e,t,n,a,d){d.appendChild(e),d.appendChild(t),d.appendChild(n),d.appendChild(a)}(n,a,d,c,t),t}())})))}()})();