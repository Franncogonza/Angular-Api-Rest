import { ReqresService } from "./../../services/reqres.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"],
})
export class UserDetailComponent implements OnInit {
  user: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    reqresService: ReqresService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.user = reqresService
        .getUser(params["id"])
        .subscribe((res: any) => (this.user = res.data));
    });
  }

  ngOnInit(): void {}
}

// p104 08/09 19 05