import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoService, Producto } from '../../services/producto.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos: Producto[] = [];

  nuevoProducto: Producto = {
    nombre: '',
    descripcion: '',
    precio: 0,
    imagen: ''
  };

  constructor(private productoService: ProductoService) {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

  crearProducto() {
    this.productoService.crearProducto(this.nuevoProducto).subscribe(() => {
      this.cargarProductos();
      this.nuevoProducto = { nombre: '', descripcion: '', precio: 0, imagen: '' };
    });
  }

  eliminarProducto(id: number) {
    this.productoService.eliminarProducto(id).subscribe(() => {
      this.cargarProductos();
    });
  }

  actualizarProducto(producto: Producto) {
    // Aquí podrías abrir un modal o permitir editar inline
    const nombreNuevo = prompt('Nuevo nombre:', producto.nombre);
    if (nombreNuevo !== null) {
      producto.nombre = nombreNuevo;
      this.productoService.actualizarProducto(producto).subscribe(() => {
        this.cargarProductos();
      });
    }
  }
}
