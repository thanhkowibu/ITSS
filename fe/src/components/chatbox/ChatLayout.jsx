import { useState } from "react";
import ChatHeader from "./ChatHeader";
import GroupList from "./GroupList";
import ChatArea from "./ChatArea";
import { mockGroups, mockMessages, currentUser } from "../../data/mockData";

const ChatLayout = () => {
  const [selectedGroupId, setSelectedGroupId] = useState(1);
  const [messages, setMessages] = useState(mockMessages);

  const selectedGroup = mockGroups.find((g) => g.group_id === selectedGroupId);

  const handleSendMessage = (content) => {
    const newMessage = {
      message_id: Date.now(),
      group_id: selectedGroupId,
      sender_id: currentUser.user_id,
      content: content,
      created_at: new Date(),
      sender: currentUser,
    };

    setMessages((prev) => ({
      ...prev,
      [selectedGroupId]: [...(prev[selectedGroupId] || []), newMessage],
    }));
  };

  return (
    <div className="w-full h-screen flex flex-col bg-gray-50">
      <ChatHeader currentUser={currentUser} />

      <div className="flex-1 flex overflow-hidden">
        <GroupList
          groups={mockGroups}
          selectedGroupId={selectedGroupId}
          onSelectGroup={setSelectedGroupId}
        />

        <ChatArea
          group={selectedGroup}
          messages={messages[selectedGroupId] || []}
          currentUser={currentUser}
          onSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default ChatLayout;

