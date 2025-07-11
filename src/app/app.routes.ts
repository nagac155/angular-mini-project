import { Routes } from '@angular/router';
import { DogsComponent } from './dogs/dogs.component';
import { CatsComponent } from './harry-potter-spells/harry-potter-spells.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: DogsComponent },
    { path: 'dogs', component: DogsComponent },
    { path: 'spells', component: CatsComponent}, 
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },    
]; 
