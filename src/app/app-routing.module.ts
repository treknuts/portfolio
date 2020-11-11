import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
];
@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
