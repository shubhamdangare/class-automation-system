import { Request, Response } from 'express-serve-static-core';
import * as path from 'path';

const express = require('express');

const allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
  ];

class Server {
    public app: any;
    public port = 4200;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        this.app = express();

        this.app.get('/api', (req, res) => res.json(
            {
                application: 'Hello World'
            }
        ));

        this.app.get('*', (req: Request, res: Response) => {
            if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
                res.sendFile(path.resolve(`dist/MarvellousInfosystems/${req.url}`));
            } else {
                res.sendFile(path.resolve('dist/MarvellousInfosystems/index.html'));
            }
        });

        this.app.listen(this.port, () => console.log(`http server started at port ${this.port}`));
    }
}

const server = Server.bootstrap();
export default server.app;
