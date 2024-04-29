const http = require("http");
const { mainRouteController, defaultRouteController, gameRouteController, voteRouteController } = require("./controllers");

const server = http.createServer((req, res) => {
    // res.writeHead(200, {
    //     'Content-Type': 'text/html; charset=utf-8'
    // });

    // res.end('<h1>Скоро тут будет сервис рейтинга</h1>', 'utf8');

    const url = req.url;
    let data = '';

    switch(url) {
        case "/":
            mainRouteController(res, "/index.html", ".html");
            break;

        case "/game":
            gameRouteController(res);
            break;

        case "/vote":
            voteRouteController(req, res);
            break;

        default:
            defaultRouteController(res, url);
    }
});

server.listen(3005);