import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {ProjectComponent} from "./project/project.component";
import {AboutComponent} from "./about/about.component";
import { IntroductionComponent } from './introduction/introduction.component';
import { InternshipComponent } from "./internship/internship/internship.component";

const routes: Routes = [
  {path: 'project', component: ProjectComponent},
  {path: 'about', component: AboutComponent},
  {path: 'introduction', component: IntroductionComponent},
  {path: 'internship', component: InternshipComponent},
  {path: '', redirectTo: '/introduction', pathMatch: 'full' },
  {path: '**', redirectTo: '/introduction', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProjectComponent, AboutComponent, IntroductionComponent]
