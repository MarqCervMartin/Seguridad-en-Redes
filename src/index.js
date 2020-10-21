const express =require('express');
//inicializar
const app=express();
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session'); 
//config
app.set('port',process.env.PORT ||3000);
app.set('views',path.join(__dirname,'views')); //carpeta view donde se encuientra
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));
app.set('view engine','.hbs');
//funciones antes de server o rutas
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}))
//variables globales

//rutas
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

//archivos estaticos


//iniciar server (ya escucha) 
app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
});