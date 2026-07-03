document.addEventListener('DOMContentLoaded', () => {
    const sendBtn = document.getElementById('send-btn');
    const messageInput = document.getElementById('message-input');
    const chatMessages = document.getElementById('chat-messages');

    // Function to append message to chat UI
    function appendMessage(text, sender = 'You') {
        const messageElement = document.createElement('div');
        messageElement.style.marginBottom = '8px';
        messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to bottom
    }

    // Event listener for sending messages
    sendBtn.addEventListener('click', () => {
        const messageText = messageInput.value.trim();
        if (messageText !== '') {
            appendMessage(messageText);
            messageInput.value = ''; // Clear input field
        }
    });

    // Allow pressing 'Enter' key to send
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendBtn.click();
        }
    });
});
