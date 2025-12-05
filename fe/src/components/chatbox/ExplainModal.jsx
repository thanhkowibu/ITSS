const ExplainModal = ({ 
  open, 
  message, 
  sender,
  explanation, 
  loading, 
  onClose 
}) => {
  if (!open) return null;

  return (
    <div
      className="
        absolute inset-0 
        backdrop-blur-sm
        bg-white/10
        flex items-center justify-center 
        z-50
      "
    >
      {/* POPUP MAIN BOX */}
      <div className="relative bg-yellow-100 w-[600px] min-h-[280px] rounded-lg shadow-lg p-6">

        {/* Nút X đóng (hình vuông, X căn giữa) */}
        <button
          onClick={onClose}
          className="
            absolute top-3 right-3
            w-7 h-7 flex items-center justify-center
            text-white font-bold
            bg-red-500 rounded-md
            hover:bg-red-600 transition
            leading-none
          "
        >
          ×
        </button>

        {/* Avatar + Tên người gửi */}
        {sender && (
          <div className="flex items-center gap-3 mb-4">
            <img
              src={
                sender.avatar ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  sender.name
                )}&background=4F46E5&color=fff`
              }
              alt={sender.name}
              className="w-12 h-12 rounded-full border object-cover"
            />
            <div className="font-semibold text-gray-800 text-lg">
              {sender.name}
            </div>
          </div>
        )}

        {/* Tin nhắn gốc */}
        <div className="text-sm text-gray-700 border p-3 rounded-md bg-white mb-4">
          <strong className="text-gray-800">原文:</strong>
          <div className="mt-1 whitespace-pre-wrap">{message}</div>
        </div>

        {/* Giải thích AI */}
        <div className="min-h-[100px] text-sm text-gray-800 bg-white border p-3 rounded-md mb-4">
          {loading ? (
            <div className="text-gray-500">AI が考え中...</div>
          ) : (
            <div className="whitespace-pre-wrap">{explanation}</div>
          )}
        </div>

        {/* Nút 学習日記に追加 (KHÔNG đè lên UI) */}
        <div className="flex justify-end">
          <button
            className="
              bg-green-500 text-white px-4 py-2 
              rounded-md hover:bg-green-600 transition
            "
            onClick={() => console.log("TODO: Save knowledge")}
          >
            学習日記に追加
          </button>
        </div>

      </div>
    </div>
  );
};

export default ExplainModal;
