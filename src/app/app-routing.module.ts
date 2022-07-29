import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./page/home/home.component";
import {SeasonComponent} from "./page/season/season.component";
import {EpisodeComponent} from "./page/episode/episode.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'season/:season-id', component: SeasonComponent},
  {path: 'season/:season-id/episode/:episode-id', component: EpisodeComponent},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}, // redirect to `first-component`
  {path: '**', redirectTo: '/page-not-found'}, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
