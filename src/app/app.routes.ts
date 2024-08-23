import { Routes } from '@angular/router';
import { TestComponent } from './pages/test/test.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { VehiclePageComponent } from './pages/vehicle-page/vehicle-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const routes: Routes = [
    {path:'', component: HomePageComponent},
    {path:'services', component: ServicesPageComponent},
    {path:'vehicules', component: VehiclePageComponent},
    {path:'contact', component: ContactPageComponent},
    {path:'connexion', component: LoginPageComponent},
    {path:'test', component: TestComponent},
];
