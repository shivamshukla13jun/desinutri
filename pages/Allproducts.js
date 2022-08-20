import React from 'react'
import { Row,Col,Container,NavLink } from 'react-bootstrap'
import Link from 'next/dist/client/link'
import Image from 'next/image'
const Allproducts = () => {
  return (
    <div>
        <Container>
        <Row className='m-auto'>
            <Col md xs lg="4">
            <Link href="product/1">
            <div className='product_item'>
                <div className='product_image'>
                    <Image src="/singleproduct.webp" width={400} height={400} alt="product" className='img-fluid'/>
                </div>
                <div className='product_content mb-5 text-center'>
                  <div className='cat_list'>
                    <Link href="product" className='product_link'>Product 1</Link>
                  </div>
                  <div className='ratting'>
                    <span className='ratng'>5 star</span>
                  </div>
                  <h3 className='product_title'>product 1</h3>
                  <span className='price'>8999</span>
                </div>
            </div>
            </Link>
            </Col>
            <Col md xs lg="4">
            <Link href="product/1">
            <div className='product_item'>
                <div className='product_image'>
                    <Image src="/singleproduct.webp" width={400} height={400} alt="product" className='img-fluid'/>
                </div>
                <div className='product_content mb-5 text-center'>
                  <div className='cat_list'>
                    <Link href="product" className='product_link'>Product 1</Link>
                  </div>
                  <div className='ratting'>
                    <span className='ratng'>5 star</span>
                  </div>
                  <h3 className='product_title'>product 1</h3>
                  <span className='price'>8999</span>
                </div>
            </div>
            </Link>
            </Col>
            <Col md xs lg="4">
            <Link href="product/1">
            <div className='product_item'>
                <div className='product_image'>
                    <Image src="/singleproduct.webp" width={400} height={400} alt="product" className='img-fluid'/>
                </div>
                <div className='product_content mb-5 text-center'>
                  <div className='cat_list'>
                    <Link href="product" className='product_link'>Product 1</Link>
                  </div>
                  <div className='ratting'>
                    <span className='ratng'>5 star</span>
                  </div>
                  <h3 className='product_title'>product 1</h3>
                  <span className='price'>8999</span>
                </div>
            </div>
            </Link>
            </Col>
            <Col md xs lg="4">
            <Link href="product/1">
            <div className='product_item'>
                <div className='product_image'>
                    <Image src="/singleproduct.webp" width={400} height={400} alt="product" className='img-fluid'/>
                </div>
                <div className='product_content mb-5 text-center'>
                  <div className='cat_list'>
                    <Link href="product" className='product_link'>Product 1</Link>
                  </div>
                  <div className='ratting'>
                    <span className='ratng'>5 star</span>
                  </div>
                  <h3 className='product_title'>product 1</h3>
                  <span className='price'>8999</span>
                </div>
            </div>
            </Link>
            </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Allproducts