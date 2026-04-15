import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { TripData } from '../services/trip-data';
import { Trip } from '../models/trip';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-trip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-trip.html',
  styleUrl: './delete-trip.css',
})
export class DeleteTrip implements OnInit {
  trip!: Trip;

  constructor(
    private tripData: TripData,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const tripCode = localStorage.getItem('tripCode');

    if(tripCode) {
      this.tripData.getTrip(tripCode).subscribe({
        next: (value: any) => {
          this.trip = Array.isArray(value) ? value[0] : value;
          this.changeDetectorRef.detectChanges();
        },
        error: (error: any) => {
          console.log('Error:', error);
        }
      });
    }
    console.log('tripCode:', tripCode);  }

  public onDelete(): void {
    const tripCode = localStorage.getItem('tripCode');

    if (tripCode) {
      this.tripData.deleteTrip(tripCode).subscribe({
        next: () => {
          localStorage.removeItem('tripCode');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.log('Error:', err);
        }
      });
    }
  }

  public onCancel(): void {    
    localStorage.removeItem('tripCode');
    this.router.navigate(['/']);
  }
}
