import React from 'react';
import PropTypes from 'prop-types';

const AxisLabels = ({ svgHeight, xLabelSize, yLabelSize, getY, className }) => {
  const padding = 5;
  return (
    <g className={className}>
      {/* Y AXIS LABELS */}
      <text transform={`translate(${yLabelSize / 2}, 20)`} textAnchor="middle">
        {`${getY().max} PPM`}
      </text>
      <text
        transform={`translate(${yLabelSize / 2}, ${svgHeight -
          xLabelSize -
          padding})`}
        textAnchor="middle"
      >
        {`${getY().min} PPM`}
      </text>
    </g>
  );
};
AxisLabels.propTypes = {
  getY: PropTypes.func.isRequired,
  svgHeight: PropTypes.number.isRequired,
  xLabelSize: PropTypes.number.isRequired,
  yLabelSize: PropTypes.number.isRequired,
  data: PropTypes.array, //eslint-disable-line
  className: PropTypes.string,
};
AxisLabels.defaultProps = {
  className: 'linechart_label',
  xLabelSize: 20,
  yLabelSize: 80,
};
export default AxisLabels;
