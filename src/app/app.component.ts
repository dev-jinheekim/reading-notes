import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NoteModel } from './common/dto/note.dto';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  // todo: NoteModel[];
  // doing: NoteModel;
  // done: NoteModel;
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];
  constructor(
    private http: HttpClient,
  ) {
  }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.http.get('http://localhost:3000/notes').subscribe((res) => {
      console.log('AppComponent', res);
      // @ts-ignore
      this.todo = res;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
