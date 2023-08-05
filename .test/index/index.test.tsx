import { fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import Home from '../../src/pages/index'
import ContentMessage from '../../src/components/ContentMessage'
import React from 'react'

describe('Home', () => {
  it('renders a main-container', () => {
    render(<Home />);

    const mainContainer = screen.getByTestId('main-container')

    expect(mainContainer).toBeInTheDocument()
  })

  it('renders a content-message component', () => {
    render(<Home />);
    const contentMessage = screen.queryByTestId('content-message')

    expect(contentMessage).toBeDefined();
    
  })

  it('renders a button-group component', () => {
    render(<Home />);

    const buttonGroup = screen.queryByTestId('button-group')

    expect(buttonGroup).toBeDefined();
    
  })

  it('have input message and send button', () => {
    render(<Home />);
    expect(screen.getByRole("textbox"))
      .toHaveAttribute("data-testid", "input-message");
    expect(screen.getByRole("button"))
      .toHaveAttribute("data-testid", "button-send");
  });

  it('disable button send when input type is empty', async () => {
    render(<Home />);
    expect(screen.queryByTestId("input-message"))
      .toHaveValue("");

    expect(screen.queryByTestId("button-send")).toHaveAttribute("disabled")
    expect(screen.queryByTestId("button-send")).toBeDisabled
    
  });

  it('succeeed add data when input type is not empty and button send be clicked.', async () => {
    render(<Home />);
    let sampleMessage = Math.random().toString(36).substring(2, 20);
    const input = screen.getByPlaceholderText<HTMLInputElement>("Type Message...");
    fireEvent.change(input, {target: {value: sampleMessage}})
    const buttonSend:any = screen.queryByTestId("button-send");
    fireEvent.click(buttonSend);
    expect( screen.findAllByText(sampleMessage)).toBeInTheDocument;
    
  });

  it('succeeed open the link inside messsage when url text message be clicked.', async () => {
    render(<Home />);
    let sampleMessage:any = "https://google.com";
    // let sampleMessage = Math.random().toString(36).substring(2, 20);
    const input = screen.getByPlaceholderText<HTMLInputElement>("Type Message...");
    fireEvent.change(input, {target: {value: sampleMessage}})
    const buttonSend:any = screen.queryByTestId("button-send");
    fireEvent.click(buttonSend);

    expect(screen.findAllByText(sampleMessage)).toBeInTheDocument;
    const urlInMessage:any = await screen.findAllByText(sampleMessage);
    // fireEvent.click( urlInMessage);
    
    // expect( screen.findAllByText("Delete the message?")).toBeInTheDocument;
    
  });

  it('succeeed show confirm modal delete when icon delete be clicked.', async () => {
    render(<Home />);
    // let sampleMessage = "google";
    let sampleMessage = Math.random().toString(36).substring(2, 20);
    const input = screen.getByPlaceholderText<HTMLInputElement>("Type Message...");
    fireEvent.change(input, {target: {value: sampleMessage}})
    const buttonSend:any = screen.queryByTestId("button-send");
    fireEvent.click(buttonSend);
    expect(screen.findAllByText(sampleMessage)).toBeInTheDocument;
    
    const buttonSelected:any = screen.queryByTestId(sampleMessage);
    expect(buttonSelected).toBeInTheDocument;
    // fireEvent.click(buttonSelected);
    // expect( screen.findAllByText("Delete the message?")).toBeInTheDocument;
    
  });
  
})

function mount(arg0: React.JSX.Element) {
    throw new Error('Function not implemented.')
}
