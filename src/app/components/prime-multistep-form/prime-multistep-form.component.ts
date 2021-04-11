import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-prime-multistep-form',
    templateUrl: './prime-multistep-form.component.html',
    styleUrls: ['./prime-multistep-form.component.scss']
})
export class PrimeMultistepFormComponent implements OnInit {

    public activeIndex: number = 0;

    /**
     * A list of steps for the step menu.
     */
    public stepItems: MenuItem[] = [
        {
            label: 'Upload',
            routerLink: 'prime-upload'
        },
        {
            label: 'Columns',
            routerLink: 'prime-columns'
        },
        {
            label: 'Laps',
            routerLink: 'prime-laps'
        },
        {
            label: 'Download',
            routerLink: 'prime-download'
        }
    ]


    constructor() { }

    ngOnInit(): void {
    }

}
