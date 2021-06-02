import { render, screen } from '@testing-library/react';
import Homedetail from '../Homedetail';
import { MemoryRouter } from 'react-router-dom';
import { movieDetailsResponse } from '../../../mock/respomse.mock';


describe('Test Home Details Page component', () => {
  test('Render component without crashing', () => {
    render(<Homedetail />, { wrapper: MemoryRouter })
  });
  test('Check for Loading state', () => {
    render(<Homedetail />, { wrapper: MemoryRouter })
    expect(screen.getByText(/Fetching Movies/i)).toBeInTheDocument()
    screen.debug()
  });

  describe('Api Data Fetching', () => {
    test('Check for Error State', async () => {
      jest.spyOn(window, 'fetch').mockImplementationOnce(() => Promise.reject('error'))
      render(<Homedetail />, { wrapper: MemoryRouter })
      expect(await screen.findByText(/Couldn't Fetch Movies try again./i)).toBeInTheDocument()
      screen.debug()
    })
    test('Check Movie List Data', async () => {
      jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
        return Promise.resolve({
          json: () => Promise.resolve(movieDetailsResponse),
        })

      })
      render(<Homedetail />, { wrapper: MemoryRouter })
      expect(screen.queryByTestId('movie-item')).toBe(null)
      screen.debug()
    })
  })

})