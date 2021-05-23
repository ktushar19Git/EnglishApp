import React from 'react'
import PlaceIcon from '@material-ui/icons/Place';
import headingbullet from '../../../images/righthand.jpg'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    //backgroundColor: theme.palette.background.paper,
  },
}));

function VerbExamples() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (

    <div class="section-outer-box bg-lightgray">
      <div class="label-heading">
        <img src={headingbullet}></img> Examples of Verbs
            </div>

      <div class="Content_desc">
        Click on the tabs below to find out more about verbs and a few examples:
            </div>

      <div class="section-inner-box">
        <div class="tabs-div">

          <AppBar position="static">
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Overview"  {...a11yProps(0)} />
              <Tab label="Examples" {...a11yProps(1)} />
              <Tab label="Illustrations"  {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} >
            <div class="tabs-div-panel">
              <b>A verb is known as a word that expresses an action or a state of being (linking verbs).</b>
              <p>Verbs can be used to describe an action, that's doing something. Whatever action we do, in English, that's known as a verb so any occurance or action word can be a verb. It is often extremely simple to identify verbs, if it is an action that people can do then that is a verb.</p>
            </div>

          </TabPanel>
          <TabPanel value={value} index={1} >
            <div class="tabs-div-panel">
              <ul >
                <li>Penny <b>walked</b> to school.</li>
                <li>Jordan <b>kicked</b> the football</li>
                <li>James <b>was</b> confused about his options.</li>
                <li>Lily <b>is</b> extremely sleepy.</li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div class="tabs-div-panel">
              This is illustrations tab
                    </div>
          </TabPanel>
        </div>
      </div>











    </div>


  )
}
export default VerbExamples
