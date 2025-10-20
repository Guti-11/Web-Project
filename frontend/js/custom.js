var app = $.spapp({
  defaultView  : "#view_main",
  templateDir  : "./html/",
  pageNotFound : "error_404"
});


app.route({
  view : "view_main",
  load : "view_main.html",
  onCreate : ()=>{
    console.log("test!");
    
  }
});

app.route({
  view : "view_jerseys",
  load : "view_jerseys.html",
  onCreate : ()=>{
    console.log("test!");
    
  }
});

app.route({
  view : "view_basketballs",
  load : "view_basketballs.html",
  onCreate : ()=>{
    console.log("test!");
    
  }
});

app.route({
  view : "view_apparel",
  load : "view_apparel.html",
  onCreate : ()=>{
    console.log("test!");
    
  }
});

app.route({
  view : "view_shop",
  load : "view_shop.html",
  onCreate : ()=>{
    console.log("test!");
    
  }
});


app.route({
  view : "view_item",
  load : "view_item.html",
  onCreate : ()=>{
    console.log("test!");
    
  }
});


app.route({
  view : "view_signup",
  load : "view_signup.html",
  onCreate : ()=>{
    console.log("test!");
    
  }
});


app.route({
  view : "view_login",
  load : "view_login.html",
  onCreate : ()=>{
    console.log("test!");
    
  }
});

app.run();