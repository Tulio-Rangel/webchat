const socket = io();

const send = document.querySelector("#send-message");
const allMessages = document.querySelector("#all-messages");

send.addEvenetListener("click", () => {
  const message = document.querySelector("#message");

  socket.emit("message", message.value);

  message.value = "";
});

socket.on("message", ({ user, message }) => {
  const msg = document.createRange().createContextualFragment(`
    <div class="message">
      <div class="iamge-container">
        <img src="/images/michi.jpeg" alt="foto de un gato" />
      </div>

      <div class="message-body">
        <div class="user-info">
          <span class="username">${user}</span>
          <span class="time">Hace 1 segundo</span>
        </div>

        <p>${message}</p>
      </div>
    </div>
  `);

  allMessages.append(msg);
});
