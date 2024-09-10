import './home.css';
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import lfScreen from '../assets/lfScreen.png';
import scScreen from '../assets/scScreen.png';
import logo from '../assets/logo.png';
import { TextField, Divider } from '@mui/material';

export default function Home() {
    const [contactMessage, setContactMessage] = useState({
        name: '',
        email: '',
        industry: '',
        timeframe: '',
        message: ''
    })

    useEffect(() => {
        document.title = 'MBDevs - Home';
    }, []);

    return (
        <div>
            <div className='header'>
                <img src={logo} alt='logo' className='logo' />
                {/* <br /> */}
                <h2>Full Stack Web Development</h2>
            </div>
            <br />
            <Divider sx={{fontFamily: 'Great Vibes, cursive', fontSize: '24px'}}>Projects</Divider>
            <div className='works'>
                <div className='sect'>
                    <img src={lfScreen} style={{ cursor: 'pointer'}} onClick={() => window.open('https://loveandfashion.nyc', '_blank', 'noopener,noreferrer')} />
                    <a href='https://loveandfashion.nyc' style={{fontFamily: 'Georgia, serif'}}>View Project</a>
                    <div>
                        <p>UX/UI Designed, Mobile Optimized, SEO code optimized, performance optimized, CSS animated, Copywritten</p>
                    </div>
                    <div>
                        <p><span style={{fontWeight: 'bold'}}>Front End Implementations:</span> MUI, MUI Joy, MUI Material, Emotion, Animation CSS, API</p>
                    </div>
                    <div>
                        <p><span style={{fontWeight: 'bold'}}>Backend Implementatios:</span> Nodemailer, Multer, Cors, Express.js</p>
                    </div>
                </div>
                <Divider orientation='vertical' variant='middle' flexItem />
                <div className='sect'>
                    {/* <a href='https://shinecleaners.co' ></a> */}
                    <img src={scScreen} style={{ cursor: 'pointer'}}  onClick={() => window.open('https://shinecleaners.co', '_blank', 'noopener,noreferrer')} />
                    <a href='https://shinecleaners.co' style={{fontFamily: 'Georgia, serif'}}>View Project</a>
                    <div>
                        <p>UX/UI Designed, Mobile Optimized, SEO code optimized, performance optimized, JS & CSS animated, Copywritten</p>
                    </div>
                    <div>
                        <p><span style={{fontWeight: 'bold'}}>Front End Implementations:</span> MUI, MUI Joy, MUI Material, Emotion, Animation CSS & JS, API</p>
                    </div>
                    <div>
                        <p><span style={{fontWeight: 'bold'}}>Backend Implementatios:</span> Nodemailer with Gmail, Cors, Express.js</p>
                    </div>
                </div>
            </div>
            <br />
            <div>
                <Divider sx={{fontFamily: 'Great Vibes, cursive', fontSize: '20px'}}>Contact</Divider>
                <p className='contact-p'>Contact@MBDevs.tech</p>
                <form>
                    <TextField label='Name' variant='standard' name='name' onChange={(event) => setContactMessage({...contactMessage, name: event.target.value})} />
                    <TextField label='Email' variant='standard' type='email' name='email' onChange={(event) => setContactMessage({...contactMessage, email: event.target.value})} />
                    <TextField label='Industry' variant='standard' name='industry' onChange={(event) => setContactMessage({...contactMessage, industry: event.target.value})} />
                    <TextField label='What is your desired timeframe of project completion?' variant='standard' name='timeframe' onChange={(event) => setContactMessage({...contactMessage, timeframe: event.target.value})} />
                    <TextField label='Message' variant='outlined' name='message' size='medium' fullWidth multiline minRows={4} helperText='Please provide specifics on project needs' onChange={(event) => setContactMessage({...contactMessage, message: event.target.value})}/>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <button>Send</button>
                    </div>
                </form>
            </div>
            <br />
        </div>
    )
}