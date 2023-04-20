import React from 'react';
import BoxBoard from './BoxBoard';
import {render, cleanup} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';

afterEach(() => {
    cleanup(); 
})

describe("Component", () => {
    it("renders without crashing", async () => {
      const utils = render(<BoxBoard />, {wrapper: MemoryRouter});
      expect(utils).toBeTruthy();
    });
})  