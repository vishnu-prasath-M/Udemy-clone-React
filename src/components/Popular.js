import im1 from "../assets/images/c6.jpg"
import im2 from "../assets/images/c7.jpg"
import im3 from "../assets/images/c8.jpg"
import im4 from "../assets/images/c9.jpg"
import im5 from "../assets/images/c10.jpg"
import im6 from "../assets/images/c1.jpg"
import im7 from "../assets/images/c11.jpg"
import im8 from "../assets/images/c5.jpg"

function Popular()
{
    return(
        <div class="popular">
        <h1 class="popular__title">Most Popular</h1>
        <p class="Popular__subtitle">Pick The Best fit</p>
        <div class="popular__container">

            <div class="course__card">
                <img src={im1} alt="Courses image"></img>
                <h4>The complete 2024 web development Bootcamp</h4>
                <p>col steele</p>
                <p>4.8⭐⭐⭐⭐</p>
                <p>₹449 <del>₹1999</del></p>
            </div>
            <div class="course__card">
                <img src={im2} alt="Courses image"></img>
                <h4>Amazon Web services(AWS)</h4>
                <p>col steele</p>
                <p>4.8⭐⭐⭐⭐</p>
                <p>₹449 <del>₹1999</del></p>
            </div>
            <div class="course__card">
                <img src={im3}alt="Courses image"></img>
                <h4>2023 The Data science Course</h4>
                <p>col steele</p>
                <p>4.8⭐⭐⭐⭐</p>
                <p>₹449 <del>₹1999</del></p>
            </div>
            <div class="course__card">
                <img src={im4} alt="Courses image"></img>
                <h4>The complete Python Bootcamp 2024</h4>
                <p>col steele</p>
                <p>4.8⭐⭐⭐⭐</p>
                <p>₹449 <del>₹1999</del></p>
            </div>
            <div class="course__card">
                <img src={im5} alt="Courses image"></img>
                <h4>2024 Javascipts Bootcamp</h4>
                <p>col steele</p>
                <p>4.8⭐⭐⭐⭐</p>
                <p>₹449 <del>₹1999</del></p>
            </div>
            <div class="course__card">
                <img src={im6} alt="Courses image"></img>
                <h4>The Complete React Course</h4>
                <p>col steele</p>
                <p>4.8⭐⭐⭐⭐</p>
                <p>₹449 <del>₹1999</del></p>
            </div>
            <div class="course__card">
                <img src={im7} alt="Courses image"></img>
                <h4>Mechine Learning and Data science</h4>
                <p>col steele</p>
                <p>4.8⭐⭐⭐⭐</p>
                <p>$449 <del>₹1999</del></p>
            </div>
            <div class="course__card">
                <img src={im8} alt="Courses image"></img>
                <h4>FullStack Web Development</h4>
                <p>col steele</p>
                <p>4.8⭐⭐⭐⭐</p>
                <p>$449 <del>₹1999</del></p>
            </div>


        </div>
    </div>
    )
}

export default Popular