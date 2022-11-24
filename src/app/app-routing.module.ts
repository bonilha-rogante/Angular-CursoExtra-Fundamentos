import { ListRenderComponent } from './components/list-render/list-render.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';import { EmitterComponent } from './components/emitter/emitter.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';

const routes: Routes = [
  {path:'', component: FirstComponentComponent},
  {path: 'if', component: IfRenderComponent},
  {path:'list', component: ListRenderComponent},
  {path:'parent', component: ParentDataComponent},
  {path:'two',component:TwoWayBindingComponent},
  {path:'emitter', component: EmitterComponent},
  {path:'diretiva', component: DiretivasComponent}
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
