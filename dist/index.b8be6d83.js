const r=window.document.querySelectorAll("a"),a=document.querySelector("header");let e=a.getBoundingClientRect().height;const t=window.document.querySelectorAll(".current-year"),o=(new Date).getFullYear(),b=window.document.querySelector(".chart1").getContext("2d"),g=window.document.querySelector(".chart2").getContext("2d"),l=window.document.querySelector(".chart3").getContext("2d"),n=window.document.querySelector(".chart4").getContext("2d"),d=window.document.querySelector(".chart5").getContext("2d");new Chart(b,{type:"bar",data:{labels:["Jan","Feb","March","April","May","June"],datasets:[{label:"#Numbers Of Sales",data:[1,2,3,4,5,6],backgroundColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{scales:{y:{beginAtZero:!0}}}}),new Chart(g,{type:"line",data:{labels:["Jan","Feb","March","April","May","June"],datasets:[{label:"#Numbers Of Sales",data:[11,22,13,74,105,6],backgroundColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{scales:{y:{beginAtZero:!0}}}}),new Chart(l,{type:"doughnut",data:{labels:["Jan","Feb","March","April","May","June"],datasets:[{label:"#Numbers Of Sales",data:[11,22,13,74,105,6],backgroundColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{scales:{}}}),new Chart(n,{type:"radar",data:{labels:["Jan","Feb","March","April","May","June"],datasets:[{label:"#Numbers Of Sales",data:[11,22,13,74,105,6],backgroundColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{scales:{y:{beginAtZero:!0}}}}),new Chart(d,{type:"doughnut",data:{labels:["Jan","Feb","March","April","May","June"],datasets:[{label:"#Numbers Of Sales",data:[1,2,3,4,5,6],backgroundColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{scales:{}}});r.forEach((r=>{r.addEventListener("click",(t=>{const o=r.getAttribute("href");if(e=a.getBoundingClientRect().height,"#"===o)t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"});else if(1!==o.lenght&&o.startsWith("#")){t.preventDefault();const r=document.querySelector(o);window.scrollTo({top:""+(r.offsetTop-e),behavior:"smooth"})}window.setTimeout((()=>{r.blur()}),1e3)}))})),t.forEach((r=>{r.textContent=o}));
//# sourceMappingURL=index.b8be6d83.js.map
