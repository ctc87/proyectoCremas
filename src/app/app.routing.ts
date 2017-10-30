import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {appComponentResultado} from './modulo_resultado/app.component.resultado';
import {appComponentPreguntas} from './modulo_preguntas/app.component.preguntas';

const appRoutes: Routes = [
    {
        path:'resultado',
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