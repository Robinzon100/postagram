import { CSSProperties, FC } from "react";
import { colorStyles, sizeStyles, defaultStyles } from "./Button.styles";

interface buttonInterface {
  color?: "yellow" | "black" | "blue";
  size?: "large" | "medium" | "small";
  width?: string;
  onClick?: () => void;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

const Button: FC<buttonInterface> = ({
  children,
  color,
  size,
  width,
  onClick,
  className,
  id,
  style,
}) => {
  return (
    <>
      <div className={`btn ${className}`} style={style} onClick={onClick} id={id}>
        <p
          className={`${size ? sizeStyles[size].fontSizeClass : defaultStyles.fontSizeClass} f-weight-bo`}>
          {children}
        </p>
      </div>






      <style jsx>{`
        .btn {
          margin-left: 8px;
          display: inline-flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          border-radius: 12px;
          position: relative;
          cursor: pointer;
          transition: box-shadow 0.15s ease;
          user-select: none;
          width: ${width && width};
          padding: ${size ? sizeStyles[size].padding : defaultStyles.padding};
          background: ${color ? colorStyles[color].bg : defaultStyles.bg};
          border: ${color ? colorStyles[color].border : defaultStyles.border};
        }

        .btn p {
          color: var(--primary-white);
        }
        .btn:after {
            content:"";
            position:absolute;
            width:105%;
            height:118%;
            background: linear-gradient(141deg, ${colorStyles[color].bg} -4.61%, rgba(255, 217, 0, 0) 27.07%);
            border-radius:12px;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 50%;
        }
      `}</style>
    </>
  );
};

export default Button;
