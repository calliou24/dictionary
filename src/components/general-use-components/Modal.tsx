import { CSSProperties } from "react";

type ModalPropsTypes = {
  customStyles?: CSSProperties;
  customClassNames?: string;
  children: React.ReactNode;
};

export default function Modal({
  children,
  customStyles = {},
  customClassNames = "",
}: ModalPropsTypes) {
  return (
    <section
      className={`fixed grid place-items-center top-0 left-0 w-screen h-screen bg-black bg-opacity-20 ${customClassNames}`}
      style={{ ...customStyles }}
    >
      {children}
    </section>
  );
}
