// server.js
const WebSocket = require("ws");
const os = require("os");
const ws_port = process.env.PORT || 8080;
const wss = new WebSocket.Server({ port: ws_port });

wss.on("connection", function connection(ws) {
  console.log("クライアントが接続しました");

  ws.on("message", function incoming(message) {
    console.log("受信メッセージ: %s", message);

    // メッセージを解析して適切な処理を行う（json文字列をobjectに変換）
    const data = JSON.parse(message);

    // メッセージを他のクライアントにブロードキャスト
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        // object形式
        const sendData = {
          type: data.type,
          id: data.id,
          color: data.color,
          position: data.position,
        };
        // 深い階層のオブジェクトが[Object]と表示されるのを防止するためJSON.stringifyの第3引数を利用する
        console.log("送信メッセージ:", JSON.stringify(sendData, null, 0));
        // object形式をjson形式に変換してクライアントに送信
        client.send(JSON.stringify(sendData));
      }
    });
  });

  ws.on("close", function close() {
    console.log("クライアントが切断しました");
  });
});

// ローカルIPアドレスを取得する関数
function getLocalIpAddress() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if ("IPv4" === iface.family && !iface.internal) {
        return iface.address;
      }
    }
  }
}

// IPアドレスを取得して出力
const ipAddress = getLocalIpAddress();
console.log(
  `WebSocket起動しました => Local IP Address : ${ipAddress} / Port : ${ws_port}`
);
