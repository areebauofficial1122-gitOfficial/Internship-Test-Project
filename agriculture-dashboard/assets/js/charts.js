function drawChart(id,text){
const ctx=document.getElementById(id).getContext('2d');
ctx.clearRect(0,0,400,200);
ctx.font='16px Arial';
ctx.fillText(text,50,50);
}


drawChart('barChart','Bar Chart – Crop Yield');
drawChart('pieChart','Pie Chart – Crop Share');
drawChart('lineChart','Line Chart – Growth');