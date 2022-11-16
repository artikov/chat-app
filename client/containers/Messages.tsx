import { useSockets } from "../context/socket.context";

function MessagesContainer() {
  const { socket, messages, roomId, username } = useSockets();

  if (!roomId) {
    return <div />;
  }

  return <div></div>;
}

export default MessagesContainer;
