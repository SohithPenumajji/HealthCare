import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DoctorDashboard } from './doctor-dashboard/doctor-dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DoctorDashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Healthcare-Appointment');
}
