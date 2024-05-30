import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBriefcase, faCircleExclamation, faClock, faIdCardClip, faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Job, jobData } from './job.model';
import { Router } from '@angular/router';
import { JobDetailsComponent } from "../job-details/job-details.component";

@Component({
    selector: 'app-job-listing',
    standalone: true, 
    templateUrl: './job-listing.component.html',
    styleUrls: ['./job-listing.component.scss'] 
    ,
    imports: [FontAwesomeModule, CommonModule, HttpClientModule, JobDetailsComponent]
})

export class JobListingComponent  {
  faSearch = faSearch;
  faLocation = faLocationDot;
  faClock = faClock;
  faPeople = faIdCardClip;
  faBriefcase = faBriefcase;
  faImportant = faCircleExclamation;

  jobs: Job[] = jobData;

  constructor(private router: Router) {}

  viewJobDetails(jobId: number) {
    this.router.navigate(['/job', jobId]); 
  }

  
}
