import React from 'react';
import SocialMediaBtn from './SocialMediaIcon';
import {render, cleanup} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';

afterEach(() => {
    cleanup(); 
})

describe("Component", () => {
    it("renders without crashing", async () => {
      const utils = render(<SocialMediaBtn />, {wrapper: MemoryRouter});
      expect(utils).toMatchSnapshot();
      expect(utils).toBeTruthy();
    });
})  