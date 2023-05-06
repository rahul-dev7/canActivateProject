import { NgModule } from '@angular/core';

import { ArticleComponent } from './article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleEditComponent } from './article-list/edit/article-edit.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleService } from './services';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ArticleRoutingModule
    ],
    exports: [],
    declarations: [
        ArticleComponent,
        ArticleListComponent,
        ArticleEditComponent
    ],
    providers: [ArticleService],
})
export class ArticleModule { }
