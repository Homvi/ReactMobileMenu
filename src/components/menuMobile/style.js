import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  menuContainer:{
    width:"70%",
    marginTop:"10vh",
    borderRadius:"10px"

  },
    menuItem:{
      borderBottom: "1px solid white",
      display: "flex",
      alignItems:"center",
      marginTop:"5px",
      width:"100%",
      "&:active":{
        textShadow:"0px 0px 1px white"
      }
    },
    menuIcon:{
      margin: "6px",
      width: "20%",
      display: "flex",
      justifyContent:"center",
      
    },
    menuTyp:{
      margin: "6px",
      width: "80%",
      display: "flex",
      justifyContent:"flex-start",
      
    },
  });

  export default useStyles