document.getElementById('boton').onclick=function(){
    fetch('https://randomuser.me/api')
    .then(data=>data.json())
    .then(data=>{
        //console.log(data);
        document.getElementById('imagen').src=data.results[0].picture.large;
        document.getElementById('nombre').innerHTML=data.results[0].name.first;
    })
}