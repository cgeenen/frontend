import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { tweet } from '../domain/tweet';
import { account } from '../domain/account';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title : String;
  name : String;
  city : String;
  url : String;
  bio : String;
  photo : String;
  tweets : tweet[];
  following : account[];
  followers : account[];

  apiRoot:string = 'http://localhost:8080/kwetter/api/';

  constructor(private http: Http, private router : Router) { }

  ngOnInit() {
    this.title = localStorage.getItem("account");
    this.getProfileInfo()
  }

  getProfileInfo(){
    if(localStorage.getItem("account") && localStorage.getItem("jwt")) {
      var headers = new Headers();
      headers.set('jwt', localStorage.getItem('jwt'))
    
      let apiURLAcc = `${this.apiRoot}account/${this.title}`;
      this.http.get(apiURLAcc, {headers: headers})
      .subscribe((res : Response) =>{
        const account = res.json();
        console.log(res.json());
        this.name = this.title;
        this.city = account.city;
        this.bio = account.bio;
        this.url = account.url;
        this.photo = account.photo;
        this.tweets = account.tweetCollection;
        this.following = account.accountCollection;
      });

      let apiURLFollowing = `${this.apiRoot}account/following/${this.title}`;
      this.http.get(apiURLFollowing, {headers: headers})
      .subscribe((res : Response) =>{
        console.log(res.json())
        this.following = res.json();
      });

      let apiURLFollowers = `${this.apiRoot}account/followers/${this.title}`;
      this.http.get(apiURLFollowing, {headers: headers})
      .subscribe((res : Response) =>{
        console.log(res.json())
        this.followers = res.json();
      });
    }
  }

  onLogout(){
    localStorage.removeItem("account") ;
    this.router.navigate(['/login']);
  }
}
