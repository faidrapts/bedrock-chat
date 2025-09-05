import type { Story, StoryDefault } from '@ladle/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ChatListDrawer from './Drawer';
import { BotListItem } from '../@types/bot';
import { ConversationMeta } from '../@types/conversation';

const conversations: ConversationMeta[] = [
  {
    id: '1',
    title: 'What is RAG?',
    createTime: new Date().getTime(),
    lastMessageId: '',
    model: 'claude-v3.5-sonnet',
    botId: '1',
  },
];
const bots: BotListItem[] = [
  {
    id: '1',
    title: 'Bot1',
    description: 'description',
    createTime: new Date(),
    lastUsedTime: new Date(),
    isStarred: false,
    owned: false,
    syncStatus: 'SUCCEEDED',
    available: true,
    sharedScope: 'private',
    sharedStatus: '',
    isEditable: false,
  },
  {
    id: '2',
    title: 'Bot2',
    description: 'description',
    createTime: new Date(),
    lastUsedTime: new Date(),
    isStarred: true,
    owned: true,
    syncStatus: 'SUCCEEDED',
    available: true,
    sharedScope: 'private',
    sharedStatus: '',
    isEditable: true,
  },
];

export default {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Story />} />
          <Route path="/bot/:botId" element={<Story />} />
          <Route path="/bot/explore" element={<Story />} />
          <Route path="/:conversationId" element={<Story />} />
          <Route path="/admin/shared-bot-analytics" element={<Story />} />
          <Route path="/admin/api-management" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
} satisfies StoryDefault;

export const Admin: Story = () => {
  return (
    <ChatListDrawer
      isAdmin={true}
      conversations={conversations}
      starredBots={bots.filter((bot) => bot.isStarred)}
      recentlyUsedUnstarredBots={bots.filter((bot) => !bot.isStarred)}
      updateConversationTitle={async () => {}}
      onSignOut={() => {}}
      onDeleteConversation={() => {}}
      onClearConversations={() => {}}
      onSelectLanguage={() => {}}
      onClickDrawerOptions={() => {}}
    />
  );
};

export const NonAdmin: Story = () => {
  return (
    <ChatListDrawer
      isAdmin={false}
      conversations={conversations}
      starredBots={bots.filter((bot) => bot.isStarred)}
      recentlyUsedUnstarredBots={bots.filter((bot) => !bot.isStarred)}
      updateConversationTitle={async () => {}}
      onSignOut={() => {}}
      onDeleteConversation={() => {}}
      onClearConversations={() => {}}
      onSelectLanguage={() => {}}
      onClickDrawerOptions={() => {}}
    />
  );
};
