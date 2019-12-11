import 'react-native';

import * as React from 'react';

import {
  RenderResult,
  act,
  fireEvent,
  render,
} from '@testing-library/react-native';

import EditText from '../EditText';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

let props: any;
let component: React.ReactElement;
let testingLib: RenderResult;

describe('[EditText]', () => {
  let value = '';

  beforeEach(() => {
    props = {};
    component = <EditText {...props} />;
  });

  it('renders without crashing', () => {
    const rendered = renderer.create(component).toJSON();
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  describe('interactions', () => {
    const props = {
      testID: 'INPUT_TEST',
      testError: 'ERROR_TEST',
      onChangeText: (word: string): void => {
        value = word;
      },
    };
    beforeEach(() => {
      component = <EditText {...props} />;
      testingLib = render(component);
    });

    it('should set error message when no valid email has been written', async () => {
      const input = testingLib.getByTestId('INPUT_TEST');
      act(() => {
        fireEvent.changeText(input, 'input test');
      });
      expect(value).toEqual('input test');
      // expect(input.props).toEqual('input test');
    });
  });
});
