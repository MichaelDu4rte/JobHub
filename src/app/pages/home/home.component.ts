import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { faBriefcase, faCircleExclamation, faClock, faIdCardClip, faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JobListingComponent } from '../job-listing/job-listing.component';
import { JobDetailsComponent } from '../job-details/job-details.component';
import { HttpClientModule } from '@angular/common/http';
import { Job, jobData } from '../job-listing/job.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FontAwesomeModule, JobListingComponent, JobDetailsComponent, HttpClientModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

})
export class HomeComponent {
  faSearch = faSearch;
  faLocation = faLocationDot;
  faClock = faClock;
  faPeople = faIdCardClip;
  faBriefcase = faBriefcase;
  faImportant = faCircleExclamation;


  searchText: string = '';

  searchJobs(): void {
    // Esta função não precisa mais fazer nada, pois o componente job-listing agora é responsável pela pesquisa
  }
}
