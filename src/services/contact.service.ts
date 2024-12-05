import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Contact, ContactCreate } from '../interfaces/contact.interface';

const BASE_URL = 'http://localhost:5225/api'
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  httpClient = inject(HttpClient);

  getContacts(){
    return this.httpClient.get<Contact[]>(`${BASE_URL}/Contact`)
  };

  getContact(id: number){
    return this.httpClient.get<Contact>(`${BASE_URL}/Contact/${id}`);
  };

  updateContact(id: number, contact: ContactCreate){
    return this.httpClient.put(`${BASE_URL}/Contact/${id}`, contact);  
  };

  deleteContact(id:number){
    return this.httpClient.delete(`${BASE_URL}/Contact/${id}`);
  };

  createContact(contact: ContactCreate){
    return this.httpClient.post<Contact>(`${BASE_URL}/Contact`, contact);
  };
}