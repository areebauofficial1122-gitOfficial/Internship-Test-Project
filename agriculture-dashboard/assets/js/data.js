const statsData=[
{title:'Crops',value:3},
{title:'Farms',value:5},
{title:'Farmers',value:12},
{title:'Yield',value:'950 Tons'}
];


let crops=JSON.parse(localStorage.getItem('crops'))||[
{id:1,name:'Wheat',season:'Winter',yield:300},
{id:2,name:'Rice',season:'Summer',yield:400}
];