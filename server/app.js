const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/board", (req, res) => {
  res.send({ title: "노드 api 서버 update!" });
});

// 서버에서 vue 화면 보이게 하기
const path = require("path");
const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

// 에러처리 (server에는 없지만 vue에 있는 router로 새로고침 요청했을 시)
// 미들웨어는 보통 라우팅 위에 처리하지만, 에러처리는 예외로 이렇게 아래에 처리한다.
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "./public", "index.html")); // index.html에 vue가 있으니 즉, vue에 전달하는 것
});
