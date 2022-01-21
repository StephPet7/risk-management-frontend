import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFileComponent } from './client-file/client-file.component';
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: "", component: AppComponent},
  {path:"ecosystem", component:AppComponent},
  {path:"client-selection", component:AppComponent},
  {path:"know-client", component:AppComponent},
  {path: 'client-file', component: ClientFileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
