import { WeekOfDay } from './CalendarUtil';
export interface ICalendarProps {
  onPress(date: Date): void;
  date: Date;
  locale: 'en' | 'ko' | 'ja';
  selectedDates?: Date[];
  weekStartsOn?: WeekOfDay;
}

export interface IWeekOfayItemProps {
  backgroundColor: string;
}

export interface IWeekOfDayItemTextProps {
  color: string;
}
