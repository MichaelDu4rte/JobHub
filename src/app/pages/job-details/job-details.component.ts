import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { Job, jobData } from '../job-listing/job.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent {
  faClose = faX

  job!: Job; 

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const jobId = +params['id'];
      this.job = jobData[jobId]; 
    });
  }

  goBackToHome(): void {
    this.router.navigate(['/']); 
  }
}
