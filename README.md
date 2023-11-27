# websocket-sample

1. WebSocket サーバー起動

```
$ node server.js
```

2. WebSocket サーバーの向き先を修正
   「WebSocket サーバー起動」時に出力されるログを参照して Websocket の向き先を適宜修正する

```
      // WebSocketのセットアップ
      const socket = new WebSocket("ws://localhost:8080");
```

3. WebSocket クライアントに接続
