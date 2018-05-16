import { Component } from '@angular/core';
import { NavController, /*AlertController*/ } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    // username: string = '';
    // fbUsername: any;
    username: string;

  constructor(public navCtrl: NavController,
    //   private alertCtrl: AlertController,
      private fire: AngularFireAuth) {

  }

    // showAlert(title: string, message: string) {
    //   let alertBox = this.alertCtrl.create({
    //     title: title,
    //     subTitle: message,
    //     buttons: ['OK']
    //   });
    //   alertBox.present();
    // }

    // loginUser() {
    //     if(/^[a-zA-Z0-9]+$/.test(this.username)) {
    //         this.navCtrl.push(ChatPage, {
    //             username: this.username
    //         });
    //     } else {
    //         this.showAlert('Error', 'Invalid Username');
    //     }
    // }

    loginWithFacebook() {
        this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then( res => {
            this.navCtrl.push(ChatPage, {
                username: res.user.displayName
            })
        })
    }

}
