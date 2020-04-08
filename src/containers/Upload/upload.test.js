import React from 'react';
import { cleanup, render, queryByTestId, act } from '@testing-library/react';
import Upload from './upload.component';

let wrapper;
beforeEach(() => act(() => {
  const { container, debug } = render(
    <Upload />
  );
  wrapper = container;
  debug();
}
));

describe('Upload Page Render', () => {
  afterAll(cleanup);

  test('App renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });
  
  test('includes components to upload', () => {

    expect(queryByTestId(wrapper, "upload-input")).not.toBeNull();
    expect(queryByTestId(wrapper, "upload-button")).not.toBeNull();
    
  });

});
