import { DateTime, DateTimeUnit, Duration, Settings } from 'luxon';

Settings.defaultLocale = 'en-us';

type DateType = Date | string | number;

export type FormatPatterns =
  | 'yyyyMMdd'
  | 'dd MMM yyyy'
  | 'dd MMM yy, HH:mm'
  | 'MMM dd, yyyy, hh:mm a'
  | 'MMM-dd-yyyy-hh:mm:ss'
  | 'dd MMMM yy, HH:mm'
  | 'yyyy-MM-dd'
  | 'dd:hh:mm:ss'
  | 'hh:mm:ss'
  | 'MMM dd'
  | 'MMMM dd'
  | 'MMMM dd, yyyy'
  | 'MMMM'
  | 'MMMM yyyy'
  | 'EEEE, d LLL'
  | 'HH:mm'
  | 'dd/MM/yyyy'
  | 'MMM dd, yyyy'
  | 'mm:ss';

export const toDateTime = (date: DateType): DateTime => {
  if (typeof date === 'string') {
    return DateTime.fromISO(date);
  }
  if (typeof date === 'number') {
    return DateTime.fromSeconds(date);
  }

  return DateTime.fromJSDate(date);
};

export const now = () => DateTime.now();

export const startOf = (date: DateType, unit: DateTimeUnit): DateTime =>
  toDateTime(date).startOf(unit);

export const endOf = (date: DateType, unit: DateTimeUnit): DateTime => toDateTime(date).endOf(unit);

export const toISO = (dt: DateTime) => dt.toISO();

export const format = (dt?: DateType, pattern?: FormatPatterns): string => {
  const d = dt ? toDateTime(dt) : now();
  return d.toFormat(pattern ?? 'dd MMM yyyy');
};

export const formatNow = (pattern?: FormatPatterns): string =>
  now().toFormat(pattern ?? 'dd MMM yyyy');

export const diffDays = (d1: DateType, d2: DateType): number => {
  const first = toDateTime(d1);
  const second = toDateTime(d2);
  return first.diff(second, 'day').days;
};

export const diffDaysFromStartOfDay = (d1: DateType, d2: DateType): number => {
  const first = toDateTime(d1).startOf('day');
  const second = toDateTime(d2).startOf('day');
  return first.diff(second, 'day').days;
};
export const diffDaysNow = (date: DateType): number => {
  const dt = toDateTime(date);
  return Math.abs(dt.diffNow('day').days);
};

export const isPassedDate = (date: DateType): boolean => {
  const n = now();
  const dt = toDateTime(date);
  return n > dt;
};

export const formatDateFromNow = (date: DateType, pattern?: FormatPatterns): string => {
  const dateToCompare = toDateTime(date);
  const n = now();
  const diff = n.diff(dateToCompare, ['days', 'hours']);

  if (diff.hours <= 1 && diff.days === 0) {
    return dateToCompare.toRelative() ?? '';
  }

  if (diff.days <= 1 && dateToCompare.hasSame(n, 'day')) {
    return `Today, ${dateToCompare.toFormat('HH:mm')}`;
  }

  if (diff.days <= 2 && dateToCompare.hasSame(n.minus({ days: 1 }), 'day')) {
    return `Yesterday, ${dateToCompare.toFormat('HH:mm')}`;
  }

  return format(date, pattern ?? 'dd MMMM yy, HH:mm');
};

export const formatByDay = (date: DateType, pattern?: FormatPatterns) => {
  const dateToCompare = toDateTime(date);
  const n = now();

  if (dateToCompare.hasSame(n, 'day')) {
    return `Today`;
  }

  if (dateToCompare.hasSame(n.minus({ days: 1 }), 'day')) {
    return `Yesterday`;
  }

  return format(date, pattern ?? 'dd MMM yyyy');
};

export const formatIncrementally = (date: DateType, pattern?: FormatPatterns) => {
  const dateToCompare = toDateTime(date);
  const n = now();

  if (dateToCompare.hasSame(n, 'day')) {
    return `Today`;
  }

  if (dateToCompare.hasSame(n.minus({ days: 1 }), 'day')) {
    return `Yesterday`;
  }

  if (dateToCompare.hasSame(n, 'week')) {
    return `This week`;
  }

  if (dateToCompare.hasSame(n, 'month')) {
    return `This month`;
  }

  return format(date, pattern ?? 'dd MMM yyyy');
};

export const compareDates = (d1: DateType, d2: DateType, unit: 'day' | 'month'): boolean => {
  const first = toDateTime(d1);
  const second = toDateTime(d2);
  return first.hasSame(second, unit);
};

export const formatMillis = (millis: number) => {
  const d = Duration.fromMillis(millis);
  return d.toFormat('mm:ss');
};

export const formatSecondsToDate = (seconds: number, format?: FormatPatterns) => {
  const d = Duration.fromMillis(seconds * 1000);
  return d.toFormat(format ?? 'hh:mm:ss');
};

export const formatMillisToMinutes = (millis: number) => {
  const d = Duration.fromMillis(millis);
  return d.toFormat('mm:ss');
};

export const formatDataSeconds = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);

  if (months >= 1) {
    return months === 1 ? 'a month' : `${months} months`;
  }
  if (weeks >= 1) {
    return weeks === 1 ? 'a week' : `${weeks} weeks`;
  }
  if (days >= 1) {
    return days === 1 ? 'a day' : `${days} days`;
  }
  return '';
};

export const daysLeftText = (startDate: string, endDate: string): string => {
  const start = DateTime.fromISO(startDate);
  const end = DateTime.fromISO(endDate);
  const nowD = now();

  if (isPassedDate(endDate)) {
    return 'Ended';
  }

  const handleDiff = (diff: Duration): [number, number, number] => {
    if (diff.days > 0) {
      const d = Math.round(diff.days);
      return [d, 0, 0];
    }

    if (diff.hours > 0) {
      const h = Math.round(diff.hours);
      return [0, h, 0];
    }

    const m = Math.round(diff.minutes);
    return [0, 0, m];
  };

  const unitsLeftText = ([days, hours, min]: [number, number, number]) => {
    if (days) {
      return `${days} day${plural(days)} left`;
    }

    if (hours) {
      return `${hours} hour${plural(hours)} left`;
    }

    return `${min} minute${plural(min)} left`;
  };

  const startsInText = ([days, hours, min]: [number, number, number]) => {
    if (days) {
      return `starts in ${days} day${plural(days)}`;
    }

    if (hours) {
      return `starts in ${hours} hour${plural(hours)}`;
    }

    return `starts in ${min} min`;
  };

  const plural = (amount: number) => (amount <= 1 ? '' : 's');

  if (nowD < start) {
    const diff = start.diff(nowD, ['days', 'hours', 'minutes']);
    return startsInText(handleDiff(diff));
  }

  const diff = end.diff(nowD, ['days', 'hours', 'minutes']);
  return unitsLeftText(handleDiff(diff));
};

export const weeksInterval = (date: DateTime): string => {
  const dateFromStr = date.minus({ week: 1 });
  return `${dateFromStr.toFormat('MMM dd')} - ${date.toFormat('MMM dd')}`;
};

export const formatWithSecond = (second: number): string => {
  const s = Duration.fromDurationLike({ second });
  return s.toFormat('hh:mm:ss');
};

export const getCurrentWeekDayNumber = () => {
  const d = now();
  return d.weekday;
};
