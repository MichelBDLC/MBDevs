import mail from '../assets/mail.png';
//make clickable to open email app

export default function Footer() {

    return (
        <div className="footer" style={{backgroundColor: 'white', borderTop: '1px solid #B4BEC9', padding: '20px'}}>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', textAlign: 'center'}}>
                <div>
                    <p style={{ fontFamily: 'Times New Roman, Times, serif'}}>We would love to hear from you:</p>
                </div>
                <div>
                    <p style={{ fontFamily: 'Times New Roman, Times, serif'}}>Contact@MBDevs.tech</p>
                </div>
            </div>
        </div>
    )
}