import myimg from './../myimage.png'

export default function Info () {
    return(
        <div className='card'>
            <img className='card--img' src={myimg} alt="myimage" />
            <h2 className='info-title'>Laura Smith</h2>
            <h5 className='info-text'>Frontend Developer</h5>
            <p className='info-web'>mywebsite.com</p>
            <button className='em-btn'><i class="fa fa-envelope" aria-hidden="true"></i>Email</button>
            <button className='in-btn'><i class="fa fa-linkedin-square" aria-hidden="true"></i>Linkedin</button>
        </div>
    )
}