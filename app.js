var express                     = require("express"),
    app                        = express(),
    bodyParser                  = require("body-parser"),
//    expressSession              = require("express-session"),
//    methodOverride              = require("method-override"),
    mongoose                    = require("mongoose");
//    passport                    = require("passport"),
//    localPassport               = require("passport-local"),
//    flash                       = require("connect-flash");
    
var indexRoutes                 =require("./routes/index")

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
//app.use(methodOverride("_method"));
//app.use(flash());

//PASSPORT CONTFIGURATION
//app.use(require("express-session")({
//    secret: "Once again Danyelle is the greatest wife",
//    resave: false,
//    saveUninitialized: false
//}));

//PASSWORD && AuthO
//app.use(passport.initialize());
//app.use(passport.session());
//passport.use(new LocalPassport(User.authenticate()));
//passport.serializeUser(User.serializeUser());
//passport.deserializeUser(User.deserializeUser());
app.get("/", function(req, res){
    res.render("pages/home");
});

app.get("/home", function(req, res){
    res.render("pages/home");
});

//show login form
app.get("/login", function(req, res) {
    res.render("login");
});

//show  register form
app.get("/register", function(req, res) {
    res.render("register");
});

//add new post
app.get("/new", function(req, res) {
    res.render("pages/newPost");
})


app.listen(process.env.PORT, process.env.ID, function(req, res){
    console.log("Server Has Started.....");
});