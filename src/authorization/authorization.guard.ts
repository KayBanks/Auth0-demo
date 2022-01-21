import { ConfigService } from '@nestjs/config';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { promisify } from 'util';
import *as jwt from 'express-jwt'
import { expressJwtSecret } from 'jwks-rsa';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthorizationGuard implements CanActivate {

private audience : string;
private domain: string;

constructor(private configService:ConfigService){
this.audience=this.configService.get('AUTHO_AUDIENCE')
this.domain=this.configService.get('AUTHO_DOMAIN')
}
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
  const request = context.getArgByIndex(0)
  const response = context.getArgByIndex(1)
     const checkJWT = promisify(jwt(
   {secret:expressJwtSecret({
        cache:true,
        rateLimit:true,
        jwksRequestsPerMinute:4,
        jwksUri:`${this.audience}.well-known/jwks.json`
   }),
   audience:this.audience,
   issuer:this.domain,
   algorithm:"RSA256"
   }))
   
   try{
   await checkJWT(request,response);
   return true
   }
   catch(error){
   throw new UnauthorizedException(error)
   }
  }
  

}
