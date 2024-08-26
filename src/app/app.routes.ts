import { Routes } from '@angular/router';
import { SocialIconsComponent } from './pages/social-icons/social-icons.component';
import { ListComponent } from './pages/list/list.component';

export const routes: Routes = [
    {
        path:'',redirectTo:'list',pathMatch:'full'
    },
    {
        path:'list',component:ListComponent
    },
    {
        path:'social-icons',loadComponent:()=>import('../app/pages/social-icons/social-icons.component').then((m)=>m.SocialIconsComponent)
    },
    {
        path:'stage',loadComponent:()=>import('../app/pages/stages/stages.component').then((m)=>m.StagesComponent)
    }
];
