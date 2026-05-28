import api from './api.js';

export const sendChatMessage = async (message) => {
  if (!message || typeof message !== 'string') {
    throw new Error('Invalid message');
  }

  const response = await api.post('/chat/message', { message });
  return response.data?.data?.message || '';
};
