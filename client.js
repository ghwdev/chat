const socket = new WebSocket('ws://localhost:8080');


document.getElementById('bt').onclick = () => {
  const n = document.getElementById('nm').value;
    document.getElementById("logi").style.display = 'none';
    document.getElementById("conversa").style.display = 'block';
    socket.send(n + ":");}

        document.getElementById('button').onclick = () => {
            const inputValue = document.getElementById('input').value;
            const n = document.getElementById('nm').value;
            socket.send(`${n}:${inputValue}`); 
        };

        socket.onopen = () => {
            console.log('Conectado ao servidor WebSocket');
        };

        socket.onmessage = (event) => {
            const message = event.data;
            const p = document.createElement('p');
            p.innerHTML = message; 
            document.getElementById('messages').appendChild(p);
        };

        socket.onclose = () => {
            console.log('Conexão WebSocket fechada');
        };

