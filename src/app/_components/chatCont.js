


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

    chatBox.appendChild(chatInput);
    chatBox.appendChild(sendButton);

    chatCont.appendChild(displayChat);
    chatCont.appendChild(chatBox);

}