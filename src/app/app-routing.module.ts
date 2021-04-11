import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeColumnsStepComponent } from './components/prime-columns-step/prime-columns-step.component';
import { PrimeDownloadStepComponent } from './components/prime-download-step/prime-download-step.component';
import { PrimeLapsStepComponent } from './components/prime-laps-step/prime-laps-step.component';
import { PrimeMultistepFormComponent } from './components/prime-multistep-form/prime-multistep-form.component';
import { PrimeUploadStepComponent } from './components/prime-upload-step/prime-upload-step.component';

const routes: Routes = [
    {
        path: '',
        component: PrimeMultistepFormComponent,
        children: [
            {
                path: '',
                redirectTo: 'prime-upload',
                pathMatch: 'full'
            },
            {
                path: 'prime-upload',
                component: PrimeUploadStepComponent
            },
            {
                path: 'prime-columns',
                component: PrimeColumnsStepComponent
            },
            {
                path: 'prime-laps',
                component: PrimeLapsStepComponent
            },
            {
                path: 'prime-download',
                component: PrimeDownloadStepComponent
            }
        ]
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
