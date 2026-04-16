import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  private api = 'http://localhost:8081/api/batches';

  constructor(private http: HttpClient) {}

  createBatch(batch: any) {
    return this.http.post(this.api, batch);
  }

  getAllBatches() {
    return this.http.get(this.api);
  }
}