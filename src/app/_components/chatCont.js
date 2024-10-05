


export function chatCont()
{
    const chatCont=document.querySelector('.chatCont');


    const displayChat=document.createElement('div');
    displayChat.classList.add('displayChat');


    const chatBox=document.createElement('div');
    chatBox.classList.add('chatBox');

    const chatInput=document.createElement('input');
    chatInput.classList.add('chatInput');
    chatInput.placeholder='Type your message here';

    const sendButton=document.createElement('button');
    sendButton.id='sendButton';
    //add button icon

    const sendIcon=document.createElement('img');
    sendIcon.id='sendIcon';
    sendIcon.src='assets/sendIcon.png';
    sendIcon.alt='sendIcon';
    sendButton.appendChild(sendIcon);
    

    const attachmentButton=document.createElement('button');
    attachmentButton.id='attatchmentButton';

    const attachmentIcon=document.createElement('img');
    attachmentIcon.id='attachmentIcon';
    attachmentIcon.src='assets/attachmentIcon.png';
    attachmentIcon.alt='attachmentIcon';
    attachmentButton.appendChild(attachmentIcon);

    chatBox.appendChild(attachmentButton);
    chatBox.appendChild(chatInput);
    chatBox.appendChild(sendButton);

    chatCont.appendChild(displayChat);
    chatCont.appendChild(chatBox);


    inputHandler();
}

function inputHandler() {
    const chatInput = document.querySelector('.chatInput');
    const sendButton = document.querySelector('#sendButton');
    const attachmentButton = document.querySelector('#attachmentButton');
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*'; // Accept only images

    chatInput.addEventListener('input', () => {
        if (chatInput.value.length > 0) {
            sendButton.disabled = false;
        } else {
            sendButton.disabled = true;
        }
    });

    const sendMessage = () => {
        const message = chatInput.value;
        if (message.trim().length > 0) {
            processMessage(message);
            chatInput.value = ''; // Clear the input after sending
            sendButton.disabled = true; // Disable the button after sending
            scrollToBottom(document.querySelector('.displayChat'));
        }
    };

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    sendButton.addEventListener('click', () => {
        sendMessage();
    });

    attachmentButton.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            handleFileUpload(file);
        }
    });
}



function handleFileUpload(file) {
    // Placeholder for handling file upload
    console.log('File uploaded:', file);
    // Add your file handling logic here
}

function processMessage(message) {
    // Placeholder for future OpenAI processing
    console.log('Processing message:', message);
    // Add your OpenAI processing logic here
    displayResponse(message);
}


function displayResponse(message)
{
    console.log('response');
    const displayChat=document.querySelector('.displayChat');

    const userMessage=document.createElement('div');
    userMessage.classList.add('userMessage');
    userMessage.textContent=message;

    // placeholder for ai response
    const botMessage=document.createElement('div');
    botMessage.classList.add('botMessage');
    botMessage.textContent='Bot response';

    displayChat.appendChild(userMessage);
    displayChat.appendChild(botMessage);

}


function scrollToBottom(element) {
    element.scrollTop = element.scrollHeight;
}

