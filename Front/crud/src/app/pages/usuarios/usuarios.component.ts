import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../usuarios.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  notas: any[] = [];
  totalNotas: number = 0;
  bandera:boolean = true;
  estadoEdicion: boolean = false;
  notaEnEdicion: any = null;
  editarNotaForm: FormGroup = new FormGroup({
    titulo: new FormControl(''),
    contenido: new FormControl('')
  });
  crearNotaForm: FormGroup;
  constructor(private usersService: UsuariosService) {
    this.crearNotaForm = new FormGroup({
      titulo: new FormControl('', Validators.required),
      contenido: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.usersService.getNotas().subscribe((notas: any[]) => {
      this.notas = notas;
    });
  }
  
  async crearNota() {
    this.bandera = !this.bandera;
    if (this.crearNotaForm.valid) {
      const nuevaNota = {
        titulo: this.crearNotaForm.value.titulo,
        contenido: this.crearNotaForm.value.contenido
      };
  
      try {
        const response = await this.usersService.createNota(nuevaNota).toPromise();
        const notas: any[] = await this.usersService.getNotas().toPromise();
        this.notas = notas;
        this.crearNotaForm.reset();
      } catch (error) {
        console.error('Error al crear nota:', error);
      }
    }
  }
  
  activarEdicion(nota: any) {
    this.estadoEdicion = true;
    this.notaEnEdicion = nota;
    this.editarNotaForm.setValue({
      titulo: nota.titulo,
      contenido: nota.contenido
    });
  }

  guardarCambios() {
    if (this.notaEnEdicion) {
      const { titulo, contenido } = this.editarNotaForm.value;
      this.usersService.editarNota(this.notaEnEdicion.id, { titulo, contenido }).subscribe(() => {
        // Actualizar la lista de notas después de la edición
        this.usersService.getNotas().subscribe((notas: any[]) => {
          this.notas = notas;
        });
        this.notaEnEdicion = null;
        this.estadoEdicion = false;
        this.editarNotaForm.reset();
      });
    }
  }
  cancelarEdicion() {
    this.notaEnEdicion = null;
    this.editarNotaForm.reset();
  }

  eliminarNota(id: number) {
    this.usersService.eliminarNota(id).subscribe(() => {
      this.usersService.getNotas().subscribe((notas: any[]) => {
        this.notas = notas;
      });
    });
  }
  
}

