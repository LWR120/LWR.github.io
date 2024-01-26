var ws = new WebSocket('ws://127.0.0.1:8800')
ws.onopen = function () {
    ws.send('hi')
    console.log('snt')
}
ws.onmessage = function (e) {
    console.log('rcv')
    console.log(e.data)
}