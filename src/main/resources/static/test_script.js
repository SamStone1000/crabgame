const myRequest = new Request("/responder", {mode : "no-cors"})
const socket = new WebSocket("ws://"+location.hostname+":8001")

const byteSize = str => new Blob([str]).size;

function testing() 
{
	fetch(myRequest).then(onFetch).then(onText);
}

function onFetch(response) {
	return response.text();
}

function onText(text) {
	document.getElementById("output").innerHTML = text;
}

function sendData(text) {
	//text = document.getElementById('streaminput').value;
	socket.send(byteSize(text));
	socket.send(text);
}