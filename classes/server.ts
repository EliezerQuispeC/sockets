//importando libreria express
import express from 'express';
import { SERVER_PORT } from '../globals/environment';
//creando la clase del servidor
export default class Server{
    //creando la variable del servidor express
    public app:express.Application;
    public port:Number;
    
    //constructor del servidor
    constructor(){
        this.app = express();//instancia del servidor
        this.port = SERVER_PORT;
    }
    //funcion para iniciar el servidor
    public start(callback:Function){
        this.app.listen(this.port,callback);//empieza a escuchar el puerto
    }
}
