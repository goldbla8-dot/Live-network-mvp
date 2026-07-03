// Connect to the live backend engine
const socket = io();

document.addEventListener('DOMContentLoaded', () => {
    const sendBtn = document.getElementById('send-btn');
    const messageInput = document.getElementById('message-input');
    const chatMessages = document.getElementById('chat-messages');

    function appendMessage(text, sender = 'User') {
        const messageElement = document.createElement('div');
        messageElement.style.marginBottom = '8px';
        messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Keep view at latest message
    }

    // Capture and send message to the network
    sendBtn.addEventListener('click', () => {
        const messageText = messageInput.value.trim();
        if (messageText !== '') {
            // Push message to socket network
            socket.emit('chat message', messageText);
            messageInput.value = '';
        }
    });

    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') { sendBtn.click(); }
    });

    // Handle incoming messages sent by other users
    socket.on('chat message', (msg) => {
        appendMessage(msg, 'Network Peer');
    });
});
