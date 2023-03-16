import React from 'react'
import { Carousel, Card, Stack, Button } from "react-bootstrap"

const ProdMobile = () => {


    const reviews = [
        { _id: 1, text: "abc" },
        { _id: 2, text: "def" },
        { _id: 3, text: "ghi" },
        { _id: 4, text: "jkl" },
        { _id: 5, text: "mno" },
        { _id: 6, text: "pqr" },
        { _id: 7, text: "stu" },
        { _id: 8, text: "vwx" },
        { _id: 9, text: "yza" }
      ];

  return (
    <div>
    <div>
    <h2> Upto 50% off || Big Sale</h2>
    </div>  
      {/* <h1 className="text-center fw-bold my-5">
        User Reviews ({reviews.length})
      </h1> */}
      <div >
        <Carousel indicators={false} style={{ height: 300 }}>
         
          
          {reviews.map((review, index) => (
           
           <Carousel.Item style={{ height: 510 }}>
              <Stack
                direction="horizontal"
                className="h-50 justify-content-center align-items-center"
                gap={3}
               
              >
               
                <Card style={{ width: "18rem" }}>
                  
                  <Card.Img variant="top" src="./images/watch-01.jpg" />
                    
                </Card>

                <Card style={{ width: "18rem" }}>
                <Card style={{ width: "18rem" }}>
                  
                  <Card.Img variant="top" src="./images/wireless-01.png" />
                    
                </Card>
                </Card>

                <Card style={{ width: "18rem" }}>
                <Card style={{ width: "18rem" }}>
                  
                  <Card.Img variant="top" src="./images/single-sofa-03.jpg" />
                    
                </Card>
                </Card>
                <Card style={{ width: "18rem" }}>
                <Card style={{ width: "18rem" }}>
                  
                  <Card.Img variant="top" src="./images/watch-04.jpg" />
                    
                </Card>
                </Card>
                
         
                </Stack>
              
            </Carousel.Item>

            
          
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default ProdMobile