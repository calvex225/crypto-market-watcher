wss://api.bitfinex.com/ws/2

const wss = new WebSocket('wss://api.bitfinex.com/ws/2')
wss.onmessage = (msg) => console.log(msg.data)
wss.onopen = () => {
  // API keys setup here (See "Authenticated Channels")
}
const crypto = require('crypto-js')

const apiKey = '...'
const apiSecret = '...'

const authNonce = Date.now() * 1000
const authPayload = 'AUTH' + authNonce
const authSig = crypto
  .HmacSHA384(authPayload, apiSecret)
  .toString(crypto.enc.Hex)

const payload = {
  apiKey,
  authSig,
  authNonce,
  authPayload,
  event: 'auth'
}

wss.send(JSON.stringify(payload))

const payload = {
    event: 'auth', 
    // ... 
    filter: [
      'trading', //orders, positions, trades 
      'funding', //offers, credits, loans, funding trades
      'wallet', //wallet 
      'algo', //algorithmic orders
      'balance' //balance (tradable balance, ...)
    ]
  }

// request
{
    event: "auth",
    apiKey: api_key,
    authSig: signature,
    authPayload: payload,
    authNonce: +authNonce,
    calc: 1
}

// response
{ event: 'auth',
  status: 'OK',
  chanId: 0,
  userId: 269312,
  caps: '{"orders": {"read": "1", "write": "0"}, "account": {"read": "1", "write": "0"}, "funding": {"read": "1", "write": "1"}, "history": {"read": "1", "write": "0"}, "wallets": {"read": "1", "write": "1"}, "withdraw": {"read": "0", "write": "1"}, "positions": {"read": "1", "write": "1"}}' }

// response-failure
{  
   "event":"auth",
   "status":"FAIL",
   "chanId":0,
   "code":"<ERROR_CODE>"
}