import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    // console.log('data', data)
    // console.log('request', request.query)

    return request.query.title + 'xxx';
  },
);
