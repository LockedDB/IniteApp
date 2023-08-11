export interface Message {
  messages: Messages[];
}

export interface Messages {
  messageText: string;
  sentAt: Date;
  sentBy: string;
}
