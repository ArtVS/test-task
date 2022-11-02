import { NameValidatorDirective } from './name-validator.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AbstractControl, FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <form>
      <input name="name" type="text" ngModel appNameValidator />
    </form>
  `,
})
class TestComponent {}

describe('NameValidatorDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let comp: TestComponent;
  let debug: DebugElement;
  let input: DebugElement;
  let form: NgForm;
  let control: AbstractControl | null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestComponent, NameValidatorDirective],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    comp = fixture.componentInstance;
    debug = fixture.debugElement;
    input = debug.query(By.css('[name=name]'));

    fixture.detectChanges();
  });

  it("shouldn't validate inputs with numbers and signs", waitForAsync(() => {
    fixture.whenStable().then(() => {
      form = debug.children[0].injector.get(NgForm);
      control = form.control.get('name');
      input.nativeElement.value = 'My test price list 1';
      input.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      expect(form.control.valid).toEqual(false);
      expect(form.control.hasError('nameValid', ['name'])).toEqual(true);

      input.nativeElement.value = 'My test price list !';
      input.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      expect(form.control.valid).toEqual(false);
      expect(form.control.hasError('nameValid', ['name'])).toEqual(true);
    });
  }));

  it('should validate inputs with letters', waitForAsync(() => {
    fixture.whenStable().then(() => {
      form = debug.children[0].injector.get(NgForm);
      control = form.control.get('name');

      input.nativeElement.value = 'My test price list';
      input.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      expect(form.control.valid).toEqual(true);
      expect(form.control.hasError('nameValid', ['name'])).toEqual(false);
    });
  }));

  it('should validate inputs with non-latin letters', waitForAsync(() => {
    fixture.whenStable().then(() => {
      form = debug.children[0].injector.get(NgForm);
      control = form.control.get('name');

      input.nativeElement.value = 'תפוחים ולימונים';
      input.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      expect(form.control.valid).toEqual(true);
      expect(form.control.hasError('nameValid', ['name'])).toEqual(false);

      input.nativeElement.value = 'Яблоки и грибы';
      input.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      expect(form.control.valid).toEqual(true);
      expect(form.control.hasError('nameValid', ['name'])).toEqual(false);
    });
  }));

  it('should create an instance', () => {
    const directive = new NameValidatorDirective();
    expect(directive).toBeTruthy();
  });
});
