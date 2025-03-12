import { Component, OnInit } from '@angular/core';
import { TestUvWebService } from 'src/app/services/test-uv-web.service';
import { map } from 'rxjs/operators';
import { Test } from 'src/app/models/test.model';

@Component({
  selector: 'app-test-uv-web-list',
  templateUrl: './test-uv-web-list.component.html',
  styleUrls: ['./test-uv-web-list.component.css']
})
export class TestUvWebListComponent implements OnInit {
  tests?: Test[];
  currentTest?: Test;
  currentIndex = -1;
  title = '';
  programaInteres = '';
  n = 0;

  constructor(private testUvWebService: TestUvWebService) { }

  ngOnInit(): void {
    //this.retrieveTutorialsByProgram('gestion');
  }

  refreshList(): void {
    this.currentTest = undefined;
    this.currentIndex = -1;
    //this.retrieveTutorials();
  }

  retrieveTestsByProgram(): void {
    //lert(this.programaInteres)
    this.testUvWebService.getByProgram(this.programaInteres).snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.tests = data;
      this.n = this.tests.length;
    });
  }


  retrieveTests(): void {
    this.testUvWebService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.tests = data;
    });
  }

  setActiveTest(test: Test, index: number): void {
    this.currentTest = test;
    this.currentIndex = index;
  }
}