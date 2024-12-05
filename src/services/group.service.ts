import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Group, GroupCreate } from '../interfaces/group.interface';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:5225/api'
@Injectable({
  providedIn: 'root'
})
export class GroupService {
  httpClient = inject(HttpClient);

  getGroups(): Observable<Group[]> {
    return this.httpClient.get<Group[]>(`${BASE_URL}/Group`)
  };

  getGroup(id: number): Observable<Group>{
    return this.httpClient.get<Group>(`${BASE_URL}/Group/${id}`);
  };

  updateGroup(id: number, group: Group){
    console.log(group);
    return this.httpClient.put(`${BASE_URL}/Group/${id}`, group);  
  };

  deleteGroup(id:number){
    return this.httpClient.delete(`${BASE_URL}/Group/${id}`);
  };
  
  createGroup(group: GroupCreate): Observable<Group>{
    return this.httpClient.post<Group>(`${BASE_URL}/Group`, group);
  };
}