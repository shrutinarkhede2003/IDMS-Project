import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BatchService } from '../../../services/batch';

@Component({
  selector: 'app-batch-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './batch-form.html'
})
export class BatchFormComponent {

  batch = {
    startDate: '',
    endDate: ''
  };

  constructor(private service: BatchService, private router: Router) { }

  createBatch() {
    this.service.createBatch({ startDate: this.batch.startDate }).subscribe({
      next: () => {
        alert("Batch Created ✅");
        this.router.navigate(['/batches']);
      },
      error: () => alert("Error ❌")
    });
  }
}