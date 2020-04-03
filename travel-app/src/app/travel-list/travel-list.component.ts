import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../api.service';
import {Travel} from '../travel';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit {

  travels$: Observable<Travel[]>;
  travel_form: FormGroup;

  constructor(private apiService: ApiService, private form_builder: FormBuilder, private route: Router) {
  }

  ngOnInit() {
    this.getTravels();
    this.travel_form = this.form_builder.group({
      place: '',
      note: '',
      date: ''
    });

  }

  onSubmit() {
    this.apiService.addTravel(this.travel_form.value).subscribe((response) => {
        this.getTravels();
        },
        (err: HttpErrorResponse) => {
          if(err.status == 401)
            this.newAccessToken();
        }
        );
  }

  getTravels() {
    this.travels$ = this.apiService.getTravels();
    this.travels$.subscribe(res=>{},(err: HttpErrorResponse)=>{
        if(err.status == 401)
          this.newAccessToken();
    })
  }

  newAccessToken(){
      this.apiService.newAccessToken(localStorage.getItem('refresh')).subscribe(res=>{
        localStorage.setItem('access',res['access']);
        window.location.reload();
      })
  }

  exit() {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    this.route.navigateByUrl("/");
  }
}
