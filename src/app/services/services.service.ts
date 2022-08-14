import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {IRespGetServices, ReportServices, ServiceModel} from '../models/service.model';
import {IQuery} from "../models/query.model";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll(query: IQuery): Observable<IRespGetServices>{
    let params = new HttpParams()
    if (query?.page) params = params.set('page', String(query.page))
    if (query?.take) params = params.set('take', String(query.take))
    return this.http.get<IRespGetServices>(`${this.baseUrl}/servicos`, {params});
  }

  reportService(): Observable<ReportServices> {
    return this.http.get<ReportServices>(`${this.baseUrl}/servicos/todos/report`);
  }

  findOne(id: number): Observable<ServiceModel>{
    return this.http.get<ServiceModel>(`${this.baseUrl}/servicos/${id}`);
  }

  create(service: ServiceModel): Observable<ServiceModel>{
    return this.http.post<ServiceModel>(`${this.baseUrl}/servicos`, service);
  }

  update(id:number, service: ServiceModel): Observable<ServiceModel>{
    return this.http.put<ServiceModel>(`${this.baseUrl}/servicos/${id}`, service);
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/servicos/${id}`);
  }
}
