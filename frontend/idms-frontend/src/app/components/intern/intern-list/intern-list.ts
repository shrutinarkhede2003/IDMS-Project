import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';   // ✅ REQUIRED
import { FormsModule } from '@angular/forms';     // ✅ REQUIRED
import { InternService } from '../../../services/intern';

@Component({
  selector: 'app-intern-list',
  standalone: true,
  imports: [CommonModule, FormsModule],   // ✅ IMPORTANT
  templateUrl: './intern-list.html'
})
export class InternListComponent implements OnInit {

  interns: any[] = [];
  searchText: string = '';
  searchBatch: string = '';
  searchType: string = '';

  editingId: number | null = null;
  editData: any = {};

  constructor(private service: InternService) {}

  ngOnInit() {
    this.loadInterns();
  }

  loadInterns() {
    this.service.getAllInterns().subscribe((data: any) => {
      this.interns = data;
    });
  }

  delete(id: number) {
    this.service.deleteIntern(id).subscribe(() => {
      this.loadInterns();
    });
  }

  search() {
    this.service.search(this.searchText, this.searchBatch, this.searchType)
      .subscribe((data: any) => {
        this.interns = data;
      });
  }

  edit(intern: any) {
    this.editingId = intern.id;
    this.editData = { ...intern }; // shallow copy
  }

  saveEdit() {
    if (!this.editData.name || !this.editData.email || !this.editData.mobile) return;
    this.service.updateIntern(this.editData.id, this.editData).subscribe(() => {
      this.editingId = null;
      this.loadInterns();
    });
  }

  cancelEdit() {
    this.editingId = null;
  }
}