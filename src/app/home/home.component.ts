import { Component, OnInit } from '@angular/core';
import {tweet} from '../domain/tweet'
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import {Http,Response,Headers} from '@angular/http';
import { Router } from '@angular/router';
import { account } from '../domain/account';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  activeAccount: string;
  apiRoot:string = 'http://localhost:8080/kwetter/api/';
  title = 'Kwetter';
  name : String;
  city : String;
  url : String;
  bio : String;
  photo : String;
  tweets : tweet[];
  following : account[];
  followers : account[];

  constructor(private http: Http, private router : Router) {
    
  }

  ngOnInit() {
    if(localStorage.getItem("account") && localStorage.getItem("jwt")) 
    {
      this.name = localStorage.getItem("account")
      this.getAllTweets()
    }
  }

  doSearch(term:string) {
    if(localStorage.getItem("account") && localStorage.getItem("jwt")) {
      var headers = new Headers();
      headers.set('jwt', localStorage.getItem('jwt'))
    
        let promise = new Promise((resolve, reject) => {
          let apiURL = `${this.apiRoot}tweet/search/${term}`;
          this.http.get(apiURL, {headers: headers})
              .toPromise()
              .then(
                  res => { // Success
                    this.tweets = res.json()
                    resolve();
                  },
                  msg => { // Error
                    reject(msg);
                  }
              );
        });
    }
  }

  public getAllTweets() {
    if(localStorage.getItem("account") && localStorage.getItem("jwt")) {
      var headers = new Headers();
      headers.set('jwt', localStorage.getItem('jwt'))
    
      let apiURLAcc = `${this.apiRoot}account/${this.name}`;
      this.http.get(apiURLAcc, {headers: headers})
      .subscribe((res : Response) =>{
        const account = res.json();
        console.log(res.json());
        this.city = account.city;
        this.bio = account.bio;
        this.url = account.url;
        this.photo = account.photo;
        this.tweets = account.tweetCollection;
        this.following = account.accountCollection;
      });

      let apiURLFollowing = `${this.apiRoot}account/following/${this.name}`;
      this.http.get(apiURLFollowing, {headers: headers})
      .subscribe((res : Response) =>{
        console.log(res.json())
        this.following = res.json();
      });

      let apiURLFollowers = `${this.apiRoot}account/followers/${this.name}`;
      this.http.get(apiURLFollowing, {headers: headers})
      .subscribe((res : Response) =>{
        console.log(res.json())
        this.followers = res.json();
      });
    }
  }

  onLogout(){
    localStorage.removeItem("account");
    this.router.navigate(['/login']);
  }
}
