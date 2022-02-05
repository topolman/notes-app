import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Note } from './notes/note';
import { NOTES } from './notes/notes.mock';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor() { }

  getNotes():Observable<Note[]> {
    const notes = of(NOTES);
    return notes;
  }

  getNote(id: number): Observable<Note>{
    const note = NOTES.find(note=>note.id===id)!;
    return of(note);
  }
}
