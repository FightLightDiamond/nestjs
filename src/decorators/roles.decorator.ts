import { SetMetadata } from '@nestjs/common';

// export const Roles = (...args: string[]) => SetMetadata('roles', args);
export const Roles = (role: string) => SetMetadata('roles', role);
