import {RouterModule, Routes} from "@angular/router";
import {SplashComponent} from "./splash/splash.component";
import {UserService} from "./shared/services/user.service";
import {APP_BASE_HREF} from "@angular/common";


export const allAppComponents = [SplashComponent];

export const routes: Routes = [
	{path: "", component: SplashComponent}
];

export const appRoutingProviders: any[] = [
	UserService
];

export const routing = RouterModule.forRoot(routes);