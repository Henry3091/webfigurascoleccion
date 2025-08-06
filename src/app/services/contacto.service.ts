import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class ContactoService {
  constructor(private firestore: Firestore) {}

  enviarMensaje(nombre: string, correo: string, mensaje: string) {
    const contactosRef = collection(this.firestore, 'contactos');
    return addDoc(contactosRef, { nombre, correo, mensaje, fecha: new Date() });
  }
}
