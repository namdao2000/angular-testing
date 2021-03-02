import {Component, OnInit} from '@angular/core';
import {SaveService} from '../services/save.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import * as copy from 'copy-to-clipboard';
import {COVER_LETTER_EXAMPLE_1} from './cover-letter-examples';

export interface Field {
  name: string;
  value: string;
}

export interface File {
  name: string;
  text: string;
  inputData: { [field: string]: string };
  timestamp: Date;
}

export const COVER_LETTER_DATA = 'cover-letter-saves';

@Component({
  selector: 'app-cover-letter',
  templateUrl: './cover-letter.component.html',
  styleUrls: ['./cover-letter.component.scss']
})
export class CoverLetterComponent implements OnInit {
  saveForm: FormGroup;
  private _originalText: string;
  object = Object;
  currentFile: File;
  currentLoadFileIndex = 0;
  currentDeleteFileIndex = 0;
  public fields: string[];
  public inputData = {};
  public files: File[];

  public set originalText(text: string) {
    this.fields = this.generateFields(text);
    this._originalText = text;
    this.generateText();
  }

  public get originalText(): string {
    return this._originalText;
  }

  public generatedText: string;

  constructor(private toast: ToastrService, private builder: FormBuilder, private save: SaveService) {
  }

  ngOnInit(): void {
    if (this.save.exists(COVER_LETTER_DATA)) {
      this.loadSaved();
    }

    this.saveForm = this.builder.group({
      filename: ['New File', Validators.required]
    });

    if (!this.files) {
      this.files = [];
    }

    if (this.files.length === 0) {
      this.files.unshift({
        name: 'M&A Investment banking cover letter template example',
        text: COVER_LETTER_EXAMPLE_1,
        inputData: {},
        timestamp: new Date()
      });
    }
  }

  generateFields(text: string): string[] {
    const newField: string[] = [];
    try {
      let word = '';
      let recordWord = false;
      [...text].forEach(c => {
        if (c === '{') {
          recordWord = true;
        } else if (c === '}') {
          recordWord = false;
          if (!newField.includes(word)) {
            newField.push(word);
          }
          word = '';
        }

        if (recordWord && c !== '{') {
          word += c;
        }
      });
      return newField;
    } catch (e) {

    }

    return undefined;
  }

  generateText(): void {
    this.generatedText = this.originalText;
    if (!this.fields) {
      return;
    }
    for (const field of this.fields) {
      if (!!this.inputData[field]) {
        this.generatedText = this.replaceAll(this.generatedText, '{' + field + '}', this.inputData[field]);
      }
    }
  }

  escapeRegExp(text: string): string {
    return text.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }

  replaceAll(str, find, replace: string): string {
    return str.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
  }

  saveAll(): void {
    if (this.saveForm.invalid) {
      return;
    }
    if (!this.files) {
      this.files = [];
    }
    const file = this.findFile(this.saveForm.controls.filename.value, this.files);
    if (file !== null) {
      file.text = this.originalText;
      file.inputData = this.inputData;
      file.timestamp = new Date();
    } else {
      this.files.push({
        name: this.saveForm.controls.filename.value,
        text: this.originalText,
        inputData: {...this.inputData},
        timestamp: new Date()
      });
    }
    this.save.save(COVER_LETTER_DATA, this.files);
    console.log(this.files);
    this.toast.success('Saved the file successfully');
  }

  public load(index: number): void {
    const file = this.files[index];
    this.originalText = file.text;
    this.inputData = {...file.inputData};
    this.saveForm.controls.filename.setValue(file.name);
    this.currentLoadFileIndex = 0;
    this.generateText();
  }

  public remove(index: number): void {
    const name = this.files[index].name;
    this.files.splice(index, 1);
    this.save.save(COVER_LETTER_DATA, this.files);
    this.toast.info(`Successfully deleted '${name}'`);
    this.currentDeleteFileIndex = 0;
  }

  private loadSaved(): void {
    this.files = this.save.load(COVER_LETTER_DATA) as any;
    if (!!this.files && this.files.length > 0) {
      this.toast.success('Loaded local files successfully');
    }
  }

  private findFile(name: string, files: File[]): File {
    for (const file of files) {
      if (name === file.name) {
        return file;
      }
    }
    return null;
  }

  public copyToClipBoard(): void {
    copy(this.generatedText);
    this.toast.success('Successfully copied the content to the clipboard');
  }

  public export(): void {
    this.toast.warning('This feature is not yet implemented.');
  }
}
