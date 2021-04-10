function validate(){
  var mainMenu =document.body.querySelector(".mainmenu");
  
  var userInput =document.body.querySelector(".userinput");
  
  var nextMenu =document.body.querySelector(".nextmenu");
  
  var username =document.body.querySelector(".username").value;
    
  if(username==="coolStudent123"){
    mainMenu.innerHTML="";
    userInput.innerHTML="";
    writeStuff(pages[0].content);
    for (i=0; i<pages.length; i++){
     new pageMaker(pages[i]);
    }
  }else{
    mainMenu.innerHTML="Username Incorrect";
  }
  
}

document.body.querySelector(".validate").addEventListener("click", function(){
  validate();
})

var pages = [
  {
    title:"Home",
    content:"Home"
  },
  {
    title:"About",
    content:"Bong"
  },
  {
    title:"View",
    content:"N/A"
  }
]

var nextMenu =document.body.querySelector(".nextmenu");

var display =document.body.querySelector(".display");

var nav =document.body.querySelector(".nav");

var makenote =document.body.querySelector(".makenote");

var list =document.body.querySelector(".list");


function pageMaker(pg){
  this.button = document.createElement("button")
  this.button.addEventListener("click", function(){
    writeStuff(pg.content, pg.title);
  })
  this.button.innerHTML=pg.title;
  nav.appendChild(this.button);
}

function writeStuff(stuff, pg){
  if(pg!=="View"){
    display.innerHTML=stuff;
  }else{
    addNote();
    renderList();
  }
}

var checkNumber = /^[0-9]+$/;


function addNote(){
  display.innerHTML="";
  var makebtn = document.createElement("button");
  makebtn.innerHTML="Add Note";
  makebtn.addEventListener("click", function(){
    submit();
  })
  display.appendChild(makebtn);
  var makenote = document.createElement("input");
  makenote.placeholder="add note..."
  var makeimp = document.createElement("input");
  makeimp.placeholder="add importance..."
  function submit(){
    var text =(makenote).value;
    var imp =(makeimp).value;
    if(text.length<0){
      document.body.querySelector(".list2").innerHTML="";
      document.body.querySelector(".list2").innerHTML="Not enough characters in note."
     }else if (imp.length<0){
     document.body.querySelector(".list2").innerHTML="";
     document.body.querySelector(".list2").innerHTML="Not enough characters in importance."
     }else if(checkNumber.test(imp)&&text.length>0){
      document.body.querySelector(".list2").innerHTML=""
      list.push(text);
      list2.push(imp);
      renderList();
     }else if (checkNumber.test(imp)==false){
      document.body.querySelector(".list2").innerHTML="";      
      document.body.querySelector(".list2").innerHTML="Importance is not an integer."
     }else{
      document.body.querySelector(".list2").innerHTML="";      
      document.body.querySelector(".list2").innerHTML="Not enough characters in note."      
     }
  }
  display.appendChild(makenote);
  display.appendChild(makeimp);
  renderList();
}

var list = [" "];

var list2 = [" "];

function renderList(){
  var listEle = document.body.querySelector(".list");
  listEle.innerHTML="";
  
  for(var i=0; i<list.length; i++){
    var element = document.createElement("div");
    element.innerHTML=list[i] + " " + list2[i];
    listEle.appendChild(element);
  }
}


renderList();