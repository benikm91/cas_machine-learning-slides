import {Component} from '@angular/core';
import {Slide} from "../slide/slide";

import representerTheorem from './optimiztation/representer-theorem.xml'
import linearModelDualForm from './optimiztation/linear-model-dual-form.xml'
import linearModelDualFormDerivation from './optimiztation/linear-model-dual-form-derivation.xml'
import linearModelDualFormKernel from './optimiztation/linear-model-dual-form-kernel.xml'
import linearModelDualFormHighlight from './optimiztation/linear-model-dual-form-highlight.xml'
import rbfKernel from './kernel/rbf-kernel.xml'

@Component({
  selector: 'what-is-kernel-trick',
  styleUrls: ['./what-is-kernel-trick.component.scss'],
  templateUrl: './what-is-kernel-trick.component.pug',
})
export class WhatIsKernelTrickComponent extends Slide {

  representerTheorem = representerTheorem
  linearModelDualForm = linearModelDualForm
  linearModelDualFormDerivation = linearModelDualFormDerivation
  linearModelDualFormHighlight = linearModelDualFormHighlight
  linearModelDualFormKernel = linearModelDualFormKernel

  _kernel = '<mi>k</mi><mrow><mo form="prefix" stretchy="false">(</mo><msub class="data"><mi>x</mi><mi>j</mi></msub><mo>,</mo><mi>x</mi><mo form="postfix" stretchy="false">)</mo></mrow>'
  kernel = '<math display="inline">'+this._kernel+'</math>'
  linearKernel = '<math><mrow><msub><mi>x</mi><mn>j</mn></msub><mi>x</mi></mrow></math>'
  polynomialKernel = '<math><msup><mrow><mo form="prefix" stretchy="false">(</mo><msub><mi>x</mi><mn>j</mn></msub><mi>x</mi><mo>+</mo><mi>c</mi><mo form="postfix" stretchy="false">)</mo></mrow><mi>d</mi></msup></math>'
  rbfKernel = rbfKernel
  quadraticKernel = '<math>'+this._kernel+'<mo>=</mo><msup><mrow><mo form="prefix" stretchy="false">(</mo><msub><mi>x</mi><mn>j</mn></msub><mi>x</mi><mo form="postfix" stretchy="false">)</mo></mrow><mi>2</mi></msup></math>'

  inputs = '<math display="block"><mi>x</mi></math>'
  features = '<math display="block"><mi>x</mi><mo>,</mo><msup class="label"><mi>x</mi><mn>2</mn></msup></math>'
  outputs = '<math display="block"><mi>y</mi></math>'

  // https://scikit-learn.org/stable/modules/svm.html?highlight=svm+rbf+gamma#kernel-functions

}
