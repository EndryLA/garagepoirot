import { Routes } from '@angular/router';
import { TestComponent } from './pages/test/test.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { VehiclesPageComponent } from './pages/vehicles-page/vehicles-page.component';
import { VehicleDetailPageComponent } from './pages/vehicle-detail-page/vehicle-detail-page.component';

export const routes: Routes = [
    {path:'', component: HomePageComponent},
    {path:'services', component: ServicesPageComponent},
    {path:'vehicules', component: VehiclesPageComponent},
    {path:'contact', component: ContactPageComponent},
    {path:'connexion', component: LoginPageComponent},
    {path:'test', component: TestComponent},
    {path:'vehicules/:id', component:VehicleDetailPageComponent}
];
