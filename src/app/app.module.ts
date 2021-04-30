import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchBookComponent } from './search-book/search-book.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { BoardComponent } from './board/board.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

const routes: Routes = [
  { path: 'home', component: AppComponent},
];

// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    SearchBookComponent,
    NotesListComponent,
    NoteDetailComponent,
    BoardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    [RouterModule.forRoot(routes)],
    BrowserAnimationsModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
