import { useRef } from "react";
import EVENTS from "../config/events";
import { useSockets } from "../context/socket.context";

function MessagesContainer() {
  const { socket, messages, roomId, username, setMessages } = useSockets();
  const newMessageRef = useRef<any>(null);

  function handleSendMessage() {
    const message = newMessageRef.current.value;

    if (!String(message).trim) {
      return;
    }

    socket.emit(EVENTS.CLIENT.SEND_ROOM_MESSAGE, { roomId, message, username });

    const date = new Date();

    setMessages([
      ...messages,
      {
        username: "You",
        message,
        time: `${date.getHours()}:${date.getMinutes()}`,
      },
    ]);
  }

  if (!roomId) {
    return <div />;
  }

  return (
    <div>
      {messages?.map((message, index) => {
        return <p key={index}>{JSON.stringify(message)}</p>;
      })}

      <div>
        <textarea rows={1} placeholder="Write something" ref={newMessageRef} />

        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default MessagesContainer;
