import dayjs from 'dayjs';
import { getUrlParams } from '../src/utils/tools';

export const login = req => {
  console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'));
  console.log(getUrlParams(req));
  return {
    code: 200,
    message: '登录成功',
    data: {
      userId: 1,
    },
  };
};
