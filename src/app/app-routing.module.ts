import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/StartSection/start/start.component';
import { RegisterComponent } from './components/RegisterSection/register/register.component';
import { FridgeComponent } from './components/FridgeSection/fridge/fridge.component';
import { MainComponent } from './components/MainSection/main/main.component';
import { YoutubePlayerComponent } from './components/YoutubeSection/youtube-player/youtube-player.component';
import { CanvasSectionComponent } from './components/CanvasSection/canvas-section.component';



const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', component: StartComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'main', component: MainComponent },
  { path: 'fridge', component: FridgeComponent },
  { path: 'youtube', component: YoutubePlayerComponent },
  { path: 'canvas', component: CanvasSectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
