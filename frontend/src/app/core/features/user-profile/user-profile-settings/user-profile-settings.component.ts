import { Component } from "@angular/core";
import { PaymentMethodsComponent } from "./payment-methods/payment-methods.component";
import { ContactInfoComponent } from "./contact-info/contact-info.component";

@Component({
	selector: "app-user-profile-settings",
	standalone: true,
	imports: [PaymentMethodsComponent, ContactInfoComponent],
	templateUrl: "./user-profile-settings.component.html",
	styleUrl: "./user-profile-settings.component.scss"
})
export class UserProfileSettingsComponent {}
