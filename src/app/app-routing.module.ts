import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { authGuard } from './auth.guard';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { authchildGuard } from './authchild.guard';
import { RegisterComponent } from './register/register.component';
import { FormArrayExampleComponent } from './form-array-example/form-array-example.component';
import { DynamicRowsComponent } from './dynamic-rows/dynamic-rows.component';

const routes: Routes = [
  { path : '', redirectTo : 'home', pathMatch : 'full'},
  { path : 'home' , component : DashboardComponent},
  { path : 'login' , component : LoginComponent},
  { path : 'register' , component : RegisterComponent},
  { path : 'form-array-example' , component : FormArrayExampleComponent},
  { path : 'dynamic-rows' , component : DynamicRowsComponent},
  { path : 'parent' ,
   children :[
    { path : '', component: ParentComponent},
    {
      path : '', canActivateChild : [authchildGuard],
      children : [
        { path : 'child1', component : Child1Component},
        { path : 'child2', component : Child2Component}
      ]
    }
   ]
  },
  // canActivate:[authGuard]
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
