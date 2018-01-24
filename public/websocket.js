const w = new WebSocket("wss://real.okcoin.com:10440/websocket")

w.onmessage = (msg) => console.log(JSON.parse(msg.data)[0].data.last)

let msg = JSON.stringify({'event':'addChannel','channel':'ok_sub_spot_btc_usd_ticker'})

w.onopen = () => w.send(msg)