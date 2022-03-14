import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  listAlumnos: Alumno[] = [
    { nombre: 'jesus', estado: 'aprobado' },
    { nombre: 'mario', estado: 'reprobado' },
    { nombre: 'tomas', estado: 'promocionado' }
  ];
  constructor() { }

  addAlumno(alumno: Alumno):void {
    this.listAlumnos.unshift(alumno);
  }

  updateAlumno(id: number, estado: string): void{
    this.listAlumnos[id].estado = estado;
  }

}
