const request = require("request");
let bodyData = null;
const TestServer = {
    getNewsData(req, res) {
        if (bodyData) {
            return res.send(bodyData);
        }
        console.log(1);
        request({
            url: "http://v.juhe.cn/toutiao/index?type=top&key=3b3892bb62230e1a83ecfecd14507cf7",
            method: "GET"
        }, (data, body) => {
            bodyData = body;
            res.send(body);
        })
    }
}

module.exports = TestServer;