import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DoctorDashboard } from './doctor-dashboard/doctor-dashboard';
import { PatientDashboard } from './patient-dashboard/patient-dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DoctorDashboard, PatientDashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Healthcare-Appointment');
}
