import Icons from "./Icons"

const PrintUser = ({user}) => {
    return (
      <>
          <img src={user.avatar_url} alt={user.name} />
          <br />
          <h1>{user.name} Jonušienė</h1>
          <br />
          <h2>FrontEnd Junior</h2>
          <br />
          <p>{user.bio}</p>

          <Icons/>
      </>     
    )
  }
  
  export default PrintUser