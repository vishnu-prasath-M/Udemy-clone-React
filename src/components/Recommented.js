import one from "../assets/images/c1.jpg"
import two from "../assets/images/c2.jpg"
import three from "../assets/images/c3.jpg"
import four from "../assets/images/c4.jpg"

function Recommented()
{
    return(
        <div class="recommented">
        <h1 class="recommented__title">Recommented for you</h1>
        <p>Pick the best fit</p>
        <div class="recommented__container">
            <div class="course__card">
                <img src={one} alt="Courses image"></img>
                <h4>2023 Python Data visualization Masterclass</h4>
                <p>col steele</p>
                <p>4.8⭐⭐⭐⭐</p>
                <p>₹449 <del>₹1999</del></p>
            </div>
            <div class="course__card">
                <img src={two} alt="course image"></img>
                <h4>Web Development Bootcamp 2023 |Advance</h4>
                <p>col steele</p>
                <p>3.2⭐⭐⭐</p>
                <p>₹439 <del>₹1999</del></p>
            </div>
            <div class="course__card">
                <img src={three} alt="course image"></img>
                <h4>Master UIUX Designing With Figma</h4>
                <p>col steele</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>₹449 <del>₹1999</del></p>
            </div>
            <div class="course__card">
                <img src={four}alt="course image"></img>
                <h4>Basic to Advanced Java core Training</h4>
                <p>col steele</p>
                <p>3.8⭐⭐⭐</p>
                <p>₹449 <del>₹999</del></p>
            </div>

        </div>
    </div>
    )
}

export default Recommented