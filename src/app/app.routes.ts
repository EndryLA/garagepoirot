import { Routes } from '@angular/router';
import { TestComponent } from './pages/test/test.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { VehiclesPageComponent } from './pages/vehicles-page/vehicles-page.component';
import { VehicleDetailPageComponent } from './pages/vehicle-detail-page/vehicle-detail-page.component';
import { CarsCrudComponent } from './cruds/cars-crud/cars-crud.component';
import { NewCarComponent } from './cruds/new-car/new-car.component';
import { UpdateCarComponent } from './cruds/update-car/update-car.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ServicesCrudComponent } from './cruds/services-crud/services-crud.component';
import { UpdateServiceComponent } from './cruds/update-service/update-service.component';
import { NewServiceComponent } from './cruds/new-service/new-service.component';
import { UpdateScheduleComponent } from './cruds/update-schedule/update-schedule.component';
import { CommentsCrudComponent } from './cruds/comments-crud/comments-crud.component';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
    {path:'', component: HomePageComponent},
    {path:'services', component: ServicesPageComponent},
    {path:'vehicules', component: VehiclesPageComponent},
    {path:'contact', component: ContactPageComponent},
    {path:'connexion', component: LoginPageComponent},
    {path:'test', component: TestComponent},
    {path:'vehicules/:id', component:VehicleDetailPageComponent},


    {path:'admin', component:AdminPageComponent, canActivate: [adminGuard]},
    {path:'admin/vehicules', component:CarsCrudComponent, canActivate: [adminGuard]},
    {path:'admin/vehicules/creer', component:NewCarComponent, canActivate: [adminGuard]},
    {path:'admin/vehicules/modifier/:id', component:UpdateCarComponent, canActivate: [adminGuard]},

    {path:'admin/services', component:ServicesCrudComponent, canActivate: [adminGuard]},
    {path:'admin/services/creer', component:NewServiceComponent, canActivate: [adminGuard]},
    {path:'admin/services/modifier/:id', component:UpdateServiceComponent, canActivate: [adminGuard]},

    {path:'admin/schedules', component:UpdateScheduleComponent, canActivate: [adminGuard]},
    {path:'admin/comments', component:CommentsCrudComponent, canActivate: [adminGuard]},

];
