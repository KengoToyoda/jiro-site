import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Form } from './Form';
import { ListMyjiro } from './List';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

//Material Ui Function
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
        <Box p={2}>
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
    backgroundColor: theme.palette.background.paper,
  },
}));

function Myjiro() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [myjiros, setMyjiros] = useState([]);
    const [notMyjiros, setNotMyjiros] = useState([]);
    let csrf_token = document.head.querySelector('meta[name="csrf-token"]').content;
    const csrf  = { csrf_token: csrf_token }
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    const setMyjiro = (myjiro) => {
        setMyjiros(myjiro);
    }
    
    const deletemyjiroFanc = (id) => {
        setMyjiros(myjiros.filter(myjiro => myjiro.id !== id))
    }

    useEffect(() => {
        axios
        .get('/myjiro')
        .then(response => {
            setMyjiros(response.data.myjiros);
            // console.log(response.data.notMyjiros);
            // console.log(response.data.myjiros);
            setNotMyjiros(response.data.notMyjiros);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])
    
    return(
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
              <Tab label="二郎スタンプラリー" {...a11yProps(0)} />
              <Tab label="Myjiro追加" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <ListMyjiro myjiros={myjiros} notMyjiros={notMyjiros} onDeleteMyjiro={deletemyjiroFanc} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Form onSetMyjiro={setMyjiro} Myjiros={myjiros} />
          </TabPanel>
        </div>
    )
}
export default Myjiro;

if (document.getElementById('myjiro')) {
  ReactDOM.render(<Myjiro />, document.getElementById('myjiro'));
}