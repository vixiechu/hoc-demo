import genericStyles from '../styles/genericStyles';

const translateProps = (props) => {
  let _styles = {...genericStyles.default}
  switch(true) {
    case props.disabled: 
    _styles = {..._styles, ...genericStyles.disabled};
    break;
    case props.lighten:
    _styles = {..._styles, ...genericStyles.lighten};
    break;
    case props.darken:
      _styles = {..._styles, ...genericStyles.darken};
      break;
      default: 
      _styles = {..._styles};
  }

  const newProps = {...props, styles:_styles}
  return newProps;
}

export default (WrappedComponent) => {
  return function wrappedRender(args) {
    return WrappedComponent(translateProps(args));
  }
}