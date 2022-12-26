import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Card2 from 'react-bootstrap/Card';
import Card3 from 'react-bootstrap/Card';

export default function Landing() {
  return (
    
    <Container fluid>
      <br />
      <div align="center">
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <b><h1 classNamee='my-4 text-center'>Discover Your New Home</h1></b>
          <br />
          <i><h2>"Make the buying and selling of property an easy process"</h2></i>
          <br/>
          <hr/>
          
          <h3>Explore Properties in Bahrain</h3><br/>
          <div className='cards row justify-content-center'>
            <div className="card mx-4 my-3" style={{width: '18rem'}}>
              <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1280x720.png" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Manama Property</h5>
                <p className="card-text">6 bedroom villa...</p>
              </div>
            </div>

            <div className="card mx-4 my-3" style={{width: '18rem'}}>
              <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1280x720.png" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Manama Property</h5>
                <p className="card-text">6 bedroom villa...</p>
              </div>
            </div>

            <div className="card mx-4 my-3" style={{width: '18rem'}}>
              <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1280x720.png" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Manama Property</h5>
                <p className="card-text">6 bedroom villa...</p>
              </div>
            </div>
          </div>
          <Button variant="primary">View more</Button>
          <hr/>
          <h1>Services that we offer</h1><br/>
          <p>
            <i>
             If you are looking to sell your property or buy any property then this is the platform that you need... We use blockchain technology to help
             you in getting your property sold in a very less amount of time and reduce all the paper works required. We use Ethereum blockchain to keep your
             Property details secure and prevent it from getting hacked. Check out Ethereum document to further know about the concept (
             <a href ="https://ethereum.org/en/developers/docs/"><u>Link for ethereum Documentation</u></a>)
            </i>
          </p>
          <br/>
          <hr/>
          
          <h3>The Perfect Place to Manage Your Property</h3>
          <Card style={{ width: '70rem', height: '24rem' }}>
            
            <Card.Body>
              <div align="left">
                <Card style={{ width: '35rem', height: '10'}}>
                  <Card.Title><b>Advertise your property</b></Card.Title>
                  <Card.Text>
                    Connect with more than 75 thousand buyers looking for new <br/>
                    homes using our comprehensive marketing platform.
                  </Card.Text>
                </Card>
              </div> 

              <div align="right">
                <Card style={{width: '20rem', height: '5rem'}}>
                  <Card.Img variant="top" src="https://cdn.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1280x720.png" />
                </Card>
              </div>

              <div align="left">
                <Card style={{width: '20rem', height: '5rem'}}>
                  <Card.Img variant="top" src="https://cdn.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1280x720.png" />
                </Card>
              </div> 

              <div align="right">
                <Card style={{ width: '35rem', height: '10'}}>
                  <Card.Title><b>Sell 100% online</b></Card.Title>
                  <Card.Text>
                    Sell your property fully online through our website, no paper works required
                  </Card.Text>
                </Card>
              </div>
            </Card.Body>
          </Card>
          <br/>
          
          <h3>Get Started</h3><br/>
          <p>
            <i>
              First Connect your wallet and your are all ready to register your property in the website
            </i>
          </p>
          <br/>
      </div>
    </Container>
  )
}


