export interface Message {
  messages: Messages;
}

interface Messages {
  messageText: string;
  sentAt: Date;
  sentBy: string;
}
