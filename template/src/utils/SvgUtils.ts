export function drawArc(
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number,
  largeArcFlag?: '0' | '1'
) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);

  const largeArcFlagFinal = largeArcFlag ?? (endAngle - startAngle <= 180 ? '0' : '1');

  const d = [
    'M',
    start.x,
    start.y,
    'A',
    radius,
    radius,
    0,
    largeArcFlagFinal,
    0,
    end.x,
    end.y
  ].join(' ');

  return d;
}

export function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

export function polarToCartesianWorklet(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
) {
  'worklet';
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}
