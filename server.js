const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

let clients = [];

wss.on('connection', (ws) => {
    clients.push(ws);

    ws.on('message', (message) => {
        const messageString = message.toString(); 
        const [name, msg] = messageString.split(':');
        const messageAsParagraph = `<p>${name}:${msg}</p>`;
        clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(messageAsParagraph);  
            }
        });
    });

    ws.on('close', () => {
        clients = clients.filter(client => client !== ws);
    });
});

console.log('Servidor WebSocket rodando na porta 8080');