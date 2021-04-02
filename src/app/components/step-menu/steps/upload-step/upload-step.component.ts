import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RaceService } from 'src/app/services/race.service';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-upload-step',
  templateUrl: './upload-step.component.html',
  styleUrls: ['./upload-step.component.css']
})
export class UploadStepComponent implements OnInit {
  isExtracting: boolean = false;

  constructor(public raceService: RaceService, private router: Router) { }

  ngOnInit(): void {
  }

  onUpload(event) {
    this.isExtracting = true;
    this.raceService.extractData(event.files[0]).then(data => {
      this.isExtracting = false;
      this.router.navigate(['columns-step']);
    });
  }

}
