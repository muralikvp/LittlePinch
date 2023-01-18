import { Routes } from "@angular/router";
import { BikeListComponent } from "./bike-list/bike-list.component";
import { BasicComponent } from "./content-projection/basic/basic.component";
import { Ex1Component } from "./directive/ex1/ex1.component";
import { Ex2Component } from "./dynamic/ex2/ex2.component";
import { HomeComponent } from "./life-cycle-hook/home/home.component";
import { ObservableExComponent } from "./observable/observable-ex/observable-ex.component";
import { PipeComponent } from "./pipes/pipe/pipe.component";
import { WEx1Component } from "./web-worker/w-ex1/w-ex1.component";


export const routes: Routes = [
    {
      path: 'contentProjection',
      component: BasicComponent,
    //   children: [
    //     { path: 'HelloChild', component: HiComponent },
    //     { path: 'Test', component: PageNotFoundComponent },
    //   ],
    },
    { path: 'pipes', component: PipeComponent },
    { path: 'lifecyleHook', component: HomeComponent },
    { path: 'BikeList', component: BikeListComponent },
    { path: 'Subject', component: ObservableExComponent },
    { path: 'Directives', component:Ex1Component },
    { path: 'Dynamic', component:Ex2Component },
    {path:'WebWorker',component:WEx1Component},
    { path: '', redirectTo: 'lifecyleHook', pathMatch: 'full' },
    { path: '**', redirectTo: 'PageNotFound' },
  ];
  