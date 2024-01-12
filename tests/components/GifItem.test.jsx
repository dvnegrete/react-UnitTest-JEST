import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem />', ()=>{
  const title = 'Pruebas de Gif';
  const url = 'https://gift-pruebas.com.mx/prueba.jpeg';
  
  test('should has match with the snapshot', ()=>{
    const { container } =  render(<GifItem title={ title } url={ url }/>);
    expect(container).toMatchSnapshot();
  });

  test('should show img with URL and ALT right', ()=>{
    render(<GifItem title={ title } url={ url }/>);
    //screen.debug();
    // expect( screen.getByRole('img').src).toBe(url);
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });
  
  test('shoul title in element p', ()=>{
    render(<GifItem title={ title } url={ url }/>);
    expect( screen.getByText(title) ).toBeTruthy();

  });

});