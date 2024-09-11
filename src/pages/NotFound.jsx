import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"
// import error404Img from "../assets/222676-P31V8Y-369.jpg"
import error404Img from "../assets/404_error_dall-e_generated.png"

function NotFound() {
  return (
    <div className="hero">
        <div className="text-center hero-content">
            <div className="max-w-lg">
                <img src={error404Img} alt="404 error put together with duct tape."/>
                <h1 className="text-8xl font-bold mb-8">Oops!</h1>
                <p className="text-5xl mb-8">404 Page Not Found!</p>
                <Link to='/' className="btn btn-primary btn-lg">
                    <FaHome className="mr-2" />
                    Back To Home
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NotFound