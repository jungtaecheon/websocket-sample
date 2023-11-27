# websocket-sample

## デモ

http://websocket-sample.ap-1.evennode.com/

## 1. 初回準備

```shell
$ npm install
```

## 2. サーバー起動

```shell
$ node server.js
```

## 3. クライアント（index.html）修正

（WebSocket の向き先）

### ローカルの場合

- 「WebSocket サーバー起動」時に出力されるログを参照
- 別 PC と通信しない場合は、`ws://localhost:{port番号}`で OK

（例）

```javascript
// WebSocketのセットアップ
const socket = new WebSocket("ws://192.168.0.14:3000");
```

### サーバーにデプロイする場合

- デプロイされたアプリの URL

（例）

```javascript
// WebSocketのセットアップ
const socket = new WebSocket("ws://websocket-sample.ap-1.evennode.com");
```
