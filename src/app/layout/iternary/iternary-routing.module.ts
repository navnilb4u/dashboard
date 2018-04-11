import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IternaryComponent } from './iternary.component';

const routes: Routes = [
    {
        path: '',
        component: IternaryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IternaryRoutingModule {}
