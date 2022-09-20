import React, { useRef, useState, useEffect } from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import { Box, height } from '@mui/system';
import { Button } from '@mui/material';
import { Grid, TextField } from '@material-ui/core';
import axios from 'axios'
import fileDownload from 'js-file-download'

var PRIMARY_COLOR = 'black';
var PRIMARY_COLOR2 = 'white';

export default function App() {
  const Styles = useStyles();

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");


  const _onSubmitClick = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (Name == "") {
      alert("Please Enter Your Name")
    } else if (reg.test(Email) === false) {
      alert("Invalid Email Address")
    } else if (Message == "") {
      alert("Please enter a message")
    } else {
      setEmail("");
      setName("");
      setMessage("");
      alert("Success!")
    }
  }

  const _handleDownload = (url, filename) => {
    axios.get(url, {
      responseType: 'blob',
    })
      .then((res) => {
        fileDownload(res.data, filename)
      })
  }



  const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView()

  const PortfolioRef = useRef(null)
  const executePortfolioScroll = () => PortfolioRef.current.scrollIntoView()

  const ContactRef = useRef(null)
  const executeContactScroll = () => ContactRef.current.scrollIntoView()

  const ResumeRef = useRef(null)
  const executeResumeScroll = () => ResumeRef.current.scrollIntoView()

  return (
    <>
      <div className={Styles._navBarMain}>
        <div className={Styles._navLeft}>
          <h2 className={Styles._nameText}>Your Name</h2>
        </div>
        <div className={Styles._navRight}>
          <div onClick={() => executeScroll()} className={Styles._navBtn}>
            <h3 className={Styles._btnText}>About Me</h3>
          </div>
          <div onClick={() => executePortfolioScroll()} className={Styles._navBtn}>
            <h3 className={Styles._btnText}>Portfolio</h3>
          </div>
          <div onClick={() => executeContactScroll()} className={Styles._navBtn}>
            <h3 className={Styles._btnText}>Contact</h3>
          </div>
          <div onClick={() => executeResumeScroll()} className={Styles._navBtn}>
            <h3 className={Styles._btnText}>Resume</h3>
          </div>
        </div>
      </div>

      <div className={Styles._aboutMain} ref={myRef}>
        <div className={Styles._titleMain}>
          <p className={Styles._titleText} >About Me</p>
        </div>
        <div className={Styles._contentMain}>
          <img src={require("./man.png")} width={"16%"} height={"16%"} />
          <p className={Styles._bioText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className={Styles._break}></div>
      </div>

      <div className={Styles._portfolioMAin} ref={PortfolioRef}>
        <div className={Styles._titleMain}>
          <p className={Styles._titleText} >Portfolio</p>
        </div>
        <div className={Styles._contentMainPortfolio} >

          <div className={Styles._portfolioCardMAin} >
            <img src={require("./clipboard.png")} width={"68%"} height={"44%"} />
            <div className={Styles._portfolioBtnsMAin}>
              <div className={Styles.portfolioBtn}>
                <h3 className={Styles._btnTextColor}>Live</h3>
              </div>

              <div className={Styles.portfolioBtn}>
                <h3 className={Styles._btnTextColor}>See On GitHub</h3>
              </div>
            </div>
          </div>

          <div className={Styles._portfolioCardMAin} >
            <img src={require("./clipboard.png")} width={"68%"} height={"44%"} />
            <div className={Styles._portfolioBtnsMAin}>
              <div className={Styles.portfolioBtn}>
                <h3 className={Styles._btnTextColor}>Live</h3>
              </div>

              <div className={Styles.portfolioBtn}>
                <h3 className={Styles._btnTextColor}>See On GitHub</h3>
              </div>
            </div>
          </div>

          <div className={Styles._portfolioCardMAin}>
            <img src={require("./clipboard.png")} width={"68%"} height={"44%"} />
            <div className={Styles._portfolioBtnsMAin}>
              <div className={Styles.portfolioBtn}>
                <h3 className={Styles._btnTextColor}>Live</h3>
              </div>

              <div className={Styles.portfolioBtn}>
                <h3 className={Styles._btnTextColor}>See On GitHub</h3>
              </div>
            </div>
          </div>
          <div className={Styles._portfolioCardMAin}>
            <img src={require("./clipboard.png")} width={"68%"} height={"44%"} />
            <div className={Styles._portfolioBtnsMAin}>
              <div className={Styles.portfolioBtn}>
                <h3 className={Styles._btnTextColor}>Live</h3>
              </div>

              <div className={Styles.portfolioBtn}>
                <h3 className={Styles._btnTextColor}>See On GitHub</h3>
              </div>
            </div>
          </div>
          <div className={Styles._portfolioCardMAin}>
            <img src={require("./clipboard.png")} width={"68%"} height={"44%"} />
            <div className={Styles._portfolioBtnsMAin}>
              <div className={Styles.portfolioBtn}>
                <h3 className={Styles._btnTextColor}>Live</h3>
              </div>

              <div className={Styles.portfolioBtn}>
                <h3 className={Styles._btnTextColor}>See On GitHub</h3>
              </div>
            </div>
          </div>
          <div className={Styles._portfolioCardMAin}>
            <img src={require("./clipboard.png")} width={"68%"} height={"44%"} />
            <div className={Styles._portfolioBtnsMAin}>
              <div className={Styles.portfolioBtn}>
                <h3 className={Styles._btnTextColor}>Live</h3>
              </div>

              <div className={Styles.portfolioBtn}>
                <h3 className={Styles._btnTextColor}>See On GitHub</h3>
              </div>
            </div>
          </div>


        </div>
        <div className={Styles._break}></div>
      </div>

      <div className={Styles._aboutMain} ref={ContactRef}>
        {/* <div className={Styles._titleMain}>
            <p className={Styles._titleText} >Contact Me</p>
          </div>
          <div className={Styles._contactContentMain}>
            <TextField value={Name} onChange={(text) => setName(text.target.value)} style={{ width: "50%", marginBottom: "2%" }} label="Name" variant="outlined" />
            <TextField value={Email} onChange={(e) => setEmail(e.target.value)} style={{ width: "50%", marginBottom: "2%" }} label="Email" variant="outlined" />
            <TextField value={Message} onChange={(text) => setMessage(text.target.value)} style={{ width: "50%", marginBottom: "2%" }} label="Message" variant="outlined" />
            <div onClick={() => _onSubmitClick()} style={{ width: "50%", marginBottom: "4%" }} className={Styles.portfolioBtn}>
              <h3 className={Styles._btnTextColor}>Submit</h3>
            </div>

          </div> */}
      </div>
      <Typography className={Styles._titleText} align="center">Contact Me</Typography>
      <Grid container spacing={2} style={{ padding: "20px" }} justifyContent="center">
        <Grid item xs={12} sm={12} md={12} lg={7}>
          <TextField value={Name} onChange={(text) => setName(text.target.value)} label="Name" variant="outlined" fullWidth={true} />

        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={7}>
          <TextField value={Email} onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" fullWidth={true} />

        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={7}>
          <TextField value={Message} onChange={(text) => setMessage(text.target.value)} label="Message" variant="outlined" fullWidth={true} />

        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={7} style={{ display: "flex", justifyContent: "center", }}>
          <Button onClick={() => _onSubmitClick()} variant='contained' style={{ backgroundColor: "black", borderRadius: "10px" }}>Submit</Button>
        </Grid>
      </Grid>
      <div className={Styles._resumeMain} ref={ResumeRef}>
        <div className={Styles._titleMain}>
          <p className={Styles._titleText} >Resume</p>
        </div>
        <div style={{ paddingBottom: "5%" }} className={Styles._contentMain}>
          <div onClick={() => _handleDownload(require("./MyResume.pdf"), "MyResume.pdf")} style={{ width: "20%" }} className={Styles.portfolioBtn}>
            <h3 className={Styles._btnTextColor}>Download My Resume</h3>
          </div>
        </div>
        <div className={Styles._break}></div>
      </div>

    </>
  )
}

const useStyles = makeStyles((theme) => ({
  _mainContainer: {
    // display: "flex",
    // flex: 1,
    width: "100%",
    // height: 1500,
    backgroundColor: "white",
  },
  _navBarMain: {
    // width: "100%",
    height: 57,
    backgroundColor: "blue",
    position: "-webkit - sticky", /* Safari & IE */
    position: "sticky",
    top: 0,
    display: "flex",
    flexDirection: "row"
  },
  _navLeft: {
    width: "40%",
    height: "100%",
    backgroundColor: PRIMARY_COLOR,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  _navRight: {
    width: "60%",
    height: "100%",
    background: PRIMARY_COLOR,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  _nameText: {
    fontFamily: "monospace",
    color: PRIMARY_COLOR2,
    [theme.breakpoints.down("xs")]: {
      fontSize: "75%"
    }
  },
  _navBtn: {
    width: "23%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: PRIMARY_COLOR,
    '&:hover': {
      backgroundColor: "darkgray",
      borderRadius: 6,
    },
    "cursor": "pointer"
  },
  _btnText: {
    fontFamily: "monospace",
    color: PRIMARY_COLOR2,
    fontSize: "140%",
    [theme.breakpoints.down("xs")]: {
      fontSize: "70%"
    }
  },
  _aboutMain: {
    width: "100%",
    // height: 400,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // alignItems:"center",
    paddingTop: "2%",
    flexDirection: "column"
  },
  _titleMain: {
    width: "80%",
    height: "13%",
    // backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  _titleText: {
    fontFamily: "monospace",
    color: PRIMARY_COLOR,
    fontSize: "200%",
    fontWeight: "bold",
    textDecorationLine: 'underline',
    [theme.breakpoints.down("xs")]: {
      fontSize: "85%"
    }
  },
  _contentMain: {
    width: "80%",
    height: "90%",
    // backgroundColor: "purple",
    justifyContent: "space-around",
    alignItems: "center",
    display: "flex",
  },
  _bioText: {
    width: "68%",
    fontSize: "150%",
    color: PRIMARY_COLOR,
    fontFamily: "monospace",
    [theme.breakpoints.down("xs")]: {
      fontSize: "80%"
    }
  },
  _break: {
    width: "80%",
    height: 1,
    backgroundColor: "black",
  },
  _portfolioMAin: {
    width: "100%",
    // height: 400,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // alignItems:"center",
    paddingTop: "2%",
    flexDirection: "column",
  },
  _contentMainPortfolio: {
    width: "80%",
    height: "90%",
    backgroundColor: "white",
    justifyContent: "space-around",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    marginBottom: "3%"
  },
  _textFiedls: {
    [theme.breakpoints.down("xs")]: {
      // backgroundColor:"green",
      height: 20,

    }
  },
  _portfolioCardMAin: {
    width: "15%",
    height: 270,
    backgroundColor: PRIMARY_COLOR2,
    paddingTop: "1%",
    paddingBottom: "1%",
    borderRadius: 6,
    border: "1px solid black",
    '&:hover': {
      backgroundColor: "rgba(220,220,220, 0.3)",
      borderRadius: 6,
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      height: 90,
    }
  },
  _portfolioBtnsMAin: {
    width: "100%",
    height: "40%",
    // backgroundColor: "yellowgreen",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  portfolioBtn: {
    width: "80%",
    height: "40%",
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "cursor": 'pointer',

  },
  _btnTextColor: {
    color: PRIMARY_COLOR2,
    fontFamily: "monospace",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "38%",
    }
  },
  _contactContentMain: {
    width: "80%",
    height: "90%",
    // backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column"
  },
  _resumeMain: {
    width: "100%",
    // height: 400,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // alignItems:"center",
    paddingTop: "2%",
    marginBottom: "10%",
    flexDirection: "column"
  },

}))

