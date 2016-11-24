import { Console } from '@angular/compiler/src/private_import_core';
import * as console from 'console';
import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GithubService {

  private username: string;
  private client_id='3586536c6a12808a62ba';
  private client_secret='ddc06435f5c4a01cae7603821f0c75f09cff104f';

  constructor(private _http: Http) {
    // console.log('Github Service Ready...');
    this.username = 'litosa';
   }

   getUser(){
     return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
   }
   getRepos(){
     return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
   }
   updateUser(username:string){
     this.username = username;
   }

}
