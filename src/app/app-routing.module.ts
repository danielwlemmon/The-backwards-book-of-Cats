import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'toc', loadChildren: './toc/toc.module#TocPageModule' },
  { path: 'chapter1', loadChildren: './chapter1/chapter1.module#Chapter1PageModule' },
  { path: 'chapter2', loadChildren: './chapter2/chapter2.module#Chapter2PageModule' },
  { path: 'chapter3', loadChildren: './chapter3/chapter3.module#Chapter3PageModule' },
  { path: 'chapter4', loadChildren: './chapter4/chapter4.module#Chapter4PageModule' },
  { path: 'chapter5', loadChildren: './chapter5/chapter5.module#Chapter5PageModule' },
  { path: 'chapter6', loadChildren: './chapter6/chapter6.module#Chapter6PageModule' },
  { path: 'chapter7', loadChildren: './chapter7/chapter7.module#Chapter7PageModule' },
  { path: 'chapter8', loadChildren: './chapter8/chapter8.module#Chapter8PageModule' },
  { path: 'chapter9', loadChildren: './chapter9/chapter9.module#Chapter9PageModule' },
  { path: 'chapter10', loadChildren: './chapter10/chapter10.module#Chapter10PageModule' },
  { path: 'chapter11', loadChildren: './chapter11/chapter11.module#Chapter11PageModule' },
  { path: 'chapter12', loadChildren: './chapter12/chapter12.module#Chapter12PageModule' },
  { path: 'chapter13', loadChildren: './chapter13/chapter13.module#Chapter13PageModule' },
  { path: 'chapter14', loadChildren: './chapter14/chapter14.module#Chapter14PageModule' },
  { path: 'chapter15', loadChildren: './chapter15/chapter15.module#Chapter15PageModule' },
  { path: 'chapter16', loadChildren: './chapter16/chapter16.module#Chapter16PageModule' },
  { path: 'chapter17', loadChildren: './chapter17/chapter17.module#Chapter17PageModule' },
  { path: 'chapter18', loadChildren: './chapter18/chapter18.module#Chapter18PageModule' },
  { path: 'chapter19', loadChildren: './chapter19/chapter19.module#Chapter19PageModule' },
  { path: 'chapter20', loadChildren: './chapter20/chapter20.module#Chapter20PageModule' },
  { path: 'chapter21', loadChildren: './chapter21/chapter21.module#Chapter21PageModule' },
  { path: 'chapter22', loadChildren: './chapter22/chapter22.module#Chapter22PageModule' },
  { path: 'chapter23', loadChildren: './chapter23/chapter23.module#Chapter23PageModule' },
  { path: 'chapter24', loadChildren: './chapter24/chapter24.module#Chapter24PageModule' },
  { path: 'chapter25', loadChildren: './chapter25/chapter25.module#Chapter25PageModule' },
  { path: 'chapter26', loadChildren: './chapter26/chapter26.module#Chapter26PageModule' },
  { path: 'chapter-last', loadChildren: './chapter-last/chapter-last.module#ChapterLastPageModule' }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
