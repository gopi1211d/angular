import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { IPLComponent } from './ipl/ipl.component';
import { WORLDCUPComponent } from './worldcup/worldcup.component';
import { TNPLComponent } from './tnpl/tnpl.component';
import { TeamComponent } from './ipl/team/team.component';
import { CSKComponent } from './ipl/team/csk/csk.component';
import { RCBComponent } from './ipl/team/rcb/rcb.component';
import { KKRComponent } from './ipl/team/kkr/kkr.component';

const routes: Routes = [
  {path:"ipl",component:IPLComponent,children:[
    {path: "csk", component:CSKComponent},
    {path: "rcb", component: RCBComponent},
    {path: "kkr", component: KKRComponent}
  ]
  },
  {path:"worldcup",component:WORLDCUPComponent},
  {path:"tnpl",component:TNPLComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
;