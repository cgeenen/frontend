import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { Http,Response,Headers} from '@angular/http';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { account } from "../domain/account";
import { tweet } from "../domain/tweet";
import { NgForm } from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-kwetter-cmp',
  templateUrl: './kwetter-cmp.component.html',
  styleUrls: ['./kwetter-cmp.component.css']
})
export class KwetterCmpComponent implements OnInit {
  tweets: tweet[];
  

  constructor(private http:Http, private router: Router) { 

  }

  ngOnInit(){
  }

  onLogin(name, password) {
    this.http.get('http://localhost:8080/kwetter/api/account/login/Cornee/admin')
    .map((res: Response) => res)
    .subscribe((res: Response) => {
      localStorage.setItem("jwt", res.text());
      localStorage.setItem("account", 'Cornee');
    });

    this.router.navigate(['/home']);
  }
}
