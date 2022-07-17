(function() {
   let plotDiv = document.getElementById("plot");

   let informationDiv = document.getElementById("information");
   let timestampDiv = document.getElementById("timestamp");
   let coordinationDiv = document.getElementById("coordinates");

   let timestamp = Date.now();

   let draw = false;

   document.addEventListener("mousemove", (result) => {
       if (draw) {
           let element = document.createElement("div");
           element.className = "point";
           let subElement = document.createElement("span");
           subElement.className = "innerInformation";
           subElement.innerText = JSON.stringify({x : result.x, y : result.y, ts : Date.now() - timestamp})
           element.appendChild(subElement);
           element.style.left = result.x.toString()+"px";
           element.style.top = result.y.toString()+"px";
           plotDiv.appendChild(element);
       } else {
           try {
               informationDiv.style.display = "inherit";
               informationDiv.style.left = result.x.toString()+"px";
               informationDiv.style.top = (result.y+30).toString()+"px";
               let information = JSON.parse(result.target.childNodes[0].innerText);
               timestampDiv.innerText = information.ts;
               coordinationDiv.innerText = "x = " + information.x + ", y = " + information.y;
           } catch (e) {
               informationDiv.style.display = "none";
           }
       }
   });

   document.addEventListener("mousedown", () => {
       draw=true;
       informationDiv.style.display = "none";
   });
   document.addEventListener("mouseup", () => {
       draw=false;
       informationDiv.style.display = "none";
   });


})()