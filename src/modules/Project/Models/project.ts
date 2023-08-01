export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  topics: number[];
  participants: string[];
  owner_id: string;
  attachments: {
    messages: number;
    files: number;
  };
}

export interface CreateProjectRequest {
  name: string;
  description: string;
}
