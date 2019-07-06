import * as React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { createStore } from 'redux';
import { mount } from 'enzyme';
import Login from '../../components/Login';
import LoginContainer from '../LoginContainer';

describe('LoginContainer', () => {
  const wrapper = mount(
    <Provider store={createStore(() => ({}))}>
      <MemoryRouter initialEntries={['/unknown']}>
        <LoginContainer luminusCode={'This is my code'} />
      </MemoryRouter>
    </Provider>
  );
  const container = wrapper.find(LoginContainer);
  const component = container.find(Login);

  test('should render both the container and the component ', () => {
    expect(container.length).toBeTruthy();
    expect(component.length).toBeTruthy();
  });

  test('should map state to props', () => {
    const expectedPropKeys = ['luminusCode'];

    expect(Object.keys(component.props())).toEqual(expect.arrayContaining(expectedPropKeys));
  });

  test('should map dispatch to props', () => {
    const expectedPropKeys = ['handleFetchAuth', 'handleLogin'];

    expect(Object.keys(component.props())).toEqual(expect.arrayContaining(expectedPropKeys));
  });
});
