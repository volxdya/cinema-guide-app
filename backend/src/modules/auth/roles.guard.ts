import { CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator';
import { JwtService } from '@nestjs/jwt';

export class RolesGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly reflector: Reflector,
    private readonly jwtService: JwtService
  ) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

    try {
        const roles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
          context.getHandler(),
          context.getClass()
        ]);

        if (!roles) {
          return true;
        }

        const req = context.switchToHttp().getRequest();

        const header = req.headers.authorization;
        const token = header.split(' ')[1];
        const bearer = header.split(' ')[0];

        if (
          bearer !== 'Bearer'
          || !token
        ) {
          throw new UnauthorizedException({message: 'No token provided.'});
        }

        const user = this.jwtService.verify(token);

        req.user = user;

        return user.roles.some(roles => roles.includes(roles.value));

    } catch (err) {
      throw new UnauthorizedException({message: 'нет доступа'});
    }
  }

}