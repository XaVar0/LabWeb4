import Header from "./components/Header";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import { useLoaderData } from "react-router-dom";

function IndexBlog(props){
    return (
        <div>
            <Header/>

            <div className="banner row">
                <img className="col banner" src="/picture/banner.png"/>
            </div>
            <div>
                <h2 className="mid">NFT - Collection Louis XIV</h2>
                <h4 className="mid">Review</h4><br/>
                <p className="mid container">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <br/>
                <p className="mid container">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi morbi tempus iaculis urna. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Scelerisque varius morbi enim nunc faucibus a pellentesque. Donec ac odio tempor orci dapibus ultrices in. Orci ac auctor augue mauris augue neque gravida. Euismod lacinia at quis risus sed vulputate. Non consectetur a erat nam. Rhoncus urna neque viverra justo nec. Urna cursus eget nunc scelerisque viverra mauris in. Pellentesque sit amet porttitor eget dolor morbi. Eu turpis egestas pretium aenean pharetra magna. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Sem fringilla ut morbi tincidunt augue interdum velit. Dui id ornare arcu odio ut sem nulla pharetra. Pretium fusce id velit ut. Duis at consectetur lorem donec massa sapien faucibus. At volutpat diam ut venenatis tellus. Sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Eget felis eget nunc lobortis. Tincidunt lobortis feugiat vivamus at augue. Tristique senectus et netus et malesuada fames ac turpis egestas. Ut sem viverra aliquet eget sit amet tellus. Egestas integer eget aliquet nibh praesent. Quam elementum pulvinar etiam non quam. Tristique risus nec feugiat in fermentum posuere urna. Aliquam malesuada bibendum arcu vitae elementum. Proin libero nunc consequat interdum varius sit amet mattis. Amet dictum sit amet justo donec. Sed arcu non odio euismod lacinia at quis.</p>   
            </div>
            <Blog/>
            <br/>
            <Footer/>
        </div>
    );
}
export default IndexBlog;