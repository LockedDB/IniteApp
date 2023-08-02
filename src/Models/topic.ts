export interface Topic {
  id?: string;
  projectId: string;
  topicName: string;
  members: string[];
  nAttachments: number;
  nMessages: number;
  createdAt: Date;
  createdBy: string;
  recentMessage: RecentMessage;
}

export interface RecentMessage {
  messageText: string;
  readBy: {
    sentAt: Date;
    sentBy: string;
  };
}

export interface CreateTopicRequestParams {
  projectId: string;
  topicName: string;
}
