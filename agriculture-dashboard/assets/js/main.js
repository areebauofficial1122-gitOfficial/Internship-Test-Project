const stats=document.getElementById('stats');
statsData.forEach(s=>{
stats.innerHTML+=`<div class='col-md-3'><div class='card text-center shadow-sm'><div class='card-body'><h6>${s.title}</h6><h3>${s.value}</h3></div></div></div>`;
});


function toggleSidebar(){
document.getElementById('sidebar').classList.toggle('hidden');
}