import { render, screen } from '@testing-library/react'; 

import HeadlineMain from '../Components/HeadlineMain'; 

describe('HeadlineMain tests', () => {
    it('should render the text supplied through props', () => {
        const sampleText = `Sample Text`; 
        render(<HeadlineMain headlines={sampleText} />);
        
        const sampleMain = screen.getByText(sampleText); 
        expect(sampleMain.textContent).toBe(sampleText); 

    }); 
}); 