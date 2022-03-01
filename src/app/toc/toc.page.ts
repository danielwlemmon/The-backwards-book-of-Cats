import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: "Chapter 1 | Z",
      url: "chapter1"
    },
    {
      title: "Chapter 2 | Y",
      url: "chapter2"
    },{
      title: "Chapter 3 | X",
      url: "chapter3"
    },
    {
      title: "Chapter 4 | W",
      url: "chapter4"
    },
    {
      title: "Chapter 5 | V",
      url: "chapter5"
    },
    {
      title: "Chapter 6 | U",
      url: "chapter6"
    },
    {
      title: "Chapter 7 | T",
      url: "chapter7"
    },
    {
      title: "Chapter 8 | S",
      url: "chapter8"
    },
    {
      title: "Chapter 9 | R",
      url: "chapter9"
    },
    {
      title: "Chapter 10 | Q",
      url: "chapter10"
    },
    {
      title: "Chapter 11 | P",
      url: "chapter11"
    },
    {
      title: "Chapter 12 | O",
      url: "chapter12"
    },
    {
      title: "Chapter 13 | N",
      url: "chapter13"
    },
    {
      title: "Chapter 14 | M",
      url: "chapter14"
    },
    {
      title: "Chapter 15 | L",
      url: "chapter15"
    },
    {
      title: "Chapter 16 | K",
      url: "chapter16"
    },
    {
      title: "Chapter 17 | J",
      url: "chapter17"
    },
    {
      title: "Chapter 18 | I",
      url: "chapter18"
    },
    {
      title: "Chapter 19 | H",
      url: "chapter19"
    },
    {
      title: "Chapter 20 | G",
      url: "chapter20"
    },
    {
      title: "Chapter 21 | F",
      url: "chapter21"
    },
    {
      title: "Chapter 22 | E",
      url: "chapter22"
    },
    {
      title: "Chapter 23 | D",
      url: "chapter23"
    },
    {
      title: "Chapter 24 | C ",
      url: "chapter24"
    },
    {
      title: "Chapter 25 | B",
      url: "chapter25"
    },
    {
      title: "Chapter 26 | A",
      url: "chapter26"
    },
    {
      title: "Chapter 27 | The End",
      url: "chapter-last"
    }      
  ];

  constructor() { }

  ngOnInit() {
  }

}
