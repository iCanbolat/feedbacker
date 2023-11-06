import { LucideIcon } from 'lucide-react';

interface IUser {
  email: string;
  password: string;
  fullName: string;
  company?: any;
}

interface ICompany {
  name: string;
  staffs: IUser;
}

export interface IDropdownData {
  title: string;
  href?: string;
  icon?: LucideIcon;
  description?: string;
  type?: string;
}

type NotificationType = 'feedback' | 'invite';

export interface INotification {
  type: NotificationType;
  title: string;
  feedback?: any;
  description?: string;
  icon?: LucideIcon;
}

export enum FeedbackType {
  Bug = 'bug',
  Feature = 'feature',
  All = 'all',
}
