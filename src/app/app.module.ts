import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { CarouselComponent } from './homepage/carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    AboutComponent,
    CoursesComponent,
    ContactComponent,
    CarouselComponent,
    FooterComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
