import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  getInfo(): Info {
    return {
      pilot: {
        number: 0,
        title: "Pilot",
        url: "https://drive.google.com/uc?id=1FgZXPlRdq0QMC2uxyqhEoq33HlsFRlbU&export=download&confirm=t"
      },
      seasons: [
        {
          number: 1,
          episodes: [
            {
              number: 1,
              title: "Test Drive",
              url: "https://drive.google.com/uc?id=1qmMzKkrjdfWhqX9awVYPGx-VI6sEHpZ_&export=download&confirm=t"
            },
            {
              number: 2,
              title: "Battle Royale",
              url: "https://drive.google.com/uc?id=1pX2FDC77iGmwxItycvrx6fl0qSaT5CTL&export=download&confirm=t"
            },
            {
              number: 3,
              title: "All I Wanted Was A Slushie",
              url: "https://drive.google.com/uc?id=1nrPktDlmIQZfqjvgv3FWYfQojs-7SgLY&export=download&confirm=t"
            },
            {
              number: 4,
              title: "The Fat And The Furious",
              url: "https://drive.google.com/uc?id=1QVDaW6QGkz8MNtrBWzyr2MMa4dgGCky-&export=download&confirm=t"
            },
            {
              number: 5,
              title: "Buggin' The System",
              url: "https://drive.google.com/uc?id=1jlFVVbpAXAhh3EeUiar0XdJ-m0EHreic&export=download&confirm=t"
            },
            {
              number: 6,
              title: "TV Dinner",
              url: "https://drive.google.com/uc?id=1zT9szh7U2hYRstt3r-w-5PylgHi6uu2V&export=download&confirm=t"
            },
            {
              number: 7,
              title: "Breakout",
              url: "https://drive.google.com/uc?id=1ogZKNz1Irb3wTmnYDBmWYNhvM4LVM_y7&export=download&confirm=t"
            },
            {
              number: 8,
              title: "Dude, Where's My Head",
              url: "https://drive.google.com/uc?id=1X7v8KCubi6YkOqOqQkIFTXZMjyVaYLhz&export=download&confirm=t"
            },
            {
              number: 9,
              title: "The Bad Guy",
              url: "https://drive.google.com/uc?id=1c-HivhNrWcxBmsqNjQ_jyTAZ6QPU1X6I&export=download&confirm=t"
            },
            {
              number: 10,
              title: "Junk In The Trunk",
              url: "https://drive.google.com/uc?id=1Ah072vkRHqUR48d5ZkphMny-yIzr2lXP&export=download&confirm=t"
            },
            {
              number: 11,
              title: "DMV - Dept. Of Megas Violations In The Trunk",
              url: "https://drive.google.com/uc?id=1Ua3PLCbiJrnG0RRIm0kp4AUEftrFLvwF&export=download&confirm=t"
            },
            {
              number: 12,
              title: "Coop D'etat",
              url: "https://drive.google.com/uc?id=1WGJ0bFSb70oIf89mNqcXfFQAIvzg-Tec&export=download&confirm=t"
            },
            {
              number: 13,
              title: "The Driver's Seat",
              url: "https://drive.google.com/uc?id=1pDWC8cQvUlGN6mbb3S5CqYoI7_p15RtL&export=download&confirm=t"
            },
          ]
        },
        {
          number: 2,
          episodes: [
            {
              number: 14,
              title: "Ultra Chicks",
              url: "https://drive.google.com/uc?id=1UlhHHW126ia779xHAqRsYzJB5YR2QxKF&export=download&confirm=t"
            },
            {
              number: 15,
              title: "The Return",
              url: "https://drive.google.com/uc?id=19APr5Z1nNgXEQqa74zTan8NcmGASdc-4&export=download&confirm=t"
            },
            {
              number: 16,
              title: "Don't Tell Mom The Babysitter's Coop",
              url: "https://drive.google.com/uc?id=1LmdQ0MajDFFFbr6UZorjEo08iWBKp413&export=download&confirm=t"
            },
            {
              number: 17,
              title: "Viva Las Megas",
              url: "https://drive.google.com/uc?id=1DDtMI8RPJr0cFLFl4trOZxcJchpYcmRr&export=download&confirm=t"
            },
            {
              number: 18,
              title: "Thanksgiving Throwdown",
              url: "https://drive.google.com/uc?id=17kM5uRZFtD9y3cr1Xcr7W8c2jHjwqoIG&export=download&confirm=t"
            },
            {
              number: 19,
              title: "S-Force SOS",
              url: "https://drive.google.com/uc?id=1L0tvon9QVggNc0xlBiRz1Pzn-ioQmgvy&export=download&confirm=t"
            },
            {
              number: 20,
              title: "Space Booty",
              url: "https://drive.google.com/uc?id=17kKrOwNbKuITLlF7gn3mdvvQKl8c9D9T&export=download&confirm=t"
            },
            {
              number: 21,
              title: "Terminate Her",
              url: "https://drive.google.com/uc?id=1gTdlyXDP17ZorpdxO1Ncmoa3MC7TeglK&export=download&confirm=t"
            },
            {
              number: 22,
              title: "Ice Ice Megas",
              url: "https://drive.google.com/uc?id=1wfzsTOotPcnscld8rRZJ4BV3gS3iKgvd&export=download&confirm=t"
            },
            {
              number: 23,
              title: "A Clockwork Megas",
              url: "https://drive.google.com/uc?id=1pN5nXGBxQocaMlOSStt7VFKQdr6io0LW&export=download&confirm=t"
            },
            {
              number: 24,
              title: "Universal Remote",
              url: "https://drive.google.com/uc?id=1wwewhWqlhbCitjaGZ-UopksznH_9DSYj&export=download&confirm=t"
            },
            {
              number: 25,
              title: "Rearview Mirror, Mirror (Part 1)",
              url: "https://drive.google.com/uc?id=1iKljLUqBE4RywJuja4FuCGXOdPYUHxuP&export=download&confirm=t"
            },
            {
              number: 26,
              title: "Rearview Mirror, Mirror (Part 2)",
              url: "https://drive.google.com/uc?id=1ZblH-NCEYfiAT6vhyGAs_bRunOGnobkr&export=download&confirm=t"
            },
          ]
        },
      ]
    };
  }
}

export interface Info {
  pilot: Episode;
  seasons: Season[];
}

export interface Season {
  number: number;
  episodes: Episode[];
}

export interface Episode {
  number: number;
  title: string;
  url: string;
}
