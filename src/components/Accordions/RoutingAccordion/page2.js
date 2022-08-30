
import { Link } from "react-router-dom";

const Page2 = () => {
    return (
        <div>
            Page 2
            <div>
                <Link to='/'>Go to Home Page</Link><br/>
                <Link to='/page1'>Go to Page 1</Link>
            </div>
        </div>
    )
}

export default Page2;