import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Travel} from "../travel";
import {ApiService} from "../api.service";
import {Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.css']
})
export class TravelDetailComponent implements OnInit {
  travel$: Observable<Travel[]>;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.travel$ = this.apiService.getTravel(+id);
    this.travel$.subscribe(()=>{},
      (error: HttpErrorResponse) => {
        if(error.status == 401)
              this.apiService.newAccessToken(localStorage.getItem("refresh").toString())
                .subscribe(res =>{
                    localStorage.setItem("access",res['access']);
                    window.location.reload();
                })
              })
  }

}
