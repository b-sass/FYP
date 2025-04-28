import "../../styles/ui/button.module.css";

let Button = ({title, onClick}: {title: string, onClick: () => void}) => {
  return(
  <>
    <button onClick={onClick}>{title}</button>
  </>
  );
}

export default Button;