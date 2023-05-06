import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../services/article';
import { ArticleService } from '../services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-article-list',
    templateUrl: './article-list.component.html'
})

export class ArticleListComponent implements OnInit {
    articles: Observable<Article[]>;


    constructor(
        private articleService: ArticleService,
        private route: ActivatedRoute,
        private router: Router
        ) { 
            this.articles = this.articleService.getArticles();
        }



    ngOnInit() { }


    goToEdit(article: Article) {
        this.router.navigate([article.articleId], { relativeTo: this.route})
    }
}