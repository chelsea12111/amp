export type Task = {
  createdAt: Date;
  description: string | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
  userId: string | null;
};
