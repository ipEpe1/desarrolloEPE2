import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AddReservationPage } from '../add-reservation/add-reservation';

interface HoraMedica {
  centro: string;
  doctor: string;
  fecha: string;
  hora: string;
  usuario: string;
  puntual: boolean;
  id: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userId: string;
  horasMedicasCollection: AngularFirestoreCollection<HoraMedica>;
  horasMedicas: HoraMedica[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularFirestore: AngularFirestore, public alertCtrl: AlertController) {
    this.userId = navParams.get('user');
  }

  ionViewDidEnter() {
    this.horasMedicasCollection = this.angularFirestore.collection('horasMedicas', ref => ref.where('usuario', '==', this.userId));
    this.horasMedicasCollection.snapshotChanges().subscribe(horasMedicasList => {
      this.horasMedicas = horasMedicasList.map(item => {
        return {
          centro: item.payload.doc.data().centro,
          doctor: item.payload.doc.data().doctor,
          fecha: item.payload.doc.data().fecha,
          hora: item.payload.doc.data().hora,
          usuario: item.payload.doc.data().usuario,
          puntual: item.payload.doc.data().puntual,
          id: item.payload.doc.id
        }
      })
    })
  }

  registrarHora() {
    this.navCtrl.push(AddReservationPage, { user: this.userId });
  }

  eliminarReserva(hora: HoraMedica) {

    console.log('Usuario registrado correctamente ' + hora.id)
    this.angularFirestore.doc('horasMedicas/' + hora.id).delete();
  }

  confirmarRetraso(hora: HoraMedica) {
    if (hora.puntual == true) {
      let alert = this.alertCtrl.create({
        title: 'Confirmar retraso',
        message: 'Su medico podra esperar un maximo de 20 minutos adicionales a lo reservado',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Aceptar',
            handler: () => {
              let batch = this.angularFirestore.firestore.batch();
              let isPuntual = false;
              console.log('isPuntual ' + isPuntual + ', hora ' + hora.id);
              let ref = this.angularFirestore.doc('horasMedicas/' + hora.id).ref;
              batch.update(ref, { puntual: isPuntual });
              batch.commit();
            }
          }
        ]
      });
      alert.present();
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'Su reserva solo puede ser retrasada una vez',
        buttons: [
          {
            text: 'Aceptar',
            role: 'cancel',
            handler: () => { }
          }]
      });
      alert.present();
    }

  }
}
