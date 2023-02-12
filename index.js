const http = require("http");
const fs = require("fs");

const hostname = "localhost";
const port = 8080;

const writeHTML = (filename,res) => {
    fs.readFile(filename, (err,data) => {
        if (err) throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end;
    })
}

const server = http.createServer((req,res) => {
    if (req.url === "/"){
        writeHTML("index.html",res);
    }else if (req.url==="/about"){
        writeHTML("about.html",res);
    }else if (req.url==="/contact-me"){
        writeHTML("contact-me.html",res);
    }else{
        writeHTML("404.html",res);
    }
})

server.listen(port,hostname, ()=> {
    console.log(`Server running at https://${hostname}:${port}/`)
})