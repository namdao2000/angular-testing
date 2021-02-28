import { Component, OnInit } from '@angular/core';

export interface Field {
  name: string;
  value: string;
}

@Component({
  selector: 'app-cover-letter',
  templateUrl: './cover-letter.component.html',
  styleUrls: ['./cover-letter.component.scss']
})
export class CoverLetterComponent implements OnInit {
  private _originalText: string;

  public fields: string[];

  public set originalText(text: string) {
    this.fields = this.generateFields(text);
    this._originalText = text;
  }

  public get originalText(): string {
    return this._originalText;
  }

  public generatedText: string;
  constructor() { }

  ngOnInit(): void {
    console.log("DOES ANYTHING WORK>")
  }

  generateFields(text: string): string[] {
    console.log(text);
    let newField: string[] = [];
    try {
      let word = "";
      let recordWord = false;
      [...text].forEach(c => {
        if (c === "{") {
          recordWord = true;
        } else if (c === "}") {
          recordWord = false;
          newField.push(word);
          word = "";
        }

        if (recordWord && c !== "{") {
          console.log(word);
          word += c;
        }
      });
      return newField;
    } catch (e) {

    }

    return undefined;
  }
}
