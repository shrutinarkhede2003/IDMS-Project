import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InternService } from '../../../services/intern';

@Component({
  selector: 'app-intern-form',
  standalone: true,
  imports: [CommonModule, FormsModule],   // ✅ MUST
  templateUrl: './intern-form.html'
})
export class InternFormComponent implements OnInit {

  intern = {
    name: '',
    email: '',
    mobile: '',
    type: 'Free',
    joiningDate: '',
    batchId: 0
  };

  batches: any[] = [];

  constructor(private service: InternService, private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.service.getBatches().subscribe((data: any) => {
      this.batches = data;
      this.cdr.detectChanges();
    });
  }

  addIntern() {
    if (!this.intern.name || !this.intern.email || !this.intern.mobile || !this.intern.batchId || !this.intern.joiningDate) {
      alert("Please fill in all required fields, including Batch Assignment.");
      return;
    }
    
    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.intern.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate Mobile
    const mobileRegex = /^\+?[0-9]{10,15}$/;
    if (!mobileRegex.test(this.intern.mobile)) {
      alert("Please enter a valid mobile number (10-15 digits).");
      return;
    }

    this.service.create(this.intern, this.intern.batchId).subscribe({
      next: () => {
        alert('Intern Added ✅');
        this.router.navigate(['/interns']);
      },
      error: (err) => {
        console.error(err);
        alert('Error ❌');
      }
    });
  }
}