import { RiTwitterXLine } from "react-icons/ri";
import { FiHome } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { RiNotification2Line } from "react-icons/ri";
import { MdMailOutline } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import ButtonCustom from "@/components/ui/customButton";
import FeedCard from "@/components/ui/cards";

let post = {
  postID: 'ID1311',
  UserID: 'UID71889',
  UserName: 'Sanket Singh',
  likes: 57,
  retweets: 21,
  content: 'This is my first post. Top 3 fav'
}
export default function Home() {
  return (
    <div>
        <div className="grid grid-cols-12 h-screen w-screen bg-[#000000] font-sans">
          <div className="col-span-2 "></div>
          <div className="col-span-2 pt-5 pl-10 w-full">
            <div className=" hover:bg-[#212324] rounded-full hover:cursor-pointer w-fit m-4 p-3 ml-1">
              <RiTwitterXLine className="text-[#f7f3f3] text-3xl"/>
            </div>
            <ButtonCustom title={"Home"} logo= {<FiHome />}/>
            <ButtonCustom title={"Explore"} logo= {<IoSearchOutline />}/>
            <ButtonCustom title={"Notifications"} logo= {<RiNotification2Line />}/>
            <ButtonCustom title={"Messages"} logo= {<MdMailOutline/>}/>
            <ButtonCustom title={"Bookmarks"} logo= {<FaRegBookmark/>}/>
            <ButtonCustom title={"Premium"} logo= {<RiTwitterXLine/>}/>
            <ButtonCustom title={"Profile"} logo= {<HiOutlineUser/>}/>
          </div>
          <div className="col-span-4 text-[#f7f3f3]  border-l border-r border-[#2d2e30]"><FeedCard props= {post}/></div>
          <div className="col-span-2 "></div>
          <div className="col-span-2 "></div>
        </div>
    </div>
  );
}
