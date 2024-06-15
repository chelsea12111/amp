export type Interaction = {
  createdAt: Date;
  id: string;
  message: string | null;
  response: string | null;
  timestamp: Date | null;
  updatedAt: Date;
  userId: string | null;
};
