import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Consultation, Patient } from '../services/consultation'

@Component({
  selector: 'app-patient-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patient-dashboard.html',
  styleUrl: './patient-dashboard.css'
})
export class PatientDashboard {

  name: string = '';
  age: number | null = null;
  gender: string = '';

  constructor(private ConsulatationService: Consultation) {}

  addPatient() {
    if(!this.name || !this.age || !this.gender) {
      alert('Fill all patient details !!');
      return;
    }

      const newPatient: Patient = {
        id: 'P' + (this.ConsulatationService.getPatients().length + 1).toString().padStart(3, '0'),
        name: this.name,
        age: this.age,
        gender: this.gender
      }

      this.ConsulatationService.addPatient(newPatient);

      this.name = '';
      this.age = null;
      this.gender = '';
  }

  get patients() {
    return this.ConsulatationService.getPatients();
  }


}
