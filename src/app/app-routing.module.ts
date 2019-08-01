import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'List', loadChildren: './list/list.module#ListPageModule' },
  { path: 'header', loadChildren: './header/header.module#HeaderPageModule' },
  { path: 'Add', loadChildren: './add/add.module#AddPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
