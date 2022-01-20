import React from 'react'
import ImageContainer from '../ImageContainer/ImageContainer'
import { Link } from 'react-router-dom';



export default function SmallImagesContainer(props) {
//     


    return (
        <>
            <div className="  row">
                    <div className="col HomePage-imgElementNON p-2">
                    <Link to="/products" className="" onClick={(e) => props.resetCategryChild1()} >
                        <a href=""> <ImageContainer img={props.img1} wid="w-100" /></a>
                        <div class="name">{props.text1}</div>
                </Link>
                    </div>
                {/* 2 */}
                    <div className="col HomePage-imgElementNON p-2">
                    <Link to="/products" className="" onClick={(e) => props.resetCategryChild2()}>
                        <a href=""> <ImageContainer img={props.img2} wid="w-100" /></a>
                        <div class="name">{props.text2}</div>
                </Link>
                    </div>
                {/* 3 */}
                    <div className="col HomePage-imgElementNON p-2">
                    <Link to="/products" className="" onClick={(e) => props.resetCategryChild3()} >
                        <a href=""> <ImageContainer img={props.img3} wid="w-100" /></a>
                        <div class="name">{props.text3}</div>

                </Link>
                    </div>
                {/* 4 */}
                    <div className="col HomePage-imgElementNON p-2">
                    <Link to="/products" className="" onClick={(e) => props.resetCategryChild5()} >
                        <a href=""> <ImageContainer img={props.img4} wid="w-100" /></a>
                        <div class="name">{props.text4}</div>
                </Link>
                    </div>
                    {/* 5 */}
                        <div className="col HomePage-imgElementNON p-2">
                    <Link to="/products" className="" onClick={(e) => props.resetCategryChild4()} >
                            <a href=""> <ImageContainer img={props.img5} wid="w-100" /></a>
                            <div class="name">{props.text5}</div>
                </Link>
                        </div>
                        {/* 6 */}
                            <div className="col HomePage-imgElementNON p-2">
                        <Link to="/products" className="" >
                                <a href=""> <ImageContainer img={props.img6} wid="w-100" /></a>
                                <div class="name">{props.text6}</div>
                    </Link>
                            </div>   
                    </div>


                </>
                )
}
