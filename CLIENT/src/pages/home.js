import React,{Component} from 'react';
import {Button, Container, Icon, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render(){
        return(
        <Container>
                
            <div>
                <div>
                    <h2 className="text-above">
                        DOrgan - The Decentralized Way.
                    </h2>
                </div>
                <img className="home" src={'https://ak.picdn.net/shutterstock/videos/1078197101/thumb/7.jpg'} width="100"  alt="Not Found"/>
                <div id="landing-header">
                    <Segment basic textAlign={"center"}>
                        <Button  positive as={Link} style={{marginTop:"50px"}} to="/donor-signup">
                            <p style={{fontSize:"20px"}}><Icon name="heartbeat"/>Donate Here</p><p>Click Here!</p>
                        </Button>
                    </Segment>
                <div id="text-below">
                <p>We Aim to Make a System where users can easily interact with hospitals and Vice Versa. The increasing Casesm of Organ Trafficing lend us this idea of making such a site </p>

                </div>
                  
                </div>
            </div>
            
        </Container>
        );
    }
}

export default Home;