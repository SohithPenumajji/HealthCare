import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Patient {
  id: string,
  name: string,
  age: number,
  gender: string
}

export interface ConsultationRecord {
  consultationId: string,
  patientId: string,
  patientName: string,
  date: string,
  notes: string,
  prescription: string
}

@Injectable({
  providedIn: 'root'
})
export class Consultation {

  private patients: Patient[] = [
    {id:'P001', name:'Alice', age:28, gender:'Male'},
    {id:'P002', name:'Bob', age:34, gender:'Male'},
    {id:'P003', name:'Charlie', age:42, gender:'Male'}
  ]

  private consultationRecords: ConsultationRecord[] = [

    {
      consultationId: 'C001',
      patientId: 'P001',
      patientName: 'Alice',
      date: '2025-09-20',
      notes: 'Mild fever and headache',
      prescription: 'Paracetmol 500mg twice daily'
    },

    {
      consultationId: 'C002',
      patientId: 'P002',
      patientName: 'Bob',
      date: '2025-09-19',
      notes: 'Back pain and stiffness',
      prescription: 'Ibuprofen 400mg thrice daily'
    }

  ]

   private patientsSubject = new BehaviorSubject<Patient[]>(this.patients);
   patients$ = this.patientsSubject.asObservable();

  private consultationRecordsSubject = new BehaviorSubject<ConsultationRecord[]>(this.consultationRecords);
  consultationRecord$ = this.consultationRecordsSubject.asObservable();

  constructor() {}

  addPatient(patient: Patient) {
    this.patients.push(patient);
  }

  getPatients(): Patient[]{
    return this.patients;
  }

  getConsultations(): ConsultationRecord[] {
    return this.consultationRecords;
  }

  addConsultation(record: ConsultationRecord){
    this.consultationRecords.push(record);
    this.consultationRecordsSubject.next(this.consultationRecords);
  }

  getPatientConsultations(patientId: string): ConsultationRecord[] {
    return this.consultationRecords.filter(r => r.patientId === patientId);
  }

}
