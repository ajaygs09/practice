import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { RoutingComponent } from './routing/routing.component';
import { NewroutingComponent } from './newrouting/newrouting.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'reactiveForms', component: ReactiveFormsComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'routing', component: RoutingComponent },
  {path:'newrouting', component: NewroutingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
