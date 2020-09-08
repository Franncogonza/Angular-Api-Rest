import { ReqresService } from "../../services/reqres.service";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  users: any[] = [];

  constructor(
    private reqresService: ReqresService,
    private router:Router) {}

  ngOnInit(): void {
    this.setView();
  }

  setView() {
    this.getUsers();
  }

  getUsers() {
    this.reqresService.getUsers().subscribe(
      (res: any) => {
        this.users = res.data;
        console.log(this.users);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  userDetails(id: number) {
    this.router.navigate( ['user', id] );  }
}
