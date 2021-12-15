import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NavComponent } from "../nav/nav.component";
import { ResumeComponent } from "../resume/resume.component";

const routes: Routes = [
  {path: "", component: NavComponent},
  {path: 'resume', component: ResumeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
