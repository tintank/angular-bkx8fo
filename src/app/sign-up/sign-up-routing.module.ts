import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up.component';

const routes: Routes = [
  { path: '', component: SignUpComponent, data: { layout: {
        header: false,
        headerFixed: false,
        sidebar: false,
        sidebarFixed: false
      }
    }
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule { }
