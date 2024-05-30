import {  Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { JobListingComponent } from './pages/job-listing/job-listing.component';



export const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home", component: HomeComponent
    },
   
    {
        path: "job/:id", component: JobDetailsComponent
    },
    {
        path: "job-listing", component: JobListingComponent
    },
    {
        path: "**",
        component: HomeComponent
    }
];
