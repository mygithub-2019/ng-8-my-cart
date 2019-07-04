import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { map, take } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{

    constructor(
        private _authLoginServ: LoginService,
        private _router: Router ){}

    canActivate(
        route: ActivatedRouteSnapshot, 
        router: RouterStateSnapshot): 
        | boolean 
        | UrlTree
        | Promise<any> 
        | Observable<any>
        {
            return this._authLoginServ.user.
                pipe(
                    take(1),map(user => {
                    const isUserAuthenticated = !!user;
                    if(isUserAuthenticated){
                        return true;
                    }
                    return this._router.navigate(['/login']);
            }));
        }
    // canActivate(
    //     route: import("@angular/router").ActivatedRouteSnapshot, 
    //     state: import("@angular/router").RouterStateSnapshot): boolean | 
    //     import("@angular/router").UrlTree | 
    //     import("rxjs").Observable<boolean | 
    //     import("@angular/router").UrlTree> | 
    //     Promise<boolean | import("@angular/router").UrlTree> {
    //     throw new Error("Method not implemented.");
    // }
    
}