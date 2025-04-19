let Button = ({title}: {title: string}) => {
  return(
  <>
    <button style={styles.buttonItem}>{title}</button>
  </>
  );
}

let styles = {
  buttonItem: {
      "width": "80%",
  },
}

export default Button;