import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mostrando productos obtenidos desde el product-service';
  listOfProducts: string[] = [];

  constructor(private http: Http) { }

  ngOnInit(): void {
    this.http.get('http://localhost:9000/product')
      .subscribe(resp => {
        this.listOfProducts = resp.json();
        },
        error => console.log(error));

  }
}
