var ws = new WebSocket("wss://api.bitfinex.com/ws");
    ws.onopen = function() {
        ws.send(JSON.stringify({
            "event": "subscribe",
            "channel": "ticker",
            "pair": "BTCUSD"
        }));
    };
    ws.onmessage = function(msg) {
        var response = JSON.parse(msg.data);
        console.log(response);
        var hb = response[1];
        if (hb != "hb") {
            document.getElementById("ask").textContent = response[3];
            document.getElementById("last").textContent = response[7];
            document.getElementById("bid").textContent = response[1];
        }
    };