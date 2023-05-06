import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';

import { Article } from './article';

const ARTICLES = [
    new Article(1, 'Core Java Tutorial', 'Java'),
    new Article(1, 'Angular Tutorial', 'Angular'),
    new Article(1, 'Hibernate Tutorial', 'Hibernate'),
];

let articlesObserable = of(ARTICLES);
@Injectable({providedIn: 'root'})
export class ArticleService {

    constructor() { }
    

    getArticles() {
        return articlesObserable;
    }


    getArticle(id: number) {
        return this.getArticles()
            .pipe(
                map(
                    articles => articles.find(article => article.articleId === id)
                )
            );
    }

    updateArticle(article: Article) {
        return this.getArticles()
            .pipe(
                map(articles => {

                    let articleObj = articles.find(ob => ob.articleId);
                    articleObj = article;
                    return articleObj;
                
                })
            )
    }


}