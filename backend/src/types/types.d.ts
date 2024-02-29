import { Express } from "express";

declare module "express-serve-static-core" {
	interface Request {
		user?: any;
		signedCookies?: any;
	}
	interface Response {
		user?: any;
		signedCookies?: any;
	}
}
