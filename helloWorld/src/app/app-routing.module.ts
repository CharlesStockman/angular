import { NgModule} from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { Component1Component} from "./component1/component1.component";
import { Component2Component} from "./component2/component2.component";

const routes: Routes = [
  { path: 'path1', component: Component1Component },
  { path: 'test3', component: Component2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
export const  routingComponents = [ Component1Component, Component2Component]
