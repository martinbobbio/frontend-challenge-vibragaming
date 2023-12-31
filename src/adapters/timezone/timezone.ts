import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);

export interface adapterTimezoneInput {
  list: string[];
  current: string[];
}

export interface adapterTimezoneOutput {
  list: adapterTimezoneEntity[];
  current: adapterTimezoneEntity[];
}

export interface adapterTimezoneEntity {
  original: string;
  name: string;
  shortname: string;
  group: string;
  subgroup: string;
  date: string;
  time: string;
}

export const adaptTimezoneList = ({
  list,
  current,
}: {
  list: string[];
  current: string[];
}): adapterTimezoneOutput => {
  return {
    list: adaptItemProperties(list),
    current: orderByName(adaptItemProperties(current)),
  };
};

const adaptItemProperties = (values: string[]) =>
  values.map((timezone) => {
    return {
      original: timezone,
      name: getName(timezone),
      shortname: getShortname(timezone),
      group: getGroup(timezone),
      subgroup: getSubgroup(timezone),
      date: getDate(timezone),
      time: getTime(timezone),
    };
  });

const getGroup = (timezone: string) => {
  return timezone.split('/')[0];
};

const getName = (timezone: string) => {
  return (
    timezone.split('/')[1]
      ? timezone.replace(`${timezone.split('/')[0]}/`, '')
      : timezone
  )
    .replace('_', ' ')
    .replace('/', ' - ');
};

const getShortname = (timezone: string) => {
  const splitted = timezone.replace('_', ' ').split('/');
  if (splitted[2]) return splitted[2];
  else if (splitted[1]) return splitted[1];
  else return timezone;
};

const getSubgroup = (timezone: string) => {
  const splitted = timezone.replace('_', ' ').split('/');
  if (splitted[1] && splitted[2]) return splitted[1];
  else return '';
};

const getDate = (timezone: string) => {
  const date = dayjs().tz(timezone).format('DD/MM/YYYY');
  return date;
};

const getTime = (timezone: string) => {
  const date = dayjs().tz(timezone).format('h:mm A');
  return date;
};

const orderByName = (array: adapterTimezoneEntity[]) => {
  return array.sort((a, b) => (a.original > b.original ? 1 : -1));
};
