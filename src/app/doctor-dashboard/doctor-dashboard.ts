import { Component, OnInit } from '@angular/core';
import { Consultation, ConsultationRecord, Patient } from '../services/consultation';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConsultationForm } from './consultation-form/consultation-form';
import { ConsultationHistory } from './consultation-history/consultation-history';
import { PatientSearch } from './patient-search/patient-search';

@Component({
  selector: 'app-doctor-dashboard',
  imports: [CommonModule, FormsModule, PatientSearch, ConsultationForm, ConsultationHistory],
  templateUrl: './doctor-dashboard.html',
  styleUrl: './doctor-dashboard.css'
})
export class DoctorDashboard implements OnInit{

    patients: Patient[] = [];
    selectedPatient: Patient | null = null;
    consultationRecords: ConsultationRecord[] = [];

    constructor(private consultationService: Consultation) { }

    ngOnInit(): void {
  this.consultationService.patients$.subscribe(patients => {
    this.patients = patients;
  });

  this.consultationService.consultationRecord$.subscribe(records => {
    this.consultationRecords = records;
  });
}

    onPatientSelected(patient: Patient)
    {
      this.selectedPatient = patient;
    }

    onAddConsultation(record: ConsultationRecord){
      this.consultationService.addConsultation(record);
    }

}
