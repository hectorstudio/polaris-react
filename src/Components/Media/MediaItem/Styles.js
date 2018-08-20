import styled from 'styled-components';

export const VideoWrap = styled.article`
    width: 600px;
    float: left;
`;

export const SelectStyle = {
  option: (base, state) => ({
    ...base,
    borderBottom: '1px dotted pink',
    color: state.isFullscreen ? 'red' : 'blue',
    padding: 20,
  }),
  control: () => ({
    // none of react-selects styles are passed to <View />
    width: 200,
    background: '#FFF',
  }),
  singleValue: (base, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return {
      ...base,
      color: '#000',
      opacity,
      transition,
    };
  },
};
