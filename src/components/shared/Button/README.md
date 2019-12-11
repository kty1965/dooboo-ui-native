# Button

- [![Npm Version](http://img.shields.io/npm/v/@dooboo-ui/native-button.svg?style=flat-square)](https://npmjs.org/package/@dooboo-ui/native-button)
- [![Downloads](http://img.shields.io/npm/dm/@dooboo-ui/native-button.svg?style=flat-square)](https://npmjs.org/package/@dooboo-ui/native-button)


> [Button] component that can be used inside product. Has basic features like `loading` state, `disabled` state and also has ability to put `img` to left-hand which is used very often.

![image](https://user-images.githubusercontent.com/27461460/62291727-9be84100-b49f-11e9-8ce5-ceaa1dc3153e.png)


## Props

|                | necessary | types                | default |
| -------------- | --------- | -------------------- | ------- |
| testID         |           | string               |         |
| style          |           | ViewStyle            |         |
| textStyle      |           | TextStyle            |         |
| dark           |           | boolean              |         |
| inverted       |           | boolean              |         |
| isLoading      |           | boolean              |         |
| isDisabled     |           | boolean              |         |
| iconLeft       |           | ReactElement         |         |
| iconRight      |           | ReactElement         |         |
| indicatorColor |           | string               |'#ffffff'|
| activeOpacity  |           | number               |   0.5   |
| children       |           | string, ReactElement |         |
| text           |           | string               |         |
| onClick        |           | func                 |         |

## Installation

```sh
yarn add @dooboo-ui/native
```

or

```sh
yarn add @dooboo-ui/native-button
```

## Getting started

- Import

  ```javascript
  import { Button } from '@dooboo-ui/native';
  ```

- Usage
  - with `StyleSheet`
  ```jsx
  <Button
    testID="sampleButton"
    style={{
      backgroundColor: 'red',
      borderColor: 'blue',
    }}
    textStyle={{
      color: 'white',
    }}
    onClick={(): void => {}}
  >
    Sample button
  </Button>
  ```
  ```jsx
  <Button
    testID="sampleButton"
    style={{
      backgroundColor: 'red',
      borderColor: 'blue',
    }}
    onClick={(): void => {}}
  >
    <SampleText>Sample button</SampleText>
  </Button>
  ```

  - with `styled-components`
  ```jsx
  const SampleButton = styled(Button)`
    width: 136px;
    height: 60px;
    background-color: black;
    border-color: red;
    border-width: 1px;
  `;
  const SampleText = styled.Text`
    color: white;
  `;
  <SampleButton
    testID="sampleButton"
    textStyle={{
      color: 'white',
    }}
    onClick={(): void => {}}
  >
    Sample button
  </SampleButton>
  ```
  ```jsx
  const SampleButton = styled(Button)`
    width: 136px;
    height: 60px;
    background-color: black;
    border-color: red;
    border-width: 1px;
  `;
  const SampleText = styled.Text`
    color: white;
  `;
  <SampleButton
    testID="sampleButton"
    onClick={(): void => {}}
  >
    <SampleText>Sample button</SampleText>
  </SampleButton>
  ```

  - example
  ```jsx
  function Page(props: Props) {
    return (
      <Container>
        <Button
          testID="btn"
          isLoading={false}
          onClick={() => {}}
        >
          😀 😎 👍 💯
        </Button>
        <Button
          style={{
            marginVertical: 40,
          }}
          isDisabled={true}
          onClick={() => {}}
        >
          This is disabled!!
        </Button>
        <Button
          testID="btnGoogle"
          iconLeft={<Image source={IC_GOOGLE} />}
          isLoading={googleLoading}
          indicatorColor="#023059"
          onClick={() => {
            setGoogleLoading(true);
            const timeout = setTimeout(() => {
              setGoogleLoading(false);
              clearTimeout(timeout);
            }, 2000);
          }}
        >
          GOOGLE SIGN IN
        </Button>
        <Button
          testID="btnFacebook"
          iconLeft={<Image source={IC_FACEBOOK} />}
          indicatorColor="#023059"
          isLoading={facebookLoading}
          style={{
            marginTop: 40,
            backgroundColor: '#ccc',
            borderWidth: 0.5,
            borderRadius: 0,
          }}
          onClick={() => {
            setFacebookLoading(true);
            const timeout = setTimeout(() => {
              setFacebookLoading(false);
              clearTimeout(timeout);
            }, 2000);
          }}
        >
          FACEBOOK SIGN IN
        </Button>
      </Container>
    );
  }
  ```