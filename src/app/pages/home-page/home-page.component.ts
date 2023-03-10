import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IPortfolio, PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
    works$: Observable<IPortfolio[]>;

    constructor(private portfolioService: PortfolioService) {
        this.works$ = this.portfolioService.getAll();
    }
}
