
import { Link } from "react-router-dom";

const Page1 = () => {
    return (
        <div>
            Page 1
            <div>
                <Link to='/'>Go to Home Page</Link><br/>
                <Link to='/page2'>Go to Page 2</Link>
            </div>
        </div>
    )
}

export default Page1;