import {Injectable} from "@angular/core";
import {Http, Headers, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";
import {Template} from "../model/template.model";
import {Constrains} from "../constraints";
import "../rxjs-extensions";

@Injectable()
export class TemplateService {

  private headers = new Headers({
    'Content-Type': 'application/json'
  });
  private createTemplateURL: string;
  private findTemplateURL: string;

  constructor(private http: Http) {
    this.createTemplateURL = Constrains.baseURL + Constrains.createTemplateURL;
    this.findTemplateURL = Constrains.baseURL + Constrains.findTemplateURL;
  }

  createTemplate(template: Template): Observable<Template> {
    return this.http
      .post(this.createTemplateURL, JSON.stringify(template), {headers: this.headers})
      .map(TemplateService.extractData)
      .catch(TemplateService.handleError);
  }

  getTemplatesByType(type: string): Observable<Template[]> {
    let params = new URLSearchParams();
    params.set('type', type);

    return this.http.get(this.findTemplateURL, {search: params})
      .map(TemplateService.extractData)
      .catch(TemplateService.handleError);
  }

  getTemplatesByIndex(id: number): Observable<Template[]> {
    let params = new URLSearchParams();
    params.set('id', "" + id);

    return this.http.get(this.findTemplateURL, {search: params})
      .map(TemplateService.extractData)
      .catch(TemplateService.handleError);
  }

  private static extractData(res: Response) {
    return res.json();
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}