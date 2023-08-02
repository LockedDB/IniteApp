export interface Topic {
  id: string;
  projectId: string;
  members: string[];
  nAttachments: number;
  nMessages: number;
  createdAt: Date;
  createdBy: string;
  recentMessage: {
    messageText: string;
    readBy: {
      sentAt: Date;
      sentBy: string;
    };
  };
}
