export interface Activity {
  id: string;
  userId: string | null;
  date: Date;
  message: string;
  priority: number;
}
