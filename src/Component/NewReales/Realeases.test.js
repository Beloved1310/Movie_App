import {  render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { movieDetailsResponse } from '../../mock/respomse.mock';
import Realeases from './Realeases';



describe('Test Home Details Page component', () => {
  test('Render component without crashing', () => {
    render(<Realeases />, {wrapper:MemoryRouter})
  });
 
    test('Check Movie List Data', async()=>{
      jest.spyOn(window, 'fetch').mockImplementationOnce(()=>Promise.resolve(movieDetailsResponse))
       render(<Realeases />, {wrapper:MemoryRouter})
      expect(screen.getAllByTestId('movie-item')).toBeDefined()
    })

})