import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

const ChatArea = ({ group, messages, currentUser, onSendMessage }) => {
  if (!group) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-gray-400 text-lg">グループを選択してください</div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-gray-50 overflow-hidden">
      <div className="bg-gray-300 px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">
          {group.group_name}
        </h2>
      </div>

      <MessageList messages={messages} currentUser={currentUser} />

      <MessageInput onSendMessage={onSendMessage} />
    </div>
  );
};

export default ChatArea;

