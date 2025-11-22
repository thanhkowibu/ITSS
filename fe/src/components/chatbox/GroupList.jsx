const GroupList = ({ groups, selectedGroupId, onSelectGroup }) => {
  return (
    <aside className="w-[280px] bg-white border-r-2 border-gray-300 flex flex-col overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-200 bg-gray-100">
        <h3 className="text-base font-semibold text-gray-800">グループ</h3>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin">
        {groups.map((group) => (
          <div
            key={group.group_id}
            className={`
              flex items-center gap-3 px-5 py-4 cursor-pointer transition-colors border-b-2 border-gray-300
              hover:bg-sky-50
              ${
                selectedGroupId === group.group_id
                  ? "bg-sky-100 hover:bg-sky-100 border-l-4 border-l-blue-500"
                  : ""
              }
            `}
            onClick={() => onSelectGroup(group.group_id)}
          >
            <img
              src={group.icon_url}
              alt={group.group_name}
              className="w-12 h-12 rounded-full object-cover shrink-0"
            />
            <span
              className={`
                text-[15px] font-medium overflow-hidden text-ellipsis whitespace-nowrap
                ${
                  selectedGroupId === group.group_id
                    ? "text-blue-800 font-semibold"
                    : "text-gray-700"
                }
              `}
            >
              {group.group_name}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default GroupList;

