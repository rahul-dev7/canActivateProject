import { Component, OnInit } from '@angular/core';

import { Article } from '../../services/article';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ArticleService } from '../../services';
import { switchMap } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-article-edit',
    templateUrl: './article-edit.component.html'
})

export class ArticleEditComponent implements OnInit {
    article = {} as Article;
    articleForm = new FormGroup({
        title: new FormControl(),
        category: new FormControl()
    });

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private articleService: ArticleService
        ) { }


    ngOnInit() { 
        this.route.params
        .pipe(
            switchMap((params: Params) => this.articleService.getArticle(+params['id']))
        )
        .subscribe(article => {
            this.article = article ?? {} as Article
            this.setFormValues();
        })
    }


    setFormValues() {
        this.articleForm.setValue({  
            title: this.article?.title, 
            category: this.article?.category 
        });
    }


    onFormSubmit() {
        this.article.title = this.articleForm.get('title')?.value;

        this.article.category = this.articleForm.get('category')?.value;

        this.articleService.updateArticle(this.article)
        .subscribe(() => {
            this.router.navigate(['../'], { relativeTo: this.route})
        })
    }

}