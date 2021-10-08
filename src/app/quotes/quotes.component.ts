import { Component, OnInit } from '@angular/core';
import { QuoteModel } from '../models/quote-model';
import { ColorModel } from '../models/color-model';
import { ColorService } from '../services/color.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  quote!:  QuoteModel
  color!: ColorModel
  display = false;
  constructor(private colorService: ColorService) { }

  onKeypress(event:any){
    console.log(event);
    if(event.key === "j"){
      console.log(event.key);
      this.fetchNewQuotes();
      this.fetchNewColor();
    }
    
  }

  ngOnInit(): void {
    this.fetchNewQuotes();
    this.fetchNewColor();

  }

  refresh(){
    this.fetchNewQuotes();
    this.fetchNewColor();
    this.display = true;
  }

  fetchNewQuotes(){
    this.colorService.getRandomQuotes().subscribe((data)=>{
      if(data){
        console.log(data);
        this.quote = new QuoteModel(data._id, data.content , data.author)
      }
    })
  }

  fetchNewColor(){
    this.colorService.getRandomcolor().subscribe((data)=>{
      if(data){
        console.log(data);
        this.color = new ColorModel( data.id , data.uid ,data.color_name, data.hex_value,)
      }
    })
  }

}


