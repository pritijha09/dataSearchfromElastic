import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElasticDataComponent } from './modules/elastic-data/elastic-data.component';


const routes: Routes = [{
  path : '',
 component: ElasticDataComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
