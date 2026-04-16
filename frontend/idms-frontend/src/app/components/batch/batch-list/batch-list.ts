import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchService } from '../../../services/batch';

@Component({
  selector: 'app-batch-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batch-list.html',
  styleUrl: './batch-list.css'
})
export class BatchListComponent implements OnInit {

  batches: any[] = [];

  constructor(private batchService: BatchService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadBatches();
  }

  loadBatches() {
    this.batchService.getAllBatches().subscribe({
      next: (data: any) => {
        console.log("Loading batches successful:", data);
        this.batches = data;
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error("Failed to load batches:", err);
      }
    });
  }
}