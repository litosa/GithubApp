import * as console from 'console';
import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../services/github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  user: any;
  repos:any[];
  username:string;

  constructor(private _githubService:GithubService) {
    
   }

  ngOnInit() {

    this.user = false;

    // this._githubService.getUser()
    //       .subscribe(user => {
    //         this.user = user;
    //       });

    // this._githubService.getRepos()
    //       .subscribe(repos => {
    //         this.repos = repos;
    //       });
  }

  searchUser(){
    this._githubService.updateUser(this.username);

    this._githubService.getUser()
              .subscribe(user => {
                this.user = user;
              });

    this._githubService.getRepos()
          .subscribe(repos => {
            this.repos = repos;
          });
  }
}
