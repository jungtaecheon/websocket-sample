# websocket-sample

1. WebSocket サーバー起動

```
$ cd websocket-server
$ node server.js
```

2. WebSocket サーバーの向き先を修正
   `localhost`ではなく、WebSocket サーバー起動時に出力されるアドレスに修正する

```
      // WebSocketのセットアップ（立ち上げたnodeサーバーのIPアドレスに修正する）
      const socket = new WebSocket("ws://localhost:8080");
```

3. WebSocket クライアントに接続
