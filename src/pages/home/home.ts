import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/observable';

interface HorasMedicas{
  centro: string;
  doctor: string;
  fecha: string;
  hora: string;
  usuario: string;
  id ?: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  horasMedicasCollection: AngularFirestoreCollection<HorasMedicas>;
  horasMedicas: Observable<HorasMedicas[]>;

  constructor(public navCtrl: NavController, public angularFirestore: AngularFirestore) { }

  ionViewDidEnter(){
    this.horasMedicasCollection = this.angularFirestore.collection('horasMedicas', ref => ref.where('usuario','==','2F45cnt4zR4fSJuZDRyDkE'));
    this.horasMedicas = this.horasMedicasCollection.valueChanges();
  }
}
