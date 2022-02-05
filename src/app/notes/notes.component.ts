import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Note } from './note';
import { NoteService } from './../note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes: Note[] = [];
  selectedNote?: Note;

  constructor(
    private noteService: NoteService, 
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getNotes();
    this.getNote();
  }

  getNotes(): void {
    this.noteService.getNotes()
      .subscribe(notes => this.notes = notes);
  }

  getNote():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.noteService.getNote(id)
      .subscribe(note => {
        if (note === undefined)
          this.router.navigateByUrl('notes');
        this.selectedNote = note;
        return false;
      });
  }

  onSelect(note: Note): void {
    this.selectedNote = note;
  }

  getNewNoteId(notes: Note[]): number{
    let id = 0;
    if (!!notes && Array.isArray(notes) && notes.length>0){
      id = Math.max(...notes.map(note=>note.id));
      id = id<0 ? 0 : id + 1;
    }
    return id;
  }

  handleNoteCreate(): void {
    let id = this.getNewNoteId(this.notes);
    const newNote: Note = Object.create({id, title: "Новая заметка", details: "Текст заметки"});
    this.notes.push(newNote);
    this.selectedNote = newNote;
    this.router.navigateByUrl('notes/'+id);
  }

}
