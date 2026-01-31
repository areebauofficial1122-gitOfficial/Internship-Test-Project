const table=document.getElementById('cropTable');


function render(data){
table.innerHTML='';
data.forEach(c=>{
table.innerHTML+=`<tr>
<td>${c.name}</td><td>${c.season}</td><td>${c.yield}</td>
<td>
<button class='btn btn-warning btn-sm' onclick='edit(${c.id})'>Edit</button>
<button class='btn btn-danger btn-sm' onclick='del(${c.id})'>Delete</button>
</td></tr>`;
});
localStorage.setItem('crops',JSON.stringify(crops));
}


function edit(id){
const c=crops.find(x=>x.id===id);
cropId.value=c.id; cropName.value=c.name; season.value=c.season; yield.value=c.yield;
}


function del(id){
crops=crops.filter(c=>c.id!==id);
render(crops);
}


cropForm.onsubmit=e=>{
e.preventDefault();
const id=cropId.value;
if(id){
const c=crops.find(x=>x.id==id);
c.name=cropName.value; c.season=season.value; c.yield=yield.value;
} else {crops.push({id:Date.now(),name:cropName.value,season:season.value,yield:yield.value});
}
cropForm.reset(); cropId.value='';
render(crops);
};


search.onkeyup=e=>render(crops.filter(c=>c.name.toLowerCase().includes(e.target.value.toLowerCase())));


render(crops);