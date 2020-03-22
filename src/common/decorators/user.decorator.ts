import { createParamDecorator } from '@nestjs/common';
import { Request } from 'express';

export const User: () => ParameterDecorator = createParamDecorator<unknown, Request>(
  (data, req) => {
    return req.user;
  },
);
