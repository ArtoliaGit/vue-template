import http from '@/utils/http';

export const login = params => http.get({
  url: '/login',
  params,
});
