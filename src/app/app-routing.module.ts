import { WireframeLayoutComponent } from './profile/containers/G-wireframe-layout/wireframe-layout.component';
import { InitialProfileComponent } from '@profile/containers/A-initial-profile/initial-profile.component';
import { RefactoredProfileComponent } from '@profile/containers/H-refactored-profile/refactored-profile.component';
import { LandingComponent } from '@landing/components/landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RevisedProfileComponent } from '@profile/containers/B-revised-profile/revised-profile.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full',
    data: { animation: 'landing' },
  },
  {
    path: 'profile/initial',
    component: InitialProfileComponent,
    pathMatch: 'full',
    // TODO add this property to trigger page animation
    //  data: { animation: 'initial' },
  },
  {
    path: 'profile/revised',
    component: RevisedProfileComponent,
    pathMatch: 'full',
    // TODO add this property to trigger page animation
    // data: { animation: 'revised' },
  },
  {
    path: 'profile/layout',
    component: WireframeLayoutComponent,
    pathMatch: 'full',
    // TODO add this property to trigger page animation
    // data: { animation: 'layout' },
  },
  {
    path: 'profile/refactor',
    component: RefactoredProfileComponent,
    pathMatch: 'full',
    data: { animation: 'refactor' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
