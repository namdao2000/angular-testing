import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  public load(key: string): object {
    if (this.exists(key)) {
      return JSON.parse(localStorage.getItem(key));
    }
    return undefined;
  }

  public load_raw(key: string): string {
    return localStorage.getItem(key);
  }

  public save(key: string, obj: any): void {
    localStorage.setItem(key, JSON.stringify(obj));
  }

  public exists(key: string): boolean {
    return !!localStorage.getItem(key);
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }
}
