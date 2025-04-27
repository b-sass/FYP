let Button = ({title, onClick}: {title: string, onClick: () => void}) => {
  return(
  <>
    <button style={styles.buttonItem} onClick={onClick}>{title}</button>
  </>
  );
}

let styles = {
  buttonItem: {
      "width": "80%",
  },
}

export default Button;