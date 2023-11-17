import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../app/homepage/homepage.component';
import { AboutComponent } from '../app/about/about.component';
import {CoursesComponent } from '../app/courses/courses.component';
import {ContactComponent} from '../app/contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';



const routes: Routes = [
{ path: '', component: HomepageComponent},
{ path: 'homepage', component: HomepageComponent},
{ path: 'about', component: AboutComponent},
{ path: 'courses', component: CoursesComponent},
{ path: 'contact', component: ContactComponent},
{ path: 'projects', component: ProjectsComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
