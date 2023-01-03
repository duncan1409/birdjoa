const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    //app.use는 미들웨어를 사용할때, 사용한다
    // '/api'로  요청이 오면, proxy미들웨어를 실행해라.
    //스프링부트 포트는 8080, 노드는 5000번
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://localhost:8080",
            changeOrigin: true,
        })
    );
};
