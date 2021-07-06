import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
     borderBottom:"1px solid white",
     display: "flex",
     justifyContent:"space-between",
     "&:active":{
      textShadow:"0px 0px 5px white"
    }
    },
  });

  export default useStyles