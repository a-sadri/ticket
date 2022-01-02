import moment from 'moment';

export const dateFormat = (timestapms) => {
  return moment(timestapms).format('YYYY MM DD hh:mm');
};
