// NOTE: This is the type of props that you can pass to this component
type Props = {
  className?: string;
};

// NOTE: This is the component that you can use in your page
export const Gap = ({ className }: Props) => {
  return <div className={className ? className : `mt-14 md:mt-20 lg:mt-24`} />;
};

// NOTE: This is the default data that you can use to test this component
Gap.defaultProps = {
  className: `mt-14 md:mt-20 lg:mt-24`,
};
