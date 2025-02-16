import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AppDiagnosticsHomeComponent } from './components/home/diagnostics-home.component';
import { AppDiagnosticsIndexComponent } from './components/index/diagnostics-index.component';
import { AppDiagnosticsInfoComponent } from './components/info/diagnostics-info.component';

const routes: Route[] = [
  {
    path: '',
    component: AppDiagnosticsIndexComponent,
    children: [
      {
        path: '',
        component: AppDiagnosticsHomeComponent,
      },
      {
        path: 'info',
        component: AppDiagnosticsInfoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppClientDiagnosticsRoutingModule {}
