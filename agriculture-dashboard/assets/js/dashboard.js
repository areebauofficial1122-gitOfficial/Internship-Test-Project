const statsContainer = document.getElementById('stats');


dashboardStats.forEach(stat => {
statsContainer.innerHTML += `
<div class="col-md-3">
<div class="card text-center shadow-sm">
<div class="card-body">
<h6>${stat.title}</h6>
<h3>${stat.value}</h3>
</div>
</div>
</div>`;
});


drawBarChart();
drawPieChart();
drawLineChart()