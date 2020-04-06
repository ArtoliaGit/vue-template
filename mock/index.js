import Mock from 'mockjs';
import { login } from './login';

Mock.setup({
  timeout: 1000,
});

Mock.mock(/\/login/, 'get', login);

export default Mock;
