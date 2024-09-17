import fs from 'fs/promises';
import http from 'http';
import path from 'path';
import url from 'url';

const PORT = process.env.PORT;

// Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);

const server = http.createServer(async(req, res) => {
    // res.setHeader('Content-Type', 'text/html')
    // res.statusCode = 404;
    // res.end('<h1>Hello World</h1>');

    // console.log(req.url);
    // console.log(req.method);
    // console.log(req);

    // res.writeHead(200, { 'Content-Type': 'text/html' })
    // res.end("Hello World")
    try {
        if (req.method === 'GET') {
            let filePath;
            if (req.url === '/') {
                // res.writeHead(200, { 'Content-Type': 'text/html' });
                // res.end('<h1>HomePage<h1/>');

                filePath = path.join(__dirname, './public', 'index.html');
            } else if (req.url === '/about') {
                // res.writeHead(200, { 'Content-Type': 'text/html' });
                // res.end('<h1>AboutPage<h1/>');

                filePath = path.join(__dirname, './public', 'about.html');
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>Not Found<h1/>');

                // throw new Error('Not Found');
            }

            const data = await fs.readFile(filePath);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        } else {
        throw new Error('Method not allowed');
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error');
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
