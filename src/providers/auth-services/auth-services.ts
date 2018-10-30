import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
//import { map } from 'rxjs/operators';

let apiUrl = 'http://www.crowdspots.net/worker/MyBlog/api/post/create.php';
let apiUrlregister = 'http://202.80.231.200:8080/api/register';
let apiUrllogin = 'http://202.80.231.200:8080/api/checklogin';
let apiUrlreportkind = 'http://www.crowdspots.net:8080/api/getreport/bykind';
let apiUrlreportfreshpalm = 'http://www.crowdspots.net:8080/api/getreport/freshpalm';

@Injectable()
export class AuthServiceProvider {
status: any;
  constructor(public http : Http) {
    console.log('Hello AuthService Provider');
  }

  postData(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      console.log(apiUrl);
      this.http.post(apiUrl, JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
         // console.log("show"+ res.json().message);
        }, (err) => {
          reject(err);
        });
    });

  }
  register(credentials) {
    console.log(credentials);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      console.log(apiUrlregister);
      this.http.post(apiUrlregister, credentials, {headers: headers})
        .timeout(5000)
        .subscribe(res => {
          resolve(res.json());
         // console.log("show"+ res.json());
        }, (err) => {
          reject(err);
        });
    });
    

  }
  checklogin(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
     // headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'});
     // options = new RequestOptions({ headers: this.headers });

     // console.log(apiUrllogin);
      this.http.post(apiUrllogin, credentials, {headers: headers})
        .timeout(30000)
        .subscribe(res => {
          resolve(res.json());
         // console.log("show"+ res.json().message);
        }, (err) => {
          reject(err);
        });
    });
  }
  getreportbykind(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
     // console.log(apiUrllogin);
      this.http.post(apiUrlreportkind, credentials, {headers: headers})
        .timeout(30000)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }
  getreportbyfreshpalm(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
     // console.log(apiUrllogin);
      this.http.post(apiUrlreportfreshpalm, credentials, {headers: headers})
        .timeout(30000)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  
  updatestatus(value) {
  this.status = value;
  console.log(this.status );
    return this.status;
  }
  checkstatus() {
      return this.status;
    }
   
}
