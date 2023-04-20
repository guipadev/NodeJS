import dotenv from 'dotenv';
import Server from './models/server';

// Conf. dot.env
dotenv.config();

const server = new Server();

server.listen();

//export const name = 'Fercho';
//console.log(name);