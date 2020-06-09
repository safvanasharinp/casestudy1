



//promise



  // function chkcontrol(e) {
  //   var total=0;
    //for(var i=0; i < check1.length; i++){
      // onchange(e)
      // {
      //   e.target
      // }
  //     console.log(e.target);
  //  if(check[i].checked){
  // total =total +1;}
  // if(total > 3){
  // alert("Please Select only three") 
  // check1.checked = false ;
  // return false;
  // }
  //   //}
  // //}
  //}
 
  var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj1 = JSON.parse(this.responseText);
    var res1=myObj1;
    var output='';
    
    for(var i=0;i<myObj1.length;i++){
        
       if((res1[i].completed)==true)
        {
            output+=`<input id="check1" " type="checkbox" checked="checked" disabled style="outline:solid red;">
            <label>${res1[i].title}</label><br><hr>`;
            
            
        }
       else{
      
        output+=`<input type="checkbox" onclick="f(this)"  ><label>${res1[i].title}</label><br><hr>`;
        
       }
       
  }
  //console.log(output+"<br>");
  document.getElementById("print").innerHTML = `${output}`;
  
 // document.getElementById("print").innerHTML =" <br>";
}
};
xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
xmlhttp.send();

var counter=0;

function f(val){

var promi=new Promise(function(resolve,reject){
 


   
    

    

      //var a=e.target;
      //console.log(a);
      //if ($("input[type=checkbox]").prop(":checked")){
      // if($(this).prop("checked"==true)){
        if (val.checked==true){
        counter=counter+1;
        console.log(counter)
        if(counter>=5){
        
        resolve("congrats!.your 5 tasks completed!");

      }
    }
    
      else{
        counter=counter-1;
        console.log(counter);
      
      }
//       setTimeout(()=>{
//         if(counter==5)
//         {
//           alert("you selected 5 tasks");
//         }
//         else{
//           alert("please select 5 tasks");
//         }
//       },1000)
//     })

//   });

 });
  promi.then(function(s){
    alert(s);
  });

}



  
      

  










// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://no-such-url'
//   ];
  
//   Promise.allSettled(urls.map(url => fetch(url)))
//     .then(results => { // (*)
//       results.forEach((result, num) => {
//         if (result.status == "fulfilled") {
//           alert(`${urls[num]}: ${result.value.status}`);
//         }
//         if (result.status == "rejected") {
//           alert(`${urls[num]}: ${result.reason}`);
//         }
//       });
   // });
