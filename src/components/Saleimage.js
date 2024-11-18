import one from "../assets/images/saleimg2.jpg"

function Saleimages()
{
    return(
        <div class="sale-image">
        <img src={one} alt="sale-image"></img>
        <div class="sale-image-offer">
            <h2>Udemy Flash Sale! 24 hours to save.</h2>
            <p>Get the top courses for just 399.Just one day to save but a lifetime to learn</p>

        </div>
    </div>
    )
}
export default Saleimages