# websocket-sample

## デモ

https://websocket-sample.onrender.com

## 1. フロントの WebSocket 向き先を設定

### ローカル PC で node を起動する場合

- 自分の PC 内で Socket 通信する場合は、**修正不要**
- 同じ Wi-Fi に接続している別 PC と Socket 通信する場合は以下の修正が必要
  1. 「WebSocket サーバー起動」時に出力されるログを参照
  1. index.html の socket 向き先を修正

（例）

「WebSocket サーバー起動」コマンド実行時のログ

```shell
$ node server.js
WebSocket起動しました => Local IP Address : 192.168.0.14 / Port : 3000
Server listening at port 3000
```

index.html の修正

```javascript
// WebSocketのセットアップ
const socket = new WebSocket("ws://192.168.0.14:3000");
```

### サーバーにデプロイする場合

環境変数を指定

```
SOCKET_HOST=ws://{デプロイ先のドメイン}

// wss対応の場合はこっち
SOCKET_HOST=wss://{デプロイ先のドメイン}
```

## 2. 初回準備

```shell
$ npm install
```

## 3. サーバー起動

```shell
$ node server.js
```
