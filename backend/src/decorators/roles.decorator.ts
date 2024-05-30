import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';

export const RolesDecorator = (...Roles: Array<string>) => SetMetadata(ROLES_KEY, Roles);