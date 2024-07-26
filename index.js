
var arr = [
    {name:"MR Atif" , img:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" , state:"Stranger"}
,    {name:"Miss Ellien"  , img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" , state:"Stranger"},

    {name:"Mr Sharma" , img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" , state:"Stranger"},
]


 

      function print(){
        var clutter = '' ;
        arr.forEach( (val , ind)=>{
            clutter += `       <div class="card1">
                    <div id="img">
                    <img src ="${val.img}">
                    </div>
                 <h2>${val.name}</h2>
                 <h5>${val.state}</h5>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, magnam.</p>
                 <button id = "${ind}">Add Friend</button>
                </div>`
           })
           document.querySelector("#main").innerHTML =clutter ;
      }
      print();

 

   document.querySelector("#main").addEventListener("click" , function(e){
        ;  arr[ e.target.id ].state ="Friend";
         
          print();
   })

            
