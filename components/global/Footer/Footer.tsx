import Button from 'components/lib/Button/Button';

function Footer() {
    return (
        <>
            <footer className='footer_main'>
                <div className="container">
                </div>

                <Button
                    color='yellow'
                    className='footer_button'
                    size='large'>
                    contact us
                    </Button>
            </footer>


            <style jsx>{`
                .footer_main{
                    height: 30vh;
                    margin: 30vw 0 0 0;
                    width: 100%;
                    display: inline-grid;
                    justify-content: center;
                    align-content: center;
                    position: relative;
                }

                .container{
                    position: absolute;
                    top: 0;
                    left: 14vw;
                    height: 100%;
                    width: 30%;
                    background: radial-gradient(90.65% 87.24% at 0% 0%, #0042FF 0%, #170FBD 38.54%, rgba(10, 10, 12, 0) 100%);
                }

                @media screen and (max-width: 1000px) {
                    .container{
                        left: 7.5vw;
                    }
                }
 
            `}</style>
        </>
    )
}

export default Footer
