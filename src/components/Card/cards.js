import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './cards.scss';

function Cards({ dayText, dateText }) {
  return (
    <>
      <div className="d-flex p-5 ">
        <div className="position-relative">
          <h1 className="blog-banner-heading">
            <span className="line"></span>
            <span className="rotated-text">{dayText}</span>
          </h1>
        </div>
        <div className="position-absolute mx-4 d-flex">
          <Card className="custom-card px-2 py-3">
            <Card.Body className="d-flex justify-center align-items-center">
              <Card.Text>
                <div className='d-flex justify-center align-items-center px-1 '>
                  <h1 className='date-heading'>{dateText}</h1>
                  <div className='p-2'>
                    <h5 className='date-color'>-17 <br /> DEC </h5>
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="custom-card mx-2 px-2 py-3">
            <Card.Body>
              <Card.Text>
                <div className=' px-1'>
                  <h5>NUNC SED IACULIS LEO</h5>
                  
                  <div className='d-flex justify-center align-items-center'>
                    <p>OCT (Oct 04, 2021) 10:30 AM- (Oct 17, 2021) 7:30 PM <br /> <span className='date-clr'>761 Camden Street. Reno, NV</span></p>
                  </div>
                  <div className='d-flex align-items-baseline'>
                    <div className='d-flex justify-center align-items-center'>
                      <p  className='date-clr px-2'>Dress code: <span>Express Yourself</span></p>
                    </div>
                    <div className='d-flex justify-center align-items-center'>
                      <Button className="custom-button">
                        SEE AGENDA
                      </Button>
                    </div>
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        
      </div>
    </>
  );
}

export default Cards;
