import { AppComponent } from './app.component';

//import { expect, test } from '@jest/globals';
import { beforeEach, expect, test } from 'bun:test';

test('Example', () => {
  expect(1).toBe(1);
});

let component$!: AppComponent;

beforeEach(() => {
  component$ = new AppComponent();
});

test('AppComponent have specific title', () => {
  expect(component$).not.toBeNull();
  expect(component$.title).toBe('shell');
});
