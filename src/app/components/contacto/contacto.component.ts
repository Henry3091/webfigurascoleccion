import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactoService } from '../../services/contacto.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  providers: [ContactoService],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'] 
})
export class ContactoComponent {
  nombre = '';
  correo = '';
  mensaje = '';

  constructor(private contactoService: ContactoService) {}

  enviar() {
    this.contactoService.enviarMensaje(this.nombre, this.correo, this.mensaje)
      .then(() => {
        alert('✅ Mensaje enviado con éxito');
        this.nombre = '';
        this.correo = '';
        this.mensaje = '';
      })
      .catch((error: any) => {
        console.error('❌ Error al enviar mensaje:', error);
        alert('Error al enviar el mensaje.');
      });
  }
}
