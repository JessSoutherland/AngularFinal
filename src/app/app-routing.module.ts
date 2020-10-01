import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';

const routes: Routes = [
  {path: "", redirectTo:"list", pathMatch: "full"},
  {path: "list", component: TaskListComponent},
  {path: "add", component: TaskAddComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
