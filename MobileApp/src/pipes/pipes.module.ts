import { NgModule } from '@angular/core';
import { MaskNumberPipe } from './mask-number/mask-number';
import { CustomCurrencyPipe } from './custom-currency/custom-currency';
@NgModule({
	declarations: [MaskNumberPipe,
    CustomCurrencyPipe],
	imports: [],
	exports: [MaskNumberPipe,
    CustomCurrencyPipe]
})
export class PipesModule {}
