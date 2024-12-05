import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { GroupComponent } from './pages/group/group.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GroupDetailsComponent } from './pages/group-details/group-details.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { GroupCreateComponent } from './pages/group-create/group-create.component';
import { ContactCreateComponent } from './pages/contact-create/contact-create.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { GroupEditComponent } from './pages/group-edit/group-edit.component';

export const routes: Routes = [
    {   path: '',   
        redirectTo: 'home', 
        pathMatch: 'full' 
    },
    {
        path:"home",
        component: HomeComponent
    },
    {
        path:"group",
        component: GroupComponent
    },
    {
        path:"group/:id",
        component: GroupDetailsComponent
    },
    {
        path:"group/:id/edit",
        component: GroupEditComponent
    },
    {
        path:"group-create",
        component: GroupCreateComponent
    },
    {
        path:"contact",
        component: ContactComponent
    },
    {
        path:"contact/:id",
        component: ContactDetailsComponent
    },
    {
        path:"contact/:id/edit",
        component: ContactEditComponent
    },
    {
        path:"contact-create",
        component: ContactCreateComponent
    },
    { 
        path: '**', 
        component: PageNotFoundComponent
    },
];
