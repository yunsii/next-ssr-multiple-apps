export interface IBasicLayoutProps {
  children: React.ReactNode;
}

export default function BasicLayout(props: IBasicLayoutProps) {
  const { children } = props;

  return (
    <div>
      <div>SSR 2 - Basic Layout</div>
      <hr />
      {children}
    </div>
  );
}
