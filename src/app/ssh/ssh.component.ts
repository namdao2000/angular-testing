import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Terminal } from 'xterm';

@Component({
  selector: 'app-ssh',
  templateUrl: './ssh.component.html',
  styleUrls: ['./ssh.component.scss']
})
export class SshComponent implements OnInit, AfterViewInit {

  @ViewChild('myTerminal') terminal: ElementRef;
  private term: Terminal;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.term = new Terminal();
      this.term.open(this.terminal.nativeElement);
      this.term.writeln('Welcome to the super secret and cool terminal.');
      this.term.writeln('We hope you have a wonderful day sir!');
    });
  }

  ngOnInit(): void {
  }

}
