import React, { Component, PropTypes } from 'react';

class ScaleText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 1,
    };
  }
  componentDidUpdate() {
    const width = this.node.offsetWidth;
    const parentWidth = this.node.parentNode.offsetWidth;
    const scale = (parentWidth / width >= 1) ? 1 : (parentWidth / width);

    if (this.state.scale === scale) { return; }

    // eslint-disable-next-line
    this.setState({ scale });
  }
  render() {
    return (
      <div
        className="display__scaled-result"
        style={{
          transform: `scale(${this.state.scale})`,
        }}
        ref={(node) => { this.node = node; }}
      >{this.props.children}</div>
    );
  }
}

ScaleText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScaleText;
