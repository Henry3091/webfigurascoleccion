import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PoliticasDePrivacidadComponent } from './pages/politicas-de-privacidad/politicas-de-privacidad.component';
import { TerminosYCondicionesComponent } from './pages/terminos-y-condiciones/terminos-y-condiciones.component';


export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'politicas-de-privacidad', component: PoliticasDePrivacidadComponent },
  { path: 'terminos-y-condiciones', component: TerminosYCondicionesComponent },
];


