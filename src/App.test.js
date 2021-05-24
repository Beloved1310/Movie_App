import { render } from '@testing-library/react';
import App from './App';


describe('Application Block',()=>{

test('to render movie app without crashing', () => {
  render(<App />);
});
})

