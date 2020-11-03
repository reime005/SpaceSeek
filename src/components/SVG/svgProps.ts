export interface SVGWrapperProps {
  width?: number;
  height?: number;
  scale?: number;
  fill?: string;
  color?: string;
}

export const defaultSVGProps: SVGWrapperProps = {
  width: 24,
  height: 24,
  scale: 1,
  fill: 'grey',
};

export const transformSVGProps = (props: SVGWrapperProps) => ({
  ...props,
  width: (props.width || 1) * (props.scale || 1),
  height: (props.height || 1) * (props.scale || 1),
});
