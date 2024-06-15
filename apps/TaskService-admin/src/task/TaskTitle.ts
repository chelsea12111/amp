import { Task as TTask } from "../api/task/Task";

export const TASK_TITLE_FIELD = "userId";

export const TaskTitle = (record: TTask): string => {
  return record.userId?.toString() || String(record.id);
};
