import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from 'firebase';

import { first } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserInterface } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User;
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) { }

  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      console.log("Usuario login");
      return result;
    } catch (error) {
      console.log(error);
    }

  }

  async register(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      this.updateUserData(result.user);
      console.log("Usuario registrado");
      return result;
    } catch (error) {
      console.log(error);
    }

  }
  async logout() {
    try {
      await this.afAuth.signOut();
      console.log("Usuario Logout");
    } catch (error) {
      console.log(error);
    }

  }
  getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }
  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: UserInterface = {
      id: user.uid,
      email: user.email,
      roles: {
        client: true
      }
    }
    return userRef.set(data, { merge: true })
  }

}
