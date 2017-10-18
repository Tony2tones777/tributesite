import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  usernameParagraph = '';
  enableButton = false;

  
myFunct(){
        if(this.username != null){
        this.enableButton = true;
        }
      };
      
   
    //   this.enableButton = false;
    // }
  

  createUserName() {
    console.log(this.username);
    this.usernameParagraph = this.username;
    this.enableButton = false;
    this.username = '';
    
  }
  
}
