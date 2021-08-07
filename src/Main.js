import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '250',
        marginLeft: '400px',
        marginRight: '360px',
        marginBottom: '25px',
        borderRadius: '4px',
    },
    contentStyling: {
        display: 'block', 
        alignItems: "center",
        justifyContent: "center",
        textAlign: "left",
        marginLeft: "400px",
        lineHeight: "1.5rem",
        fontSize: "18px",
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    titleStyling: {
        color: 'rgb(36 95 180)',
        textAlign: 'left',
        padding: '12px',
        fontSize: '1.65rem',
        letterSpacing: '0',
        fontFamily: ['Ubuntu'],
        fontWeight: '500',
    },

    collapseStyling1: {
        fontFamily: ['Ubuntu'],
        letterSpacing: '0',
        textAlign: 'left',
        lineHeight: '1.5rem',
        fontSize: '1.07rem',
        paddingLeft: '17px',
        paddingRight: '17px',
        fontWeight: '600',
        paddingTop: '12px',
    },

    collapseStyling2: {
        fontFamily: ['Ubuntu'],
        letterSpacing: '0',
        textAlign: 'left',
        lineHeight: '1.5rem',
        fontSize: '1.07rem',
        marginTop: '15px',
        marginBottom: '15px',
        paddingLeft: '80px',
        paddingRight: '17px',
        fontWeight: '400'
    },
    collapseStyling3: {
        fontFamily: ['Ubuntu'],
        letterSpacing: '0',
        textAlign: 'left',
        lineHeight: '1.5rem',
        fontSize: '1.07rem',
        marginTop: '15px',
        marginBottom: '15px',
        paddingLeft: '17px',
        paddingRight: '17px',
        fontWeight: '400'
    },
    collapseStyling4: {
      fontFamily: ['Ubuntu'],
      letterSpacing: '0',
      textAlign: 'left',
      lineHeight: '1.5rem',
      fontSize: '1.07rem',
      paddingLeft: '17px',
      paddingRight: '17px',
      paddingTop: '12px',
      fontWeight: '400',
      marginBottom: '15px'
  },
    
}))

const Main = () => {
  const classes = useStyles()
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);
  const [expanded4, setExpanded4] = React.useState(false);
  const [expanded5, setExpanded5] = React.useState(false);
  const [expanded6, setExpanded6] = React.useState(false);

  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };
  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };
  const handleExpandClick5 = () => {
    setExpanded5(!expanded5);
  };
  const handleExpandClick6 = () => {
    setExpanded6(!expanded6);
  };
  return (
    <React.Fragment>
      <Box 
        display="flex" 
        width={770} height={80} 
        alignItems="center"
        justifyContent="center"
        marginLeft="400px"
        marginTop="10px"
        fontSize="34px"
        fontWeight="500"
      >
        About Us
      </Box>


      <Box 
        width= {770}
        height= {120} 
        className={classes.contentStyling}>
        ETark is an automated complaint resolution platform for smartphone complaints. We help in resolving both technical and non-technical smartphone problems via. our service offerings. ETark was conceptualized after identifying the plight of hapless smartphone customers and the inefficiency of the service centers.
      </Box>


      <Box 
        width= {770}
        height= {30}
        className={classes.contentStyling}>
        How ETark helps customers?  
      </Box>


      <Box 
        width= {770}
        height= {30}
        display= "block"
        alignItems= "center"
        justifyContent= "center"
        textAlign= "center"
        marginLeft= "400px"
        marginTop= "28px"
        marginBottom="10px"
        lineHeight= "1.5rem"
        fontSize= "21px"  
        fontWeight="500"
      >
        Resolving technical problems : 
      </Box>


      <Box 
        width= {770}
        height= {90}
        className={classes.contentStyling}>
        Having a technical problem with your smartphone can be disastrous because unlike any other gadget, a smartphone lets you stay connected with the world and manage all your electronic records. The current approaches that a user usually takes :
      </Box>
      

      <Box>
        <div className={classes.gapStyling}>
        <Card className={classes.root}>
            <CardActions disableSpacing>
                <Typography className={classes.titleStyling}>
                    Visit an authorized service center
                </Typography> 
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded1,
                })}
                onClick={handleExpandClick1}
                aria-expanded={expanded1}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded1} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography variant="h6" className={classes.collapseStyling1}>
                    While an authorized service center is always recommended, but as a user, you don’t know if:
                </Typography>
                <Typography className={classes.collapseStyling2}>
                    A. Parts are available at the service center to service your device
                </Typography>
                <Typography className={classes.collapseStyling2}>
                    B. Your device would be considered within warranty by the service center
                </Typography>
                <Typography className={classes.collapseStyling2}>
                    C. The exact problem in your device and the price to be paid to fix that 
                </Typography>
                <Typography className={classes.collapseStyling3}>
                    All this demands you to visit the service center and wait in a queue with other customers which can often take hours with the possibility of parts not available or the device not considered within warranty by the service center or the quoted price of servicing out of your budget!
                </Typography>
                </CardContent>
            </Collapse>
        </Card>

        <Card className={classes.root}>
            
            <CardActions disableSpacing>
                <Typography className={classes.titleStyling}>
                    Visit an unauthorized service center
                </Typography> 
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded2,
                })}
                onClick={handleExpandClick2}
                aria-expanded={expanded2}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded2} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography variant="h6" className={classes.collapseStyling1}>
                  Although an unauthorized service center might seem light on your pocket, this route is never recommended because :
                </Typography>
                <Typography className={classes.collapseStyling2} component="ul">
                  • Due to the poor quality of servicing, they often result in frequent annual repairs for the same issue or some other problem thus making the actual cost of repair for that phone way higher than the cost of repair by an authorized service center
                </Typography>
                <Typography className={classes.collapseStyling2} component="ul">
                  • Your personal data could be retrieved from your device even if you have removed the same from your device. So due to low accountability of unauthorized service centers, data could be stolen from your device during servicing.
                </Typography>
                </CardContent>
            </Collapse>
        </Card>

        <Card className={classes.root}>
            
            <CardActions disableSpacing>
                <Typography className={classes.titleStyling}>
                Book for a home visit repair service
                </Typography> 
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded3,
                })}
                onClick={handleExpandClick3}
                aria-expanded={expanded3}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded3} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography variant="h6" className={classes.collapseStyling1}>
                Home visit repair services are quite popular nowadays due to the convenience of home repair that they promise but this should be avoided due to the following reasons:
                </Typography>
                <Typography className={classes.collapseStyling2} component="ul">
                  • Most of the home repair services don’t have any authorization from the device manufacture to provide servicing, thus the accountability and quality of servicing is low
                </Typography>
                <Typography className={classes.collapseStyling2} component="ul">
                  • Many a times your device demands a part replacement which may not be available for the home visit repair agent at that point and post their inspection of the device at your location, they might take your device to their service center thus causing an additional delay in the servicing of the device
                </Typography>
                </CardContent>
            </Collapse>
        </Card>

        <Card className={classes.root}>
            
            <CardActions disableSpacing>
                <Typography className={classes.titleStyling}>
                Device Insurance companies
                </Typography> 
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded4,
                })}
                onClick={handleExpandClick4}
                aria-expanded={expanded4}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded4} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography variant="h6" className={classes.collapseStyling1}>
                  Although device Insurance companies promise to insure your device from future damage or malfunctioning:
                </Typography>
                <Typography className={classes.collapseStyling4} >
                  They often result in long waiting time to get clearance from the smartphone manufacturer to get the ensuing servicing covered which offsets the cost savings that they promise through their insurance
                </Typography>
                <Typography className={classes.collapseStyling4}>
                  All these approaches have their own share of flaws.
                </Typography>
                <Typography className={classes.collapseStyling4}>
                  ETark firmly believes that the best way to solve any technical issue is through authorized service centers only provided the inefficiencies of the service centers are removed and the customer doesn’t have to go through any hassle. This is exactly where we step in and we ensure that both the customer and the service center are seamlessly connected!
                </Typography>
                </CardContent>
            </Collapse>
        </Card>
        </div>
      </Box>

      <Box 
        width= {770}
        height= {30}
        display= "block"
        alignItems= "center"
        justifyContent= "center"
        textAlign= "center"
        marginLeft= "400px"
        marginTop= "28px"
        marginBottom="10px"
        lineHeight= "1.5rem"
        fontSize= "21px"  
        fontWeight="500"
      >
        Resolving non-technical problems : 
      </Box>


      <Box 
        width= {770}
        height= {100}
        className={classes.contentStyling}>
          
        Problems like missing, damaged or duplicate items during purchase or Payment related issues like improper bill, wrongful deductions etc are some of the examples of non- technical problems that customers face.
      </Box>

 
      <Box 
        width= {770}
        height= {150}
        className={classes.contentStyling}>
        The ideal way to solve this is to reach out to the seller (e-commerce firm/ offline retailer) or the device manufacturer (e.g. Samsung, Apple etc.). However a customer’s voice can go unheard in a discussion with the other party. So to lend a strength to the customer’s voice, we do an instant analysis of his/ her complaint and share certain reports with him/ her which can help identify the merit of the complaint/ grievance.
      </Box>


      {/* Fifth Card */}
      <Box >
        <Card className={classes.root}>
            
            <CardActions disableSpacing>
                <Typography className={classes.titleStyling}>
                Chances of winning
                </Typography> 
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded5,
                })}
                onClick={handleExpandClick5}
                aria-expanded={expanded5}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded5} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography variant="h6" className={classes.collapseStyling4}>
                  Chances of winning tells you how likely you are to win in a consumer court had the complaint been filed there
                </Typography>
                <Typography className={classes.collapseStyling4} >
                  Or Alternatively,
                </Typography>
                <Typography className={classes.collapseStyling4}>
                  How likely you are to win in a negotiation with the other party (device manufacturer or seller) by quoting your winning chances in a consumer court as a reference
                </Typography>
                </CardContent>
            </Collapse>
        </Card>

        <Card className={classes.root}>
            
            <CardActions disableSpacing>
                <Typography className={classes.titleStyling}>
                Expected compensation
                </Typography> 
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded6,
                })}
                onClick={handleExpandClick6}
                aria-expanded={expanded6}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded6} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography variant="h6" className={classes.collapseStyling4}>
                Expected compensation tells you what compensation (free servicing, product/ part replacement or monetary compensation) you are likely to get from the other party had your complaint been filed in a consumer court
                </Typography>
                <Typography className={classes.collapseStyling4} >
                  Or Alternatively,
                </Typography>
                <Typography className={classes.collapseStyling4}>
                  what compensation (free servicing, product/ part replacement) you are likely to get from the other party in a negotiation
                </Typography>
                </CardContent>
            </Collapse>
        </Card>
      </Box>
    </React.Fragment>
  )
}
export default Main;