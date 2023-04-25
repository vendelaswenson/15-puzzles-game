import React from 'react';
import SocialMediaBtn from './SocialMediaIcon';
import {render, cleanup, screen} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'

afterEach(() => {
    cleanup(); 
})

describe("Component", () => {
    it("renders without crashing", async () => {
      const utils = render(<SocialMediaBtn />, {wrapper: MemoryRouter});
      const image = screen.getByAltText("github icon")
      expect(utils).toMatchSnapshot();
      expect(utils).toBeTruthy();
      expect(image).toHaveAttribute('src')
    });
})  