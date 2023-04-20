import React from 'react';
import Footer from './Footer';
import {render, cleanup} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';

afterEach(() => {
    cleanup(); 
})

describe("Component", () => {
    it("renders without crashing", async () => {
      const utils = render(<Footer />, {wrapper: MemoryRouter});
      expect(utils).toMatchSnapshot();
      expect(utils).toBeTruthy();
    });
})  