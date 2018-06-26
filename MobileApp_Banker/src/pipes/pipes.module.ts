import { NgModule } from '@angular/core';
import { MaskNumberPipe } from './mask-number/mask-number';
@NgModule({
	declarations: [MaskNumberPipe],
	imports: [],
	exports: [MaskNumberPipe]
})
export class PipesModule {}
