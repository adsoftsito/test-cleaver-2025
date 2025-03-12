import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestUvWebListComponent } from './components/test-uv-web-list/test-uv-web-list.component';
import { AddTestUvWebComponent } from './components/add-test-uv-web/add-test-uv-web.component';

const routes: Routes = [
//  { path: '', redirectTo: 'add', pathMatch: 'full' },
 // { path: 'add', component: AddTestUvWebComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
