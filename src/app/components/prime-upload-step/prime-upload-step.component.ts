import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-prime-upload-step',
    templateUrl: './prime-upload-step.component.html',
    styleUrls: ['./prime-upload-step.component.scss']
})
export class PrimeUploadStepComponent implements OnInit {

    /**
     * A flag that states whether or not file content extracting is currently
     * taking place. This flag is used for displaying the loading indicator.
     */
    public isExtracting: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

    /**
     * A handler for 
     */
    public onUpload(files: any): void {
        console.log("Handling upload.");
        console.log(files);
    }

}
