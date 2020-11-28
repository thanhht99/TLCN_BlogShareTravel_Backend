import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TourService, LoginService, AlertService } from '../../_services';
import { Tour, Account, TourGuide } from '../../models';

import { first } from 'rxjs/operators';
import { WebRequestService } from '../../web-request.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-add-tour',
  templateUrl: './add-tour.component.html',
  styleUrls: ['./add-tour.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddTourComponent implements OnInit {
  
  form: FormGroup;
  tour: Tour;
  loading = false;
  submitted = false;
  account: Account;
  tourGuide: TourGuide;

  constructor(private http: HttpClient,
              private loginService: LoginService,
              private webRequestService: WebRequestService,
              private tourService: TourService, 
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private alertService: AlertService) 
  {
    this.loginService.account.subscribe(x => this.account = x);
    this.loginService.tourguide.subscribe(x => this.tourGuide = x);
    console.log(this.tourGuide)
  }

  ngOnInit(): void {
    //readURL();
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      summary: ['', [Validators.required, Validators.maxLength(100)]],
      price: ['', Validators.required],
      time: ['', Validators.required],
      departureLocation: ['', Validators.required],
      destination: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }

  

  get f() { return this.form.controls; }

  createNewTour(){
      // if (!this.form.get('avatarPath').value) {
      //   alert('Please select an image!');
      //   return false;
      // }      
          
      this.submitted = true;
      this.alertService.clear();
      if (this.form.invalid) {
        return;
      }
      this.loading = true;
      
      this.tour = this.form.value;
      this.tour.tourGuideId = this.tourGuide.id;

      // const formData = new FormData();
      // formData.append('avatarPath', this.form.get('avatarPath').value);
      // formData.append('agentId', '007');

      

      // this.http
      // .post<any>('http://localhost:3000/tour/add', value123).subscribe(response => {
      //   console.log(response);
      //   if (response.statusCode === 200) {
      //     // Reset the file input
      //     this.uploadFileInput.nativeElement.value = "";
      //     this.fileInputLabel = undefined;
      //   }
      // }, er => {
      //   console.log(er);
      //   alert(er.error.error);
      // });
      console.log("---------------------XEM TRUOC-----------------------");      
      console.log(this.tour);
      this.tourService.createTour(this.tour)
                          .pipe(first())
                                .subscribe({
                                    next: (tour: any) => {
                                      console.log("------------------------------------");
                                      console.log(tour);
                                      this.alertService.success('Add Tour successful. Please add a image to complete create tour!', { keepAfterRouteChange: true });                                                                             
                                      this.router.navigate(['/tour/add/image', tour.id], { relativeTo: this.route });
                                    },
                                    error: er => {
                                      console.log(er);
                                      alert(er.error.error);
                                       // this.alertService.error('Add Tour Failed', { keepAfterRouteChange: true });
                                        this.loading = false;
                                    }
                                });

     
  }

}