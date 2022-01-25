const Footer = () => {
  const today = new Date();
  return (
    <footer>
      <div className="container">
        <p>Copyright &copy; {today.getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer