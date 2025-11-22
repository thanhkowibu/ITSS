// Mock Data cho Chat Application

// Mock Users
export const mockUsers = [
  {
    user_id: 1,
    name: "Yorifuji Kiyoshi",
    nationality: "Japanese",
    avatar:
      "https://emoji.slack-edge.com/T02QFU9TCTD/yorifuji-ss/32a31827ae4af247.png",
  },
  {
    user_id: 2,
    name: "Lê Sang Hiếc",
    nationality: "Vietnamese",
    avatar: "https://settingsoflegends.com/images/profiles/faker.webp",
  },
  {
    user_id: 3,
    name: "Ryo Kimura",
    nationality: "Japanese",
    avatar:
      "https://ca.slack-edge.com/T02QFU9TCTD-U02RG3RP57C-6820f0c8ad64-512",
  },
  {
    user_id: 4,
    name: "Nguyễn Hồng Diễm",
    nationality: "Vietnamese",
    avatar:
      "https://ca.slack-edge.com/T02QFU9TCTD-U02T9QMAFEX-9ae25c17c4e7-512",
  },
];

// Mock Chat Groups
export const mockGroups = [
  {
    group_id: 1,
    group_name: "ITSS 七つの大罪",
    icon_url:
      "https://ui-avatars.com/api/?name=ITSS&background=4F46E5&color=fff",
    members: [1, 2],
  },
  {
    group_id: 2,
    group_name: "ITSS K67 火2",
    icon_url:
      "https://ui-avatars.com/api/?name=ITSS+K67&background=EC4899&color=fff",
    members: [1, 3, 4],
  },
  {
    group_id: 3,
    group_name: "開発チーム",
    icon_url:
      "https://ui-avatars.com/api/?name=Dev+Team&background=10B981&color=fff",
    members: [2, 3, 4],
  },
  {
    group_id: 4,
    group_name: "ツボ草",
    icon_url:
      "https://ui-avatars.com/api/?name=Tsubo+Kusa&background=F59E0B&color=fff",
    members: [1, 2, 3],
  },
];

// Mock Messages
export const mockMessages = {
  1: [
    // Messages for group 1
    {
      message_id: 1,
      group_id: 1,
      sender_id: 1,
      content: "おはようございます。今日の会議は10時からですね。",
      created_at: new Date("2025-11-22T08:30:00"),
      sender: mockUsers[0],
    },
    {
      message_id: 2,
      group_id: 1,
      sender_id: 2,
      content: "はい、わかりました。資料を準備しています。",
      created_at: new Date("2025-11-22T08:35:00"),
      sender: mockUsers[1],
    },
    {
      message_id: 3,
      group_id: 1,
      sender_id: 1,
      content: "ありがとうございます。よろしくお願いします。",
      created_at: new Date("2025-11-22T08:40:00"),
      sender: mockUsers[0],
    },
  ],
  2: [
    // Messages for group 2
    {
      message_id: 4,
      group_id: 2,
      sender_id: 3,
      content: "新しいデザイン案を共有しました。",
      created_at: new Date("2025-11-22T09:00:00"),
      sender: mockUsers[2],
    },
    {
      message_id: 5,
      group_id: 2,
      sender_id: 4,
      content: "確認しました。とても良いデザインですね！",
      created_at: new Date("2025-11-22T09:15:00"),
      sender: mockUsers[3],
    },
  ],
  3: [
    // Messages for group 3
    {
      message_id: 6,
      group_id: 3,
      sender_id: 2,
      content: "APIの実装が完了しました。",
      created_at: new Date("2025-11-22T10:00:00"),
      sender: mockUsers[1],
    },
  ],
  4: [], // Empty group for testing
};

// Current logged in user (for testing)
export const currentUser = mockUsers[1]; // Nguyễn Văn A
