import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
              authority: 'https://localhost:5002',
              redirectUrl: 'http://localhost:4200/auth-callback',
              postLogoutRedirectUri: 'http://localhost:4200/',
              clientId: 'pkce_client',
              scope: 'openid profile email api1 offline_access', // 'openid profile offline_access ' + your scopes
              responseType: 'code',
              silentRenew: true,
              useRefreshToken: true,
              renewTimeBeforeTokenExpiresInSeconds: 30,
          }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
