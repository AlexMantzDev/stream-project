import { Routes } from "@angular/router";
import { RegisterComponent } from "./core/auth/register/register.component";
import { LandingComponent } from "./core/features/landing/landing.component";
import { LoginComponent } from "./core/auth/login/login.component";
import { VerifyComponent } from "./core/auth/verify/verify.component";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";

export const routes: Routes = [
	{ path: "", component: LandingComponent },

	{ path: "login", component: LoginComponent },
	{
		path: "register",
		component: RegisterComponent
	},
	{ path: "verify", component: VerifyComponent },

	{ path: "**", component: NotFoundComponent }
];
