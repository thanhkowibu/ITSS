const ChatHeader = ({ currentUser }) => {
  return (
    <header className="bg-white border-b-2 border-gray-300 px-6 py-4 flex justify-between items-center shadow-sm">
      <div className="text-2xl font-bold tracking-[2px] text-gray-800">
        MAJIWAKARU
      </div>

      <div className="flex items-center gap-3 cursor-pointer px-3 py-2 rounded-full transition-colors hover:bg-sky-100">
        <img
          src={currentUser.avatar}
          alt={currentUser.name}
          className="w-9 h-9 rounded-full object-cover"
        />
        <span className="text-base font-medium text-gray-700">
          {currentUser.name}
        </span>
      </div>
    </header>
  );
};

export default ChatHeader;

