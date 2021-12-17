import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ResumeComponent } from './resume/resume.component';
import { SocialMediaComponent } from './social-media/social-media.component';

const routes: Routes = [
  {path:"", component: HomeComponent, pathMatch:"full"},
  {path: "resume", component: ResumeComponent},
  {path: "contact", component: ContactComponent},
  {path:"social" , component:SocialMediaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
