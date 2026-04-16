import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InternService {

  private api = 'http://localhost:8081/api/interns';

  constructor(private http: HttpClient) {}

  create(intern: any, batchId: number) {
    return this.http.post(`${this.api}/${batchId}`, intern);
  }

  getAllInterns() {
    return this.http.get(this.api);
  }

  deleteIntern(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }

  updateIntern(id: number, intern: any) {
    return this.http.put(`${this.api}/${id}`, intern);
  }

  search(name: string, batchId?: string, type?: string) {
    let query = `?name=${name || ''}`;
    if (batchId) query += `&batchId=${batchId}`;
    if (type) query += `&type=${type}`;
    return this.http.get(`${this.api}/search${query}`);
  }

  // ✅ ADD THIS (FIX)
  getBatches() {
    return this.http.get('http://localhost:8081/api/batches');
  }
}