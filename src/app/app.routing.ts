import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {appComponentResultado} from './modulo_resultado/app.component.resultado';
import {appComponentPreguntas} from './modulo_preguntas/app.component.preguntas';

const appRoutes: Routes = [
    {
        path:'resultado/:resp1/:resp2/:resp3/:resp4/:resp5/:subresp51/:subresp52/:subresp53',
        component: appComponentResultado 
    },
    {
        path:'encuesta',
        component: appComponentPreguntas
    },
    {
        path:'',
        component: appComponentPreguntas
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);