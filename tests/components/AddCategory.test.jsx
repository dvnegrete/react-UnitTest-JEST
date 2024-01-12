import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory', () => {
    test('should change the value in box', () => {
        render(<AddCategory onNewCategory={ ()=>{} }/>);
        // <form>
        //   <input
        //     placeholder="Buscar gifs"
        //     type="text"
        //     value=""
        //   />
        // </form>
        const input = screen.getByRole('textbox');
        //fireEvent, es para generar eventos
        fireEvent.input(input, { target: { value:'Dragon' } })
        //screen.debug();
        expect( input.value ).toBe('Dragon');
    });

    test('should call onNewCategory if value on input', () => {
        const inputValue = 'House';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input( input, { target: { value:inputValue } });
        fireEvent.submit(form);
        expect(input.value).toBe('');
        
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('should not call onNewCategory if the input is empty', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory}/>);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNewCategory).not.toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(0);
    });
});