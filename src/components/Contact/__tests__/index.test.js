import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact is rendering', () => {
    it('renders', () => {
        render(<Contact />);
    });
    it('renders', () => {
        const {asFragment} = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Form labels', () => {
    it('has contact me title', () => {
        // Arrange
        const {getByTestId} = render(<Contact/>);
        // Assert
        expect(getByTestId('contact')).toHaveTextContent('Contact me');
    });
    it('has submit button label', () => {
        // Arrange
        const {getByTestId} = render(<Contact/>);
        // Assert
        expect(getByTestId('button')).toHaveTextContent('Submit');
    });
});