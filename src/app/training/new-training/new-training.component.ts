import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  trainings: string[] = [
    'Crunches',
    'Touch Toes',
    'side -lunges',
    'burpees ',
  ];
  @Output() trainingStart= new EventEmitter<void>()
  constructor(){}
  ngOnInit(){}
  onStartTraining(){
    this.trainingStart.emit();
  }

}
