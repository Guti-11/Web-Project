var app = $.spapp({
  defaultView: "#view_main",
  templateDir: "./html/",
  pageNotFound: "error_404"
});


app.route({
  view: "view_main",
  load: "view_main.html",
  onCreate: () => {
    ProductService.GetLebronProducts();

  }
});


app.route({
  view: "view_shop",
  load: "view_shop.html",
  onCreate: () => {
    ProductService.GetLebronProducts();

  }
});


app.route({
  view: "view_item",
  load: "view_item.html",
  onCreate: () => {

  }
});


app.route({
  view: "view_signup",
  load: "view_signup.html",
  onCreate: () => {

  }
});


app.route({
  view: "view_login",
  load: "view_login.html",
  onCreate: () => {

  }
});

app.run();